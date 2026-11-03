// npm run publish: copies builds and files from the tool data folders into public/, re-encodes the copies,
// lowers the copied JS, injects the back-to-library bridge, writes content/publish-manifest.json, checks the
// size budget. Sources are only ever read.
//
// Flags: --only <workId> (repeatable)  --force  --dry-run  --skip-smoke  --catalog <path>
// Exit codes: 0 ok, 1 errors (including a failed smoke check), 2 over budget or a file over 95 MB.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { parse as parseHtml } from 'node-html-parser';
import { loadCatalog } from './lib/catalog.mjs';
import { coverSvg } from './lib/cover.mjs';
import {
  RECIPES, COVER_WIDTHS, recipeFor, skipDir, skipFile, refusedFile, processFile, encodeCover, estimateOutSize,
  sha256File, sha256Buffer, toolVersion, assertWritable, assertSourceOutsideRepo,
} from './lib/encode.mjs';
import { loadManifest, emptyManifest, writeManifestIfChanged } from './lib/manifest.mjs';
import { measure, report } from './lib/budget.mjs';
import { startServer } from './lib/static-server.mjs';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = path.join(repoRoot, 'public');
const manifestPath = path.join(repoRoot, 'content', 'publish-manifest.json');
const ROOTS = ['play', 'read', 'files', 'covers'];
const MiB = 1024 * 1024;
const posix = (p) => p.split(path.sep).join('/');

function parseArgs(argv) {
  const a = { only: [], force: false, dryRun: false, skipSmoke: false, catalog: undefined };
  for (let i = 0; i < argv.length; i++) {
    const v = argv[i];
    if (v === '--only') a.only.push(argv[++i]);
    else if (v === '--force') a.force = true;
    else if (v === '--dry-run') a.dryRun = true;
    else if (v === '--skip-smoke') a.skipSmoke = true;
    else if (v === '--catalog') a.catalog = path.resolve(process.cwd(), argv[++i] || '');
    else throw new Error(`unknown argument "${v}"\nusage: node scripts/publish.mjs [--only <workId>]... [--force] [--dry-run] [--skip-smoke] [--catalog <path>]`);
  }
  if (a.only.some((o) => !o)) throw new Error('--only needs a work id');
  return a;
}

// ---- planning ----
function walkSource(root, errors, label) {
  const out = [];
  (function rec(dir, relDir) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true }).sort((x, y) => (x.name < y.name ? -1 : 1))) {
      const rel = relDir ? `${relDir}/${e.name}` : e.name;
      if (e.isDirectory()) { if (!skipDir(e.name)) rec(path.join(dir, e.name), rel); }
      else if (e.isFile()) {
        if (skipFile(e.name)) continue;
        if (refusedFile(e.name)) { errors.push(`${label}: ${rel} is a ${path.extname(e.name)} file; changing its format would change references (not supported)`); continue; }
        const st = fs.statSync(path.join(dir, e.name));
        out.push({ rel, abs: path.join(dir, e.name), size: st.size, mtimeMs: st.mtimeMs });
      }
    }
  })(root, '');
  return out;
}

