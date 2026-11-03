#!/usr/bin/env node
// Checks dist/ before deploy: structure, links (exact case), play assets, JS syntax (ES2018),
// banned CSS features for old TV browsers, size budget.
// Usage: node scripts/check-site.mjs [--dist <dir>] [--catalog <file>]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import * as acorn from 'acorn';
import { parse } from 'node-html-parser';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const flag = (name) => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : undefined; };
const distDir = path.resolve(flag('--dist') || path.join(repoRoot, 'dist'));
let catalogPath = flag('--catalog') ? path.resolve(flag('--catalog')) : path.join(repoRoot, 'content', 'catalog.json');
if (!fs.existsSync(catalogPath)) catalogPath = path.join(repoRoot, 'content', 'fixtures', 'catalog.sample.json');

const MEDIA_EXT = 'png|jpe?g|webp|gif|svg|avif|mp3|ogg|oga|wav|m4a|mp4|webm|woff2?|ttf|otf';
const sections = ['structure', 'links', 'assets', 'syntax', 'css', 'budget'];
const results = Object.fromEntries(sections.map((s) => [s, { checked: 0, errors: [], warnings: [], notes: [] }]));
const err = (s, msg) => results[s].errors.push(msg);

if (!fs.existsSync(distDir)) {
  console.error(`dist not found: ${distDir} (run npm run build first)`);
  process.exit(1);
}

// ---------- file listing ----------
const allFiles = []; // posix paths relative to dist
(function walk(dir, rel) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const r = rel ? `${rel}/${e.name}` : e.name;
    if (e.isDirectory()) walk(path.join(dir, e.name), r);
    else allFiles.push(r);
  }
})(distDir, '');
const ext = (f) => path.posix.extname(f).toLowerCase();
const read = (rel) => fs.readFileSync(path.join(distDir, rel), 'utf8');

// ---------- exact-case resolution ----------
const dirCache = new Map();
const listDir = (rel) => {
  if (!dirCache.has(rel)) {
    let names = null;
    try { names = fs.readdirSync(path.join(distDir, rel), { withFileTypes: true }).map((e) => [e.name, e.isDirectory()]); } catch { /* missing */ }
    dirCache.set(rel, names);
  }
  return dirCache.get(rel);
};
/** returns { kind: 'file'|'dir' } or { error }; rel is a normalised posix path without leading slash */
function resolveExact(rel) {
  const segs = rel.split('/').filter(Boolean);
  let cur = '';
  let kind = 'dir';
  for (const seg of segs) {
    const names = listDir(cur);
    if (!names) return { error: 'missing' };
    const hit = names.find(([n]) => n === seg);
    if (!hit) {
      const ci = names.find(([n]) => n.toLowerCase() === seg.toLowerCase());
      return { error: ci ? `case mismatch (on disk: ${cur ? cur + '/' : ''}${ci[0]})` : 'missing' };
    }
    cur = cur ? `${cur}/${seg}` : seg;
    kind = hit[1] ? 'dir' : 'file';
  }
  return { kind };
}

