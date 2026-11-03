// Catalog loader and validator, shared by publish, build-site and check-site.
//
// loadCatalog({ repoRoot, catalogPath, checkSources }) -> { site, works, resolve, catalogPath }
//   - source paths are written as "<alias>:<relative/path>"; aliases come from
//     content/sources.example.json, overridden by content/sources.local.json.
//   - throws one Error listing every problem (error.errors is the array).
//   - checkSources:false skips "source exists" and "root outside repo" (CI has no source folders).
//
// CLI: node scripts/lib/catalog.mjs --check [--catalog <path>]
//
// Derived values (never stored in the catalog):
//   deriveTypes(work)     play types in order of first appearance, then 'book' when the work has
//                         reads or downloads. Exception: a work with no plays, no downloads and
//                         only reads whose entry is "article.html" has the single type 'article'.
//   deriveLanguages(work) union of play, read and download languages, in the order hr, en, de,
//                         then any other code alphabetically.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ID_RE = /^[a-z0-9][a-z0-9-]*$/;
const LANG_RE = /^[a-z]{2}$/;
const SOURCE_RE = /^([a-z][a-z0-9-]*):(.+)$/;
const PLAY_TYPES = ['visual-novel', 'picture-book', 'choice-game', 'edu-game'];
const PLAYERS = ['vn', 'edu'];
const FORMATS = ['epub', 'pdf', 'docx'];
const GROUPS = ['book', 'gamebook', 'vn-export'];
const LANG_ORDER = ['hr', 'en', 'de'];

const isObj = (v) => v !== null && typeof v === 'object' && !Array.isArray(v);
const isStr = (v) => typeof v === 'string' && v.trim() !== '';

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function isInside(root, target) {
  const rel = path.relative(path.resolve(root), path.resolve(target));
  return rel === '' || (!rel.startsWith('..') && !path.isAbsolute(rel));
}

export function deriveLanguages(work) {
  const set = new Set();
  for (const p of work.plays || []) for (const l of p.languages || []) set.add(l);
  for (const r of work.reads || []) for (const l of r.languages || []) set.add(l);
  for (const d of work.downloads || []) if (d.language) set.add(d.language);
  const known = LANG_ORDER.filter((l) => set.has(l));
  const rest = [...set].filter((l) => !LANG_ORDER.includes(l)).sort();
  return [...known, ...rest];
}

export function deriveTypes(work) {
  const plays = work.plays || [];
  const reads = work.reads || [];
  const downloads = work.downloads || [];
  if (plays.length === 0 && downloads.length === 0 && reads.length > 0 &&
      reads.every((r) => r.entry === 'article.html')) {
    return ['article'];
  }
  const types = [];
  for (const p of plays) if (!types.includes(p.type)) types.push(p.type);
  if (reads.length > 0 || downloads.length > 0) types.push('book');
  return types;
}

function loadAliases(repoRoot, errors) {
  const aliases = {};
  const example = path.join(repoRoot, 'content', 'sources.example.json');
  const local = path.join(repoRoot, 'content', 'sources.local.json');
  for (const file of [example, local]) {
    if (!fs.existsSync(file)) continue;
    try {
      const j = readJson(file);
      if (!isObj(j)) throw new Error('must be an object');
      Object.assign(aliases, j);
    } catch (e) {
      errors.push(`${path.relative(repoRoot, file)}: ${e.message}`);
    }
  }
  if (Object.keys(aliases).length === 0) errors.push('no source aliases found (content/sources.example.json)');
  return aliases;
}

function validateLocalized(errors, where, v, { required = true } = {}) {
  if (!isObj(v)) {
    if (required) errors.push(`${where}: must be an object with "hr" and "en"`);
    return;
  }
  for (const l of ['hr', 'en']) {
    if (!isStr(v[l])) errors.push(`${where}.${l}: required, non-empty string`);
  }
}

function validateLanguages(errors, where, v) {
  if (!Array.isArray(v) || v.length === 0) {
    errors.push(`${where}: must be a non-empty array of ISO 639-1 codes`);
    return;
  }
  for (const l of v) if (typeof l !== 'string' || !LANG_RE.test(l)) errors.push(`${where}: "${l}" is not a two-letter ISO 639-1 code`);
}