function buildPlan(catalog, errors) {
  const plan = [];
  for (const work of catalog.works) {
    const w = { work, items: [], files: [], cover: null };
    const alias = (source, rel) => `${source.replace(/\/+$/, '')}/${rel}`;
    const addTree = (kind, entry, player) => {
      const root = assertSourceOutsideRepo(catalog.resolve(entry.source), repoRoot);
      const label = `${work.id}/${entry.id}`;
      const files = walkSource(root, errors, label);
      const rels = new Set(files.map((f) => f.rel));
      if (kind === 'play') {
        for (const need of ['index.html', 'game-data.js']) if (!rels.has(need)) errors.push(`${label}: ${need} missing in ${root}`);
      } else if (!rels.has(entry.entry)) errors.push(`${label}: entry ${entry.entry} missing in ${root}`);
      const item = { id: entry.id, kind, workId: work.id, path: `${kind}/${entry.id}/`, outRels: [] };
      for (const f of files) {
        const outRel = `${kind}/${entry.id}/${f.rel}`;
        const bridge = kind === 'play'
          ? (f.rel === 'index.html' ? { player, workId: work.id } : null)
          : { player: 'read', workId: work.id };
        const bridged = bridge && /\.x?html$/i.test(f.rel) ? bridge : null;
        w.files.push({ item: item.id, outRel, srcAbs: f.abs, srcAlias: alias(entry.source, f.rel), size: f.size, mtimeMs: f.mtimeMs, bridge: bridged, recipe: recipeFor(outRel, bridged) });
        item.outRels.push(outRel);
      }
      w.items.push(item);
    };
    for (const p of work.plays || []) addTree('play', p, p.player);
    for (const r of work.reads || []) addTree('read', r, 'read');
    for (const d of work.downloads || []) {
      const abs = assertSourceOutsideRepo(catalog.resolve(d.source), repoRoot);
      const st = fs.statSync(abs);
      const outRel = `files/${work.id}/${d.filename}`;
      w.files.push({ item: d.id, outRel, srcAbs: abs, srcAlias: d.source, size: st.size, mtimeMs: st.mtimeMs, bridge: null, recipe: RECIPES.copy });
      w.items.push({ id: d.id, kind: 'download', workId: work.id, path: outRel, outRels: [outRel] });
    }
    if (work.cover) {
      const abs = assertSourceOutsideRepo(catalog.resolve(work.cover), repoRoot);
      const st = fs.statSync(abs);
      w.cover = { type: 'webp' };
      for (const width of COVER_WIDTHS) {
        const outRel = `covers/${work.id}-${width}.webp`;
        w.cover[width] = outRel;
        w.files.push({ item: null, outRel, srcAbs: abs, srcAlias: work.cover, size: st.size, mtimeMs: st.mtimeMs, bridge: null, recipe: RECIPES.cover, coverWidth: width });
      }
    } else {
      const outRel = `covers/${work.id}.svg`;
      w.cover = { type: 'svg', path: outRel };
      w.files.push({ item: null, outRel, generated: true, svg: () => coverSvg(work), recipe: RECIPES.coverSvg, size: 0 });
    }
    plan.push(w);
  }
  return plan;
}

// ---- running ----
async function pool(tasks, limit, onDone) {
  let next = 0;
  async function worker() {
    while (next < tasks.length) {
      const i = next++;
      await tasks[i]();
      onDone?.();
    }
  }
  await Promise.all(Array.from({ length: Math.max(1, Math.min(limit, tasks.length)) }, worker));
}

async function doFile(f, ctx) {
  const { prev, force, dryRun } = ctx;
  const out = assertWritable(path.join(publicDir, f.outRel), { publicDir, manifestPath });
  const old = prev.files[f.outRel];
  const outStat = fs.statSync(out, { throwIfNoEntry: false });

  if (f.generated) {
    const svg = await f.svg();
    const buf = Buffer.from(svg, 'utf8');
    const outHash = sha256Buffer(buf);
    const entry = { recipe: f.recipe, outHash, outSize: buf.length };
    if (!force && outStat && old && old.outHash === outHash && outStat.size === buf.length) return { entry, action: 'cached' };
    if (!dryRun) {
      fs.mkdirSync(path.dirname(out), { recursive: true });
      fs.writeFileSync(out + '.part', buf);
      fs.renameSync(out + '.part', out);
    }
    return { entry, action: dryRun ? 'would' : 'encoded', projected: buf.length };
  }

  const sameRecipe = old && old.src === f.srcAlias && old.recipe === f.recipe && outStat && outStat.size === old.outSize;
  if (!force && sameRecipe && old.srcSize === f.size && old.srcMtimeMs === f.mtimeMs) return { entry: old, action: 'cached' };
  const srcHash = await sha256File(f.srcAbs);
  if (!force && sameRecipe && old.srcHash === srcHash && (await sha256File(out)) === old.outHash) {
    return { entry: { ...old, srcSize: f.size, srcMtimeMs: f.mtimeMs }, action: 'cached' };
  }
  if (dryRun) {
    const projected = f.coverWidth ? Math.round(f.size * 0.1) : await estimateOutSize(f.outRel, f.size, f.srcAbs);
    return { entry: null, action: 'would', projected };
  }
  let r;
  if (f.coverWidth) {
    r = { action: 'encoded', warnings: [], ...(await encodeCover(f.srcAbs, out, f.coverWidth)) };
  } else {
    r = await processFile({ src: f.srcAbs, out, rel: f.outRel, bridge: f.bridge, srcHash, srcSize: f.size });
  }
  const entry = { src: f.srcAlias, srcSize: f.size, srcMtimeMs: f.mtimeMs, srcHash, recipe: f.recipe, outHash: r.outHash, outSize: r.outSize };
  if (r.jsTarget) entry.jsTarget = r.jsTarget;
  return { entry, action: r.action, warnings: r.warnings };
}