/** Resolve a URL found in file `fromRel` (posix, relative to dist). Returns null when ignored. */
function checkUrl(fromRel, raw, { wantDirIndex = true } = {}) {
  let u = raw.trim();
  if (!u || u.startsWith('#') || u.startsWith('//') || /^[a-z][a-z0-9+.-]*:/i.test(u)) return null;
  u = u.split('#')[0].split('?')[0];
  if (!u) return null;
  if (u.startsWith('/')) return { error: 'root-absolute URL (site lives under a sub-path)', target: u };
  let dec = u;
  try { dec = decodeURIComponent(u); } catch { /* keep raw */ }
  const base = path.posix.dirname(fromRel);
  const joined = path.posix.normalize(base === '.' ? dec : `${base}/${dec}`);
  if (joined === '..' || joined.startsWith('../')) return { error: 'escapes the site root', target: joined };
  const rel = joined === '.' ? '' : joined.replace(/^\.\//, '');
  const r = resolveExact(rel);
  if (r.error) return { error: r.error, target: rel };
  if (r.kind === 'dir' && wantDirIndex) {
    if (!dec.endsWith('/') && rel !== '') return { error: 'directory link without trailing slash', target: rel };
    const idx = resolveExact(`${rel ? rel + '/' : ''}index.html`);
    if (idx.error) return { error: `directory has no index.html (${idx.error})`, target: rel };
  }
  return { target: rel };
}

// ---------- structure ----------
const S = results.structure;
let catalog = null;
try { catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8')); } catch (e) { err('structure', `cannot read catalog ${catalogPath}: ${e.message}`); }
S.notes.push(`catalog: ${path.relative(repoRoot, catalogPath)}`);
for (const f of ['index.html', 'downloads/index.html', 'about/index.html', '404.html', '.nojekyll', 'assets/site.js', 'assets/hub-bridge.js', 'assets/site.css']) {
  S.checked++;
  if (resolveExact(f).error) err('structure', `missing ${f}`);
}
if (catalog) {
  for (const w of catalog.works || []) {
    S.checked++;
    if (resolveExact(`item/${w.id}/index.html`).error) err('structure', `missing item/${w.id}/index.html`);
    for (const p of w.plays || []) if (resolveExact(`play/${p.id}/index.html`).error) err('structure', `work ${w.id}: missing play/${p.id}/index.html`);
    for (const r of w.reads || []) if (resolveExact(`read/${r.id}`).error) err('structure', `work ${w.id}: missing read/${r.id}/`);
    for (const d of w.downloads || []) if (resolveExact(`files/${w.id}/${d.filename}`).error) err('structure', `work ${w.id}: missing files/${w.id}/${d.filename}`);
  }
}

// ---------- links ----------
const L = results.links;
const URL_ATTRS = ['href', 'src', 'data-src', 'data-back', 'poster', 'xlink:href', 'action'];
const CSS_URL = /url\(\s*(['"]?)(.*?)\1\s*\)/gi;
const htmlFiles = allFiles.filter((f) => ['.html', '.xhtml', '.htm'].includes(ext(f)));
const inlineScripts = []; // {file, code}
const parsedCache = new Map();

for (const file of htmlFiles) {
  let root;
  try { root = parse(read(file), { blockTextElements: { script: true, noscript: true, style: true, pre: true } }); } catch (e) { err('links', `${file}: cannot parse (${e.message})`); continue; }
  parsedCache.set(file, root);
  const test = (attr, value) => {
    L.checked++;
    const r = checkUrl(file, value);
    if (r && r.error) err('links', `${file}: ${attr}="${value}" -> ${r.target} : ${r.error}`);
  };
  for (const el of root.querySelectorAll('*')) {
    const a = el.attributes;
    const tag = el.rawTagName.toLowerCase();
    for (const name of URL_ATTRS) if (a[name] !== undefined) test(`${tag} ${name}`, a[name]);
    if (a.srcset !== undefined) for (const part of a.srcset.split(',')) { const u = part.trim().split(/\s+/)[0]; if (u) test(`${tag} srcset`, u); }
    if (a.style && /url\(/i.test(a.style)) for (const m of a.style.matchAll(CSS_URL)) test('style url()', m[2]);
    if (tag === 'style') for (const m of el.text.matchAll(CSS_URL)) test('<style> url()', m[2]);
    if (tag === 'script' && a.src === undefined && !/json|template/i.test(a.type || '') && el.text.trim()) inlineScripts.push({ file, code: el.text });
  }
}

// bridge injection: every play index.html and every read page, depth-correct
const bridgeTargets = htmlFiles.filter((f) => /^play\/[^/]+\/index\.html$/.test(f) || f.startsWith('read/'));
for (const file of bridgeTargets) {
  L.checked++;
  const root = parsedCache.get(file);
  if (!root) continue;
  const tags = root.querySelectorAll('script').filter((s) => /(^|\/)assets\/hub-bridge\.js$/.test(s.attributes.src || ''));
  if (tags.length !== 1) { err('links', `${file}: expected exactly one hub-bridge script tag, found ${tags.length}`); continue; }
  const t = tags[0].attributes;
  const up = '../'.repeat(file.split('/').length - 1);
  if (t.src !== `${up}assets/hub-bridge.js`) err('links', `${file}: bridge src "${t.src}" should be "${up}assets/hub-bridge.js"`);
  const want = file.startsWith('read/') ? ['read'] : ['vn', 'edu'];
  if (!want.includes(t['data-player'])) err('links', `${file}: bridge data-player "${t['data-player']}" not in ${want.join('|')}`);
  const back = t['data-back'];
  const m = back && /(^|\/)item\/([a-z0-9-]+)\/$/.exec(back);
  if (!m) err('links', `${file}: bridge data-back "${back}" is not an item/<workId>/ link`);
  else if (back !== `${up}item/${m[2]}/`) err('links', `${file}: bridge data-back "${back}" should be "${up}item/${m[2]}/"`);
}

// ---------- assets (play game data and CSS url()) ----------
const A = results.assets;
const quoted = new RegExp(`(["'])((?:(?!\\1)[^\\\\\\n\\r])+?\\.(?:${MEDIA_EXT}))\\1`, 'gi');
const playDirs = [...new Set(allFiles.filter((f) => f.startsWith('play/')).map((f) => f.split('/')[1]))];
for (const id of playDirs) {
  for (const gd of ['game-data.js', 'game-data.json']) {
    const rel = `play/${id}/${gd}`;
    if (!allFiles.includes(rel)) continue;
    const seen = new Set();
    for (const m of read(rel).matchAll(quoted)) {
      const s = m[2];
      if (seen.has(s) || /[{}$]|:\/\/|^data:/.test(s)) continue;
      seen.add(s);
      A.checked++;
      let r = checkUrl(`play/${id}/index.html`, s, { wantDirIndex: false });
      // bare font file names are family names the player resolves itself: accept root or fonts/
      if (r && r.error && !s.includes('/') && /\.(ttf|otf|woff2?)$/i.test(s)) r = checkUrl(`play/${id}/index.html`, `fonts/${s}`, { wantDirIndex: false });
      if (r && r.error) err('assets', `${rel}: "${s}" : ${r.error}`);
    }
  }
}
for (const file of allFiles.filter((f) => ext(f) === '.css')) {
  const text = read(file).replace(/\/\*[\s\S]*?\*\//g, '');
  for (const m of text.matchAll(CSS_URL)) {
    A.checked++;
    const r = checkUrl(file, m[2], { wantDirIndex: false });
    if (!r || !r.error) continue;
    // inside a play, CSS url() is also accepted relative to the play root (plan T5); warn when only that works
    const play = /^play\/[^/]+\//.exec(file);
    const alt = play && checkUrl(`${play[0]}index.html`, m[2], { wantDirIndex: false });
    if (alt && !alt.error) A.warnings.push(`${file}: url(${m[2]}) resolves only from the play root; a browser requests it relative to the CSS file and gets a 404`);
    else err('assets', `${file}: url(${m[2]}) : ${r.error}`);
  }
}

// ---------- syntax ----------
const Y = results.syntax;
const tryParse = (label, code) => {
  Y.checked++;
  try { acorn.parse(code, { ecmaVersion: 2018, sourceType: 'script', allowHashBang: true }); } catch (e) {
    err('syntax', `${label}: ${e.message}`);
  }
};
for (const f of allFiles.filter((f) => ext(f) === '.js' || ext(f) === '.mjs')) tryParse(f, read(f));
for (const s of inlineScripts) tryParse(`${s.file} (inline script)`, s.code);

// ---------- css banned features ----------
const C = results.css;
const BANNED = [
  [/(^|[;{\s])(row-gap|column-gap|gap)\s*:/g, 'flex/grid "gap" (use grid-gap or margins; flex gap needs Chrome 84)'],
  [/(^|[;{\s])aspect-ratio\s*:/g, 'aspect-ratio (Chrome 88; use a padding-top ratio box)'],
  [/(^|[;{\s])inset(-[a-z]+)*\s*:/g, 'inset (Chrome 87; use top/right/bottom/left)'],
  [/clamp\(/g, 'clamp() (Chrome 79)'],
  [/:focus-visible/g, ':focus-visible (Chrome 86; style :focus)'],
  [/:is\(/g, ':is() (Chrome 88)'],
  [/:where\(/g, ':where() (Chrome 88)'],
  [/backdrop-filter/g, 'backdrop-filter (slow or unsupported on TV browsers)'],
];
const siteCss = 'assets/site.css';
if (allFiles.includes(siteCss)) {
  const css = read(siteCss).replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, ' '));
  C.checked++;
  for (const [re, label] of BANNED) {
    for (const m of css.matchAll(re)) {
      const line = css.slice(0, m.index).split('\n').length;
      err('css', `${siteCss}:${line}: ${label}`);
    }
  }
} else err('css', `${siteCss} missing`);
for (const file of htmlFiles.filter((f) => !f.startsWith('play/') && !f.startsWith('read/'))) {
  const root = parsedCache.get(file);
  if (!root) continue;
  for (const el of root.querySelectorAll('[loading]')) {
    C.checked++;
    if (el.attributes.loading === 'lazy' && el.attributes['data-src'] === undefined) err('css', `${file}: <${el.rawTagName} loading="lazy"> without data-src fallback (Chrome 77)`);
  }
}

// ---------- budget ----------
const B = results.budget;
const budgetMB = catalog?.site?.budgetMB ?? 600;
let usedBudgetLib = false;
try {
  const budget = await import(pathToFileURL(path.join(repoRoot, 'scripts', 'lib', 'budget.mjs')).href);
  const m = await budget.measure(distDir);
  // dist already contains the site chrome, so no extra allowance here
  const rep = await budget.report(m, { budgetMB, allowanceMB: 0 });
  usedBudgetLib = true;
  B.checked++;
  B.notes.push(rep.text);
  if (rep.overBudget) err('budget', `dist is over the ${budgetMB} MB budget`);
  if (rep.tooLarge && (!Array.isArray(rep.tooLarge) || rep.tooLarge.length)) err('budget', `a file is over the 95 MB limit: ${JSON.stringify(rep.tooLarge)}`);
  for (const w of rep.warnings || []) B.warnings.push(typeof w === 'string' ? w : JSON.stringify(w));
} catch (e) {
  if (usedBudgetLib) throw e;
  B.notes.push(`budget.mjs not usable (${e.code === 'ERR_MODULE_NOT_FOUND' ? 'not found' : e.message}); using built-in sum`);
  let total = 0;
  for (const f of allFiles) {
    const size = fs.statSync(path.join(distDir, f)).size;
    total += size;
    B.checked++;
    if (size > 95 * 1048576) err('budget', `${f} is over 95 MB (${(size / 1048576).toFixed(1)} MB)`);
    else if (size > 50 * 1048576) B.warnings.push(`${f} is over 50 MB (${(size / 1048576).toFixed(1)} MB)`);
  }
  B.notes.push(`total ${(total / 1048576).toFixed(1)} MB of ${budgetMB} MB`);
  if (total > budgetMB * 1048576) err('budget', `dist is ${(total / 1048576).toFixed(1)} MB, over the ${budgetMB} MB budget`);
}

// ---------- report ----------
let failed = 0;
const MAX = 40;
console.log(`check-site: ${distDir}`);
for (const s of sections) {
  const r = results[s];
  failed += r.errors.length;
  console.log(`\n== ${s}: ${r.errors.length ? `${r.errors.length} error(s)` : 'ok'} (${r.checked} checked)`);
  for (const n of r.notes) console.log(n.split('\n').map((l) => `   ${l}`).join('\n'));
  for (const w of r.warnings) console.log(`   warning: ${w}`);
  r.errors.slice(0, MAX).forEach((e) => console.log(`   ERROR ${e}`));
  if (r.errors.length > MAX) console.log(`   ... and ${r.errors.length - MAX} more`);
}
console.log(`\n${failed ? `FAILED: ${failed} error(s)` : 'PASSED'}`);
process.exit(failed ? 1 : 0);
