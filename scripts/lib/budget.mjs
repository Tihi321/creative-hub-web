// Size sums and the budget report. Shared by scripts/publish.mjs and scripts/check-site.mjs.
//   measure(dir, { works? }) -> { total, byType: {audio, images, js, other}, largestFiles: [{path,size}],
//                                 byWork: [{workId,size}], allFiles: [{path,size}] }
//   report(measureResult, { budgetMB, allowanceMB = 5 }) -> { text, overBudget, tooLarge: [], warnings: [] }
// Units: "MB" in this module means MiB (1024*1024). byWork maps play/<id> and read/<id> to works through
// `works` (the catalog works array); without it those folders are listed under their own id.
// files/<workId>/... and covers/<workId>[-480|-960].(webp|svg) map by name. Other paths belong to no work.
// Limits: total + allowance over budget -> overBudget; a file over 95 MB -> tooLarge; over 50 MB -> warnings.
import fs from 'node:fs';
import path from 'node:path';

export const MIB = 1024 * 1024;
export const WARN_FILE_BYTES = 50 * MIB;
export const MAX_FILE_BYTES = 95 * MIB;

const AUDIO = new Set(['.mp3', '.ogg', '.wav', '.flac', '.m4a', '.opus']);
const IMAGES = new Set(['.webp', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.avif', '.ico']);
const JS = new Set(['.js', '.mjs']);

function typeOf(file) {
  const ext = path.extname(file).toLowerCase();
  if (AUDIO.has(ext)) return 'audio';
  if (IMAGES.has(ext)) return 'images';
  if (JS.has(ext)) return 'js';
  return 'other';
}

function walk(dir, base, out) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, base, out);
    else if (e.isFile()) out.push({ path: path.relative(base, full).split(path.sep).join('/'), size: fs.statSync(full).size });
  }
}

export function measure(dir, { works } = {}) {
  const files = [];
  if (fs.existsSync(dir)) walk(dir, dir, files);
  const playOwner = new Map();
  const readOwner = new Map();
  for (const w of works || []) {
    for (const p of w.plays || []) playOwner.set(p.id, w.id);
    for (const r of w.reads || []) readOwner.set(r.id, w.id);
  }
  const byType = { audio: 0, images: 0, js: 0, other: 0 };
  const work = new Map();
  let total = 0;
  for (const f of files) {
    total += f.size;
    byType[typeOf(f.path)] += f.size;
    const seg = f.path.split('/');
    let owner = null;
    if (seg[seg.length - 1].startsWith('.')) continue; // .gitkeep and friends belong to no work
    if (seg[0] === 'play' && seg.length > 2) owner = playOwner.get(seg[1]) || seg[1];
    else if (seg[0] === 'read' && seg.length > 2) owner = readOwner.get(seg[1]) || seg[1];
    else if (seg[0] === 'files' && seg.length > 2) owner = seg[1];
    else if (seg[0] === 'covers' && seg.length === 2) owner = seg[1].replace(/(-480|-960)?\.(webp|svg)$/, '');
    if (owner) work.set(owner, (work.get(owner) || 0) + f.size);
  }
  const largestFiles = [...files].sort((a, b) => b.size - a.size || a.path.localeCompare(b.path)).slice(0, 20);
  const byWork = [...work].map(([workId, size]) => ({ workId, size }))
    .sort((a, b) => b.size - a.size || a.workId.localeCompare(b.workId));
  return { total, byType, largestFiles, byWork, allFiles: files };
}

const mb = (n) => (n / MIB).toFixed(1);

export function report(m, { budgetMB, allowanceMB = 5 } = {}) {
  const withAllowance = m.total + allowanceMB * MIB;
  const overBudget = budgetMB != null && withAllowance > budgetMB * MIB;
  const all = m.allFiles || m.largestFiles;
  const tooLarge = all.filter((f) => f.size > MAX_FILE_BYTES).map((f) => ({ path: f.path, size: f.size }));
  const warnings = all.filter((f) => f.size > WARN_FILE_BYTES && f.size <= MAX_FILE_BYTES)
    .map((f) => `${f.path} is ${mb(f.size)} MB (GitHub warns on files over 50 MB)`);
  const lines = [];
  lines.push(`Size: ${mb(m.total)} MB + ${allowanceMB} MB allowance = ${mb(withAllowance)} MB, budget ${budgetMB} MB: ${overBudget ? 'OVER BUDGET' : 'ok'}`);
  lines.push('By type: ' + Object.entries(m.byType).map(([k, v]) => `${k} ${mb(v)} MB`).join(', '));
  if (overBudget || tooLarge.length) {
    lines.push('', 'Largest works:');
    for (const w of m.byWork.slice(0, 10)) lines.push(`  ${mb(w.size).padStart(8)} MB  ${w.workId}`);
    lines.push('', 'Largest files:');
    for (const f of m.largestFiles.slice(0, 20)) lines.push(`  ${mb(f.size).padStart(8)} MB  ${f.path}`);
  }
  for (const f of tooLarge) lines.push(`ERROR: ${f.path} is ${mb(f.size)} MB, over the 95 MB limit`);
  for (const w of warnings) lines.push(`warning: ${w}`);
  if (overBudget || tooLarge.length) {
    lines.push('', 'The written files stay in place so you can look. Do not commit public/ until this is resolved:',
      'drop a work, lower the audio bitrate in scripts/lib/encode.mjs, or raise site.budgetMB on purpose.');
  }
  return { text: lines.join('\n'), overBudget, tooLarge, warnings };
}