export function loadCatalog({ repoRoot, catalogPath = 'content/catalog.json', checkSources = true } = {}) {
  if (!repoRoot) throw new Error('loadCatalog: repoRoot is required');
  repoRoot = path.resolve(repoRoot);
  const errors = [];
  const absCatalog = path.resolve(repoRoot, catalogPath);

  let raw;
  try {
    raw = readJson(absCatalog);
  } catch (e) {
    const err = new Error(`Cannot read catalog ${absCatalog}: ${e.message}`);
    err.errors = [err.message];
    throw err;
  }

  const aliases = loadAliases(repoRoot, errors);
  const usedRoots = new Set();

  // resolve(aliasPath) -> absolute path. Throws on unknown alias or a path escaping its root.
  function resolve(aliasPath) {
    const m = SOURCE_RE.exec(String(aliasPath));
    if (!m) throw new Error(`"${aliasPath}" is not an alias path (<alias>:<path>)`);
    const root = aliases[m[1]];
    if (!root) throw new Error(`unknown source alias "${m[1]}" in "${aliasPath}"`);
    const abs = path.resolve(root, m[2]);
    if (!isInside(root, abs)) throw new Error(`"${aliasPath}" escapes its root`);
    return abs;
  }

  function checkSource(where, source, { kind = 'any', entry } = {}) {
    if (!isStr(source)) {
      errors.push(`${where}.source: required, "<alias>:<path>"`);
      return;
    }
    const m = SOURCE_RE.exec(source);
    if (!m) {
      errors.push(`${where}.source: "${source}" must look like <alias>:<path>`);
      return;
    }
    if (!aliases[m[1]]) {
      errors.push(`${where}.source: unknown alias "${m[1]}"`);
      return;
    }
    let abs;
    try {
      abs = resolve(source);
    } catch (e) {
      errors.push(`${where}.source: ${e.message}`);
      return;
    }
    if (!checkSources) return;
    usedRoots.add(m[1]);
    if (!fs.existsSync(abs)) {
      errors.push(`${where}.source: ${abs} does not exist`);
      return;
    }
    const st = fs.statSync(abs);
    if (kind === 'dir' && !st.isDirectory()) errors.push(`${where}.source: ${abs} is not a folder`);
    if (kind === 'file' && !st.isFile()) errors.push(`${where}.source: ${abs} is not a file`);
    if (kind === 'dir' && st.isDirectory() && entry && !fs.existsSync(path.join(abs, entry))) {
      errors.push(`${where}: entry file "${entry}" not found in ${abs}`);
    }
  }

  // ---- top level ----
  if (!isObj(raw)) errors.push('catalog must be a JSON object');
  const catalog = isObj(raw) ? raw : {};
  if (catalog.version !== 1) errors.push('version: must be 1');

  // ---- site ----
  const site = isObj(catalog.site) ? catalog.site : {};
  if (!isObj(catalog.site)) errors.push('site: required object');
  validateLocalized(errors, 'site.title', site.title);
  validateLocalized(errors, 'site.tagline', site.tagline);
  if (typeof site.budgetMB !== 'number' || !(site.budgetMB > 0)) errors.push('site.budgetMB: must be a positive number');

  // ---- works ----
  const works = Array.isArray(catalog.works) ? catalog.works : [];
  if (!Array.isArray(catalog.works) || works.length === 0) errors.push('works: must be a non-empty array');

  const seen = new Map(); // id -> where
  function claimId(where, id) {
    if (!isStr(id) || !ID_RE.test(id)) {
      errors.push(`${where}.id: "${id}" does not match ${ID_RE}`);
      return;
    }
    if (seen.has(id)) errors.push(`${where}.id: "${id}" already used at ${seen.get(id)}`);
    else seen.set(id, where);
  }

  works.forEach((w, wi) => {
    const wLabel = isObj(w) && isStr(w.id) ? `works[${w.id}]` : `works[#${wi}]`;
    if (!isObj(w)) {
      errors.push(`${wLabel}: must be an object`);
      return;
    }
    claimId(wLabel, w.id);
    validateLocalized(errors, `${wLabel}.title`, w.title);
    validateLocalized(errors, `${wLabel}.blurb`, w.blurb);
    if (w.order !== undefined && typeof w.order !== 'number') errors.push(`${wLabel}.order: must be a number`);
    if (w.cover !== undefined) checkSource(`${wLabel}.cover`, w.cover, { kind: 'file' });

    for (const k of ['plays', 'reads', 'downloads']) {
      if (w[k] !== undefined && !Array.isArray(w[k])) errors.push(`${wLabel}.${k}: must be an array`);
    }
    const plays = Array.isArray(w.plays) ? w.plays : [];
    const reads = Array.isArray(w.reads) ? w.reads : [];
    const downloads = Array.isArray(w.downloads) ? w.downloads : [];
    if (plays.length + reads.length + downloads.length === 0) errors.push(`${wLabel}: needs at least one play, read or download`);

    plays.forEach((p, i) => {
      const where = `${wLabel}.plays[${isObj(p) && p.id ? p.id : '#' + i}]`;
      if (!isObj(p)) return errors.push(`${where}: must be an object`);
      claimId(where, p.id);
      if (!PLAY_TYPES.includes(p.type)) errors.push(`${where}.type: "${p.type}" not in ${PLAY_TYPES.join(' | ')}`);
      if (!PLAYERS.includes(p.player)) errors.push(`${where}.player: "${p.player}" not in ${PLAYERS.join(' | ')}`);
      validateLocalized(errors, `${where}.label`, p.label);
      validateLanguages(errors, `${where}.languages`, p.languages);
      checkSource(where, p.source, { kind: 'dir', entry: 'index.html' });
    });

    reads.forEach((r, i) => {
      const where = `${wLabel}.reads[${isObj(r) && r.id ? r.id : '#' + i}]`;
      if (!isObj(r)) return errors.push(`${where}: must be an object`);
      claimId(where, r.id);
      validateLocalized(errors, `${where}.label`, r.label);
      validateLanguages(errors, `${where}.languages`, r.languages);
      if (!isStr(r.entry) || r.entry.includes('..') || path.isAbsolute(r.entry)) errors.push(`${where}.entry: required relative file name`);
      checkSource(where, r.source, { kind: 'dir', entry: isStr(r.entry) ? r.entry : undefined });
    });

    const filenames = new Set();
    downloads.forEach((d, i) => {
      const where = `${wLabel}.downloads[${isObj(d) && d.id ? d.id : '#' + i}]`;
      if (!isObj(d)) return errors.push(`${where}: must be an object`);
      claimId(where, d.id);
      if (!GROUPS.includes(d.group)) errors.push(`${where}.group: "${d.group}" not in ${GROUPS.join(' | ')}`);
      if (!FORMATS.includes(d.format)) errors.push(`${where}.format: "${d.format}" not in ${FORMATS.join(' | ')}`);
      validateLocalized(errors, `${where}.label`, d.label);
      if (typeof d.language !== 'string' || !LANG_RE.test(d.language)) errors.push(`${where}.language: "${d.language}" is not a two-letter ISO 639-1 code`);
      if (!isStr(d.filename) || /[\\/]/.test(d.filename)) {
        errors.push(`${where}.filename: required plain file name (no slashes)`);
      } else {
        if (filenames.has(d.filename)) errors.push(`${where}.filename: "${d.filename}" is used twice in ${wLabel}`);
        filenames.add(d.filename);
        if (FORMATS.includes(d.format) && !d.filename.toLowerCase().endsWith('.' + d.format)) {
          errors.push(`${where}.filename: "${d.filename}" does not end in .${d.format}`);
        }
      }
      checkSource(where, d.source, { kind: 'file' });
    });
  });

  if (isStr(site.featured) && !works.some((w) => isObj(w) && w.id === site.featured)) {
    errors.push(`site.featured: "${site.featured}" is not a work id`);
  } else if (!isStr(site.featured)) {
    errors.push('site.featured: required work id');
  }

  // Source roots must sit outside the repo (nothing from the repo is ever a source).
  if (checkSources) {
    for (const a of usedRoots) {
      if (isInside(repoRoot, aliases[a])) errors.push(`source alias "${a}" (${aliases[a]}) is inside the repo`);
    }
  }

  if (errors.length > 0) {
    const err = new Error(`Catalog has ${errors.length} problem${errors.length === 1 ? '' : 's'}:\n  - ${errors.join('\n  - ')}`);
    err.errors = errors;
    throw err;
  }
  return { site: catalog.site, works, resolve, catalogPath: absCatalog };
}

// ---- CLI ----
const isMain = process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href;
if (isMain) {
  const args = process.argv.slice(2);
  const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
  const ci = args.indexOf('--catalog');
  const catalogPath = ci >= 0 ? path.resolve(process.cwd(), args[ci + 1] || '') : 'content/catalog.json';
  if (!args.includes('--check')) {
    console.log('usage: node scripts/lib/catalog.mjs --check [--catalog <path>]');
    process.exit(0);
  }
  try {
    const { works } = loadCatalog({ repoRoot, catalogPath });
    const count = (k) => works.reduce((n, w) => n + (w[k] || []).length, 0);
    console.log(`catalog ok: ${works.length} works, ${count('plays')} plays, ${count('reads')} reads, ${count('downloads')} downloads`);
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
}