// ---- orphans ----
function findOrphans(expected) {
  const orphans = [];
  for (const root of ROOTS) {
    const base = path.join(publicDir, root);
    if (!fs.existsSync(base)) continue;
    (function rec(dir) {
      for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, e.name);
        if (e.isDirectory()) rec(full);
        else {
          const rel = posix(path.relative(publicDir, full));
          if (dir === base && e.name === '.gitkeep') continue;
          if (!expected.has(rel)) orphans.push(rel);
        }
      }
    })(base);
  }
  return orphans.sort();
}

function removeEmptyDirs() {
  for (const root of ROOTS) {
    const base = path.join(publicDir, root);
    if (!fs.existsSync(base)) continue;
    (function rec(dir) {
      for (const e of fs.readdirSync(dir, { withFileTypes: true })) if (e.isDirectory()) rec(path.join(dir, e.name));
      if (dir !== base && fs.readdirSync(dir).length === 0) {
        assertWritable(dir, { publicDir, manifestPath });
        fs.rmdirSync(dir);
      }
    })(base);
  }
}

// ---- smoke check ----
const ASSET_EXT = /\.(webp|png|jpe?g|gif|svg|mp3|ogg|wav|flac|m4a|mp4|webm|woff2?|ttf|otf)$/i;
const EXTERNAL = /^([a-z][a-z0-9+.-]*:|\/\/|#|%23)/i;
const FONT_EXT = /\.(ttf|otf|woff2?)$/i;
const dirCache = new Map();

function exactExists(root, relPosix) {
  let cur = root;
  const segs = relPosix.split('/').filter((s) => s && s !== '.');
  for (const seg of segs) {
    let names = dirCache.get(cur);
    if (!names) {
      try { names = new Set(fs.readdirSync(cur)); } catch { return false; }
      dirCache.set(cur, names);
    }
    if (!names.has(seg)) return false;
    cur = path.join(cur, seg);
  }
  return true;
}

// Unresolved font files only warn: the page still runs with a fallback font (game-data.js lists bare font names).
function checkRef(root, baseDirRel, ref, from, problems, warns) {
  let r = String(ref).trim();
  if (!r || EXTERNAL.test(r)) return;
  r = r.split('#')[0].split('?')[0];
  if (!r) return;
  try { r = decodeURI(r); } catch { /* keep raw */ }
  const joined = path.posix.normalize(path.posix.join(baseDirRel || '.', r));
  if (joined.startsWith('..')) { problems.push(`${from}: "${ref}" leaves the play folder`); return; }
  if (!exactExists(root, joined)) {
    (FONT_EXT.test(joined) ? warns : problems).push(`${from}: "${ref}" does not resolve (exact case) to a file`);
  }
}

function staticCheck(playRoot) {
  const problems = [];
  const warns = [];
  dirCache.clear();
  const html = path.join(playRoot, 'index.html');
  const root = parseHtml(fs.readFileSync(html, 'utf8'));
  for (const el of root.querySelectorAll('[src],[href]')) {
    if (el.getAttribute('data-player') !== undefined) continue; // the bridge tag: its file lives in dist/assets
    for (const attr of ['src', 'href']) {
      const v = el.getAttribute(attr);
      if (v != null) checkRef(playRoot, '', v, `index.html ${attr}`, problems, warns);
    }
  }
  const data = path.join(playRoot, 'game-data.js');
  const text = fs.readFileSync(data, 'utf8');
  const seen = new Set();
  for (const m of text.matchAll(/"((?:[^"\\\n]|\\.){1,300})"|'((?:[^'\\\n]|\\.){1,300})'/g)) {
    let s = m[1] ?? m[2];
    if (s === undefined || !ASSET_EXT.test(s.replace(/\\\//g, '/'))) continue;
    try { s = m[1] !== undefined ? JSON.parse(`"${m[1]}"`) : s; } catch { /* keep raw */ }
    if (seen.has(s)) continue;
    seen.add(s);
    if (FONT_EXT.test(s)) continue; // bare font file names, not paths
    checkRef(playRoot, '', s, 'game-data.js', problems, warns);
  }
  (function rec(dir, relDir) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const rel = relDir ? `${relDir}/${e.name}` : e.name;
      if (e.isDirectory()) rec(path.join(dir, e.name), rel);
      else if (/\.css$/i.test(e.name)) {
        const css = fs.readFileSync(path.join(dir, e.name), 'utf8').replace(/url\(\s*(['"]?)data:[^]*?\1\s*\)/g, '');
        for (const m of css.matchAll(/url\(\s*(['"]?)([^'")]+)\1\s*\)/g)) checkRef(playRoot, relDir, m[2], rel, problems, warns);
        for (const m of css.matchAll(/@import\s+(['"])([^'"]+)\1/g)) checkRef(playRoot, relDir, m[2], rel, problems, warns);
      }
    }
  })(playRoot, '');
  return { problems, warns };
}

async function smokeAll(plays, ctx) {
  const results = new Map();
  for (const p of plays) {
    const sc = staticCheck(path.join(publicDir, 'play', p.id));
    results.set(p.id, { problems: sc.problems, warns: sc.warns });
  }
  const { chromium } = await import('@playwright/test');
  const server = await startServer(publicDir);
  const browser = await chromium.launch();
  try {
    await pool(plays.map((p) => async () => {
      const res = results.get(p.id);
      const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
      const page = await context.newPage();
      page.on('pageerror', (e) => res.problems.push(`page error: ${e.message}`));
      try {
        await page.goto(`${server.url}play/${p.id}/index.html`, { waitUntil: 'load', timeout: 30000 });
        await page.waitForTimeout(5000);
      } catch (e) {
        res.problems.push(`page did not load: ${e.message}`);
      }
      await context.close();
    }), 3);
  } finally {
    await browser.close();
    await server.close();
  }
  return results;
}

// ---- main ----
async function main() {
  const t0 = Date.now();
  const args = parseArgs(process.argv.slice(2));
  const errors = [];
  const warnings = [];

  const catalog = loadCatalog({ repoRoot, catalogPath: args.catalog || 'content/catalog.json', checkSources: true });
  const ids = new Set(catalog.works.map((w) => w.id));
  for (const o of args.only) if (!ids.has(o)) errors.push(`--only ${o}: not a work id in the catalog`);
  if (errors.length) throw new Error(errors.join('\n'));
  const selected = new Set(args.only.length ? args.only : catalog.works.map((w) => w.id));

  console.log(`ffmpeg: ${await toolVersion('ffmpeg').catch(() => { throw new Error('ffmpeg is not on PATH; install it (the publish step needs ffmpeg and ffprobe)'); })}`);
  await toolVersion('ffprobe').catch(() => { throw new Error('ffprobe is not on PATH (it ships with ffmpeg)'); });

  const plan = buildPlan(catalog, errors);
  if (errors.length) throw new Error(`Source problems:\n  - ${errors.join('\n  - ')}`);
  const prev = loadManifest(manifestPath);
  const expected = new Set(plan.flatMap((w) => w.files.map((f) => f.outRel)));

  // process selected works
  const tasks = [];
  const results = new Map(); // outRel -> { entry, action }
  const counts = { copied: 0, encoded: 0, cached: 0, would: 0, deleted: 0 };
  const failed = new Set(); // work ids with a failed file
  let doneCount = 0;
  const selectedFiles = plan.filter((w) => selected.has(w.work.id)).flatMap((w) => w.files.map((f) => ({ w, f })));
  const projected = { bytes: 0, byKind: {} };
  for (const { w, f } of selectedFiles) {
    tasks.push(async () => {
      try {
        const r = await doFile(f, { prev, force: args.force, dryRun: args.dryRun });
        results.set(f.outRel, r);
        counts[r.action === 'cached' ? 'cached' : r.action === 'would' ? 'would' : r.action === 'copied' ? 'copied' : 'encoded']++;
        for (const wmsg of r.warnings || []) warnings.push(wmsg);
        if (r.projected != null) {
          projected.bytes += r.projected;
          const k = recipeFor(f.outRel, f.bridge).split('@')[0];
          projected.byKind[k] = (projected.byKind[k] || 0) + 1;
        }
      } catch (e) {
        failed.add(w.work.id);
        errors.push(`${f.outRel}: ${e.message}`);
      }
    });
  }
  const jobs = Math.max(1, Math.floor(os.cpus().length / 2));
  console.log(`${args.dryRun ? 'Dry run: ' : ''}${selectedFiles.length} files in ${selected.size} work(s), ${jobs} parallel jobs`);
  const tick = setInterval(() => console.log(`  ... ${doneCount}/${tasks.length} files`), 15000);
  await pool(tasks, jobs, () => { doneCount++; });
  clearInterval(tick);

  // orphans
  const orphans = findOrphans(expected);
  if (orphans.length) {
    console.log(`${args.dryRun ? 'Would delete' : 'Deleting'} ${orphans.length} file(s) not produced by this catalog:`);
    for (const o of orphans.slice(0, 50)) console.log('  ' + o);
    if (orphans.length > 50) console.log(`  ... and ${orphans.length - 50} more`);
  }
  if (!args.dryRun && errors.length === 0) {
    for (const o of orphans) { fs.rmSync(assertWritable(path.join(publicDir, o), { publicDir, manifestPath })); counts.deleted++; }
    removeEmptyDirs();
  }

  if (args.dryRun) {
    const would = selectedFiles.length - counts.cached;
    console.log(`\nWould process ${counts.would} file(s) (${Object.entries(projected.byKind).map(([k, n]) => `${k} ${n}`).join(', ') || 'none'}), ${counts.cached} cached.`);
    let cachedBytes = 0;
    for (const { f } of selectedFiles) { const r = results.get(f.outRel); if (r && r.action === 'cached') cachedBytes += r.entry.outSize; }
    const total = cachedBytes + projected.bytes;
    const budget = catalog.site.budgetMB;
    console.log(`Projected size of the selected works: ${(total / MiB).toFixed(1)} MB (estimate from source sizes and recipe ratios; ${would} files not yet published). Budget ${budget} MB.`);
    for (const e of errors) console.error('ERROR ' + e);
    for (const wmsg of warnings) console.log('warning: ' + wmsg);
    return errors.length ? 1 : 0;
  }

  // smoke
  const smoke = new Map(); // playId -> 'ok'|'failed'|'skipped'
  const playsToCheck = [];
  for (const { work } of plan.filter((w) => selected.has(w.work.id) && !failed.has(w.work.id))) {
    for (const p of work.plays || []) playsToCheck.push(p);
  }
  if (args.skipSmoke) {
    for (const p of playsToCheck) smoke.set(p.id, 'skipped');
  } else if (playsToCheck.length) {
    console.log(`Smoke check: ${playsToCheck.length} play(s), static references then headless Chromium (5 s each, 3 at a time)`);
    const res = await smokeAll(playsToCheck);
    for (const p of playsToCheck) {
      const { problems, warns } = res.get(p.id);
      for (const wm of new Set(warns)) warnings.push(`play ${p.id}: ${wm} (font falls back; a ROADMAP row for the tool)`);
      smoke.set(p.id, problems.length ? 'failed' : 'ok');
      if (problems.length) {
        errors.push(`smoke check failed for play ${p.id}:\n      ${[...new Set(problems)].slice(0, 15).join('\n      ')}${problems.length > 15 ? `\n      ... ${problems.length - 15} more` : ''}`);
      } else console.log(`  ${p.id}: ok`);
    }
  }

  // manifest
  const next = emptyManifest();
  for (const w of plan) {
    if (selected.has(w.work.id)) {
      if (failed.has(w.work.id)) continue;
      for (const f of w.files) next.files[f.outRel] = results.get(f.outRel).entry;
      for (const it of w.items) {
        next.items[it.id] = {
          kind: it.kind, workId: it.workId, path: it.path,
          size: it.outRels.reduce((n, r) => n + next.files[r].outSize, 0),
          files: it.outRels.length,
          smoke: it.kind === 'play' ? smoke.get(it.id) : null,
        };
      }
      next.covers[w.work.id] = w.cover;
    } else {
      for (const f of w.files) if (prev.files[f.outRel]) next.files[f.outRel] = prev.files[f.outRel];
      for (const it of w.items) if (prev.items[it.id]) next.items[it.id] = prev.items[it.id];
      if (prev.covers[w.work.id]) next.covers[w.work.id] = prev.covers[w.work.id];
    }
  }
  const wrote = writeManifestIfChanged(manifestPath, next);

  // budget
  const m = measure(publicDir, { works: catalog.works });
  const rep = report(m, { budgetMB: catalog.site.budgetMB, allowanceMB: 5 });
  console.log('\n' + rep.text);
  for (const wmsg of warnings) console.log('warning: ' + wmsg);
  for (const e of errors) console.error('ERROR ' + e);

  const secs = ((Date.now() - t0) / 1000).toFixed(1);
  console.log(`\nSummary: ${selected.size} works, ${selectedFiles.length} files: ${counts.copied} copied, ${counts.encoded} encoded, ${counts.cached} cached, ${counts.deleted} deleted; manifest ${wrote ? 'written' : 'unchanged'}; ` +
    `${(m.total / MiB).toFixed(1)} MB of ${catalog.site.budgetMB} MB budget; ${secs} s`);
  if (errors.length) return 1;
  if (rep.overBudget || rep.tooLarge.length) return 2;
  return 0;
}

const isMain = process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href;
if (isMain) {
  main().then((code) => process.exit(code), (e) => { console.error(e.message || e); process.exit(1); });
}
