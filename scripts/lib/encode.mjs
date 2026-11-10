// Per-file recipes for publish (ffmpeg, sharp, esbuild), the bridge injection and the path guards.
//
// Output files keep the same path, name and extension as the source, so no reference inside game data,
// CSS or HTML changes. Encoders use bitexact flags so a forced re-run produces the same bytes.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFile } from 'node:child_process';
import sharp from 'sharp';
import esbuild from 'esbuild';
import { parse as parseHtml } from 'node-html-parser';

sharp.cache(false);

// ---- tunables (one place) ----
export const AUDIO_TARGET_KBPS = 96; // fallback if the budget is ever exceeded: 80
export const AUDIO_THRESHOLD_KBPS = 112;
// Music only (HUB-33): re-encoded when the source is above 192 kbps, else copied. Fallback if the budget is
// exceeded: q4 / 128k (set MUSIC_OGG_Q, MUSIC_MP3_KBPS and MUSIC_OGG_EST_KBPS together).
export const MUSIC_THRESHOLD_KBPS = 192;
export const MUSIC_OGG_Q = 5;
export const MUSIC_MP3_KBPS = 160;
export const MUSIC_OGG_EST_KBPS = 160; // q5 nominal; sparse material comes out lower, so this is conservative
export const MAX_W = 1920;
export const MAX_H = 1080;
export const JS_TARGETS = ['chrome61', 'chrome64', 'chrome80'];
export const COVER_WIDTHS = [480, 960];

// Bump a version when the recipe output changes, so cached files are rebuilt.
export const RECIPES = {
  copy: 'copy@1',
  mp3: `mp3@1:${AUDIO_TARGET_KBPS}k`,
  ogg: `ogg@1:q2`,
  oggMusic: `ogg-music@1:q${MUSIC_OGG_Q}`,
  mp3Music: `mp3-music@1:${MUSIC_MP3_KBPS}k`,
  webp: 'webp@1:q80',
  png: 'png@1',
  jpeg: 'jpeg@1:q82',
  js: 'js@1',
  playCss: 'play-css-urls@1',
  cover: 'cover-webp@1:q82',
  coverSvg: 'cover-svg@1',
};

// Estimated size ratios for --dry-run (images and js are rough; audio is computed from the bitrate).
export const DRY_RATIO = { copy: 1, webp: 0.85, png: 0.95, jpeg: 0.9, js: 1.05 };

// ---- what is copied at all ----
const SKIP_DIRS = new Set(['tl', 'cache', 'saves']);
const SKIP_FILES = new Set(['thumbs.db', '.ds_store']);
const SKIP_EXT = new Set(['.rpy', '.rpyc', '.map']);
const REFUSED_AUDIO = new Set(['.wav', '.flac', '.m4a']);

export function skipDir(name) {
  return SKIP_DIRS.has(name.toLowerCase());
}
export function skipFile(name) {
  return SKIP_FILES.has(name.toLowerCase()) || SKIP_EXT.has(path.extname(name).toLowerCase());
}
export function refusedFile(name) {
  return REFUSED_AUDIO.has(path.extname(name).toLowerCase());
}

// Recipe kind by extension.
export function kindOf(rel) {
  switch (path.extname(rel).toLowerCase()) {
    case '.mp3': return 'mp3';
    case '.ogg': return 'ogg';
    case '.webp': return 'webp';
    case '.png': return 'png';
    case '.jpg': case '.jpeg': return 'jpeg';
    case '.js': return 'js';
    default: return 'copy';
  }
}

// Music tracks: Edu `assets/mus-*/` and VN `audio/music_NN.*`. Speech and SFX are not music.
export function isMusic(rel) {
  return /\/assets\/mus-[^/]+\//.test(rel) || /\/audio\/music_\d+\./.test(rel);
}

export function isMarkup(rel) {
  return /\.(x?html)$/i.test(rel);
}

export function isPlayCss(rel) {
  return rel.startsWith('play/') && /\.css$/i.test(rel);
}

// VN builds put `url(fonts/X.ttf)` in `fonts/fonts.css`; a browser resolves it against the CSS file, so it
// asks for `fonts/fonts/X.ttf`. In the copy, a url that does not resolve next to the CSS file but does once a
// leading `fonts/` is dropped is rewritten. `exists(relPath)` tests a path relative to the CSS file's folder.
export function fixCssFontUrls(css, exists) {
  let changed = 0;
  const out = css.replace(/url\(\s*(['"]?)([^'")]+)\1\s*\)/gi, (whole, q, u) => {
    const t = u.trim();
    if (/^(data:|[a-z][a-z0-9+.-]*:|\/|#)/i.test(t)) return whole;
    const p = t.split(/[?#]/)[0];
    const tail = t.slice(p.length);
    if (!/^fonts\//i.test(p)) return whole;
    let dec = p;
    try { dec = decodeURI(p); } catch { /* keep raw */ }
    if (exists(dec)) return whole;
    const stripped = dec.replace(/^fonts\//i, '');
    if (!exists(stripped)) return whole;
    changed++;
    return `url(${q}${p.replace(/^fonts\//i, '')}${tail}${q})`;
  });
  return { css: out, changed };
}

// Recipe string stored in the manifest. A bridge injection is part of it because the output differs.
export function recipeFor(rel, bridge) {
  if (bridge && isMarkup(rel)) return `inject-bridge@1:${bridge.player}:${bridge.workId}`;
  if (isPlayCss(rel)) return RECIPES.playCss;
  const kind = kindOf(rel);
  if (isMusic(rel) && kind === 'ogg') return RECIPES.oggMusic;
  if (isMusic(rel) && kind === 'mp3') return RECIPES.mp3Music;
  return RECIPES[kind];
}

// Re-encode threshold and target for one audio file (music has its own, higher ones).
export function audioPlan(rel, kind) {
  if (isMusic(rel)) {
    return { threshold: MUSIC_THRESHOLD_KBPS, targetKbps: kind === 'mp3' ? MUSIC_MP3_KBPS : MUSIC_OGG_EST_KBPS, music: true };
  }
  return { threshold: AUDIO_THRESHOLD_KBPS, targetKbps: AUDIO_TARGET_KBPS, music: false };
}

// ---- bridge tag ----
// Prefix from a file's own depth under the site root. `rel` is public-relative (`public/` is copied
// as is to the site root): play/x/index.html -> ../../ ; read/x/text/ch01.xhtml -> ../../../
export function upPrefix(rel) {
  const depth = rel.split('/').filter(Boolean).length - 1;
  return '../'.repeat(depth);
}

export function bridgeTag(rel, { player, workId }) {
  const up = upPrefix(rel);
  return `<script src="${up}assets/hub-bridge.js" data-player="${player}" data-back="${up}item/${workId}/"></script>`;
}

// Inserts the tag before the last </body>. Returns the new text; throws when there is no body.
export function injectBridge(text, tag, rel) {
  const re = /<\/body\s*>/gi;
  let last = null;
  for (let m; (m = re.exec(text)); ) last = m;
  if (last) return text.slice(0, last.index) + tag + '\n' + text.slice(last.index);
  if (/\.xhtml$/i.test(rel)) throw new Error(`${rel}: no </body> to inject the bridge before`);
  const root = parseHtml(text);
  const body = root.querySelector('body');
  if (!body) throw new Error(`${rel}: no <body> to inject the bridge into`);
  body.insertAdjacentHTML('beforeend', tag);
  return root.toString();
}

// ---- guards ----
function isInside(root, target) {
  const rel = path.relative(path.resolve(root), path.resolve(target));
  return rel === '' || (!rel.startsWith('..') && !path.isAbsolute(rel));
}

// Every output must resolve inside publicDir (or be the manifest file).
export function assertWritable(target, { publicDir, manifestPath }) {
  const t = path.resolve(target);
  if (manifestPath && t === path.resolve(manifestPath)) return t;
  if (isInside(publicDir, t) && t !== path.resolve(publicDir)) return t;
  throw new Error(`refusing to write outside public/: ${target}`);
}

// A source must never be inside the repo.
export function assertSourceOutsideRepo(source, repoRoot) {
  if (isInside(repoRoot, source)) throw new Error(`refusing a source inside the repo: ${source}`);
  return path.resolve(source);
}

// ---- helpers ----
export function sha256File(file) {
  return new Promise((resolve, reject) => {
    const h = crypto.createHash('sha256');
    fs.createReadStream(file).on('data', (c) => h.update(c)).on('error', reject).on('end', () => resolve(h.digest('hex')));
  });
}
export function sha256Buffer(buf) {
  return crypto.createHash('sha256').update(buf).digest('hex');
}

function run(cmd, args) {
  return new Promise((resolve, reject) => {
    execFile(cmd, args, { maxBuffer: 64 * 1024 * 1024, windowsHide: true }, (err, stdout, stderr) => {
      if (err) reject(new Error(`${cmd} ${args.slice(0, 6).join(' ')} failed: ${(stderr || err.message).toString().trim().slice(-600)}`));
      else resolve(String(stdout));
    });
  });
}

export async function toolVersion(cmd) {
  const out = await run(cmd, ['-version']);
  return out.split('\n')[0].trim();
}

// kb/s of the first audio stream (falls back to the container).
export async function probeBitrateKbps(file) {
  const out = await run('ffprobe', ['-v', 'error', '-select_streams', 'a:0',
    '-show_entries', 'stream=bit_rate:format=bit_rate:format=duration', '-of', 'json', file]);
  const j = JSON.parse(out);
  let bps = Number(j.streams?.[0]?.bit_rate) || Number(j.format?.bit_rate) || 0;
  if (!bps && j.format?.duration) bps = (fs.statSync(file).size * 8) / Number(j.format.duration);
  return bps / 1000;
}

// Size ratio used by --dry-run.
export async function estimateOutSize(rel, srcSize, srcPath) {
  const kind = kindOf(rel);
  if (kind === 'mp3' || kind === 'ogg') {
    const kbps = await probeBitrateKbps(srcPath);
    const plan = audioPlan(rel, kind);
    if (kbps > plan.threshold) return Math.round(srcSize * (plan.targetKbps / kbps));
    return srcSize;
  }
  return Math.round(srcSize * (DRY_RATIO[kind] ?? 1));
}

const BITEXACT = ['-map_metadata', '-1', '-fflags', '+bitexact', '-flags:a', '+bitexact'];

async function encodeAudio(src, tmp, kind, music = false) {
  const codec = kind === 'mp3'
    ? ['-c:a', 'libmp3lame', '-b:a', `${music ? MUSIC_MP3_KBPS : AUDIO_TARGET_KBPS}k`, '-f', 'mp3']
    : ['-c:a', 'libvorbis', '-q:a', String(music ? MUSIC_OGG_Q : 2), '-f', 'ogg'];
  await run('ffmpeg', ['-v', 'error', '-nostdin', '-y', '-i', src, '-map', '0:a', ...codec, ...BITEXACT, tmp]);
}

async function transformJs(code, rel) {
  const tried = [];
  for (const target of JS_TARGETS) {
    try {
      const r = await esbuild.transform(code, { loader: 'js', target, minify: false, sourcemap: false, charset: 'utf8', legalComments: 'inline' });
      return { code: r.code, target, warnings: tried.length ? [`${rel}: esbuild could not lower to ${tried.join(', ')}; used ${target}`] : [] };
    } catch (e) {
      tried.push(target);
      if (target === JS_TARGETS[JS_TARGETS.length - 1]) throw new Error(`${rel}: esbuild failed at ${target}: ${e.message}`);
    }
  }
}

// Processes one file. Returns { action: 'encoded'|'copied', outHash, outSize, jsTarget?, warnings }.
// `out` is the final path; the work goes through out + '.part'. Callers have already run the guards.
export async function processFile({ src, out, rel, bridge, srcHash, srcSize }) {
  const tmp = out + '.part';
  fs.mkdirSync(path.dirname(out), { recursive: true });
  const finish = (action, extra = {}) => {
    fs.renameSync(tmp, out);
    return { action, warnings: [], ...extra };
  };
  const hashOut = async (action, extra) => {
    const r = finish(action, extra);
    r.outHash = await sha256File(out);
    r.outSize = fs.statSync(out).size;
    return r;
  };
  const copy = async () => {
    fs.copyFileSync(src, tmp);
    const r = finish('copied');
    r.outHash = srcHash;
    r.outSize = srcSize;
    return r;
  };
  try {
    if (bridge && isMarkup(rel)) {
      const text = fs.readFileSync(src, 'utf8');
      fs.writeFileSync(tmp, injectBridge(text, bridgeTag(rel, bridge), rel));
      return await hashOut('encoded');
    }
    if (isPlayCss(rel)) {
      const dir = path.dirname(src);
      const fixed = fixCssFontUrls(fs.readFileSync(src, 'utf8'), (p) => fs.existsSync(path.join(dir, p)));
      if (!fixed.changed) return await copy();
      fs.writeFileSync(tmp, fixed.css);
      return await hashOut('encoded');
    }
    const kind = kindOf(rel);
    if (kind === 'mp3' || kind === 'ogg') {
      const kbps = await probeBitrateKbps(src);
      const plan = audioPlan(rel, kind);
      if (!(kbps > plan.threshold)) return await copy();
      await encodeAudio(src, tmp, kind, plan.music);
      if (fs.statSync(tmp).size >= srcSize) { fs.rmSync(tmp); return await copy(); }
      return await hashOut('encoded');
    }
    if (kind === 'webp' || kind === 'png' || kind === 'jpeg') {
      const meta = await sharp(src).metadata();
      if ((meta.pages || 1) > 1) return await copy(); // animated: leave as is
      const oversize = meta.width > MAX_W || meta.height > MAX_H;
      let img = sharp(src);
      if (oversize) img = img.resize(MAX_W, MAX_H, { fit: 'inside', withoutEnlargement: true });
      const buf = await (kind === 'webp' ? img.webp({ quality: 80 })
        : kind === 'png' ? img.png({ compressionLevel: 9, effort: 10 })
          : img.jpeg({ quality: 82, mozjpeg: true })).toBuffer();
      // webp: only when at least 15 percent smaller; png/jpeg: only when smaller. Oversize always takes the result.
      const limit = kind === 'webp' ? srcSize * 0.85 : srcSize;
      const use = oversize ? true : (kind === 'webp' ? buf.length <= limit : buf.length < limit);
      if (!use) return await copy();
      fs.writeFileSync(tmp, buf);
      const r = finish('encoded');
      r.outHash = sha256Buffer(buf);
      r.outSize = buf.length;
      return r;
    }
    if (kind === 'js') {
      const t = await transformJs(fs.readFileSync(src, 'utf8'), rel);
      fs.writeFileSync(tmp, t.code);
      const r = finish('encoded', { jsTarget: t.target, warnings: t.warnings });
      r.outHash = sha256Buffer(Buffer.from(t.code, 'utf8'));
      r.outSize = fs.statSync(out).size;
      return r;
    }
    return await copy();
  } catch (e) {
    fs.rmSync(tmp, { force: true });
    throw e;
  }
}

// Cover: source image to a webp of the given width, quality 82.
export async function encodeCover(src, out, width) {
  const tmp = out + '.part';
  fs.mkdirSync(path.dirname(out), { recursive: true });
  const buf = await sharp(src).resize({ width, withoutEnlargement: true }).webp({ quality: 82 }).toBuffer();
  fs.writeFileSync(tmp, buf);
  fs.renameSync(tmp, out);
  return { outHash: sha256Buffer(buf), outSize: buf.length };
}
