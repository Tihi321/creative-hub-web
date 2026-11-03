// Shared helpers for the page templates.
import fs from 'node:fs';
import { coverSvg } from '../../scripts/lib/cover.mjs';

export const strings = JSON.parse(fs.readFileSync(new URL('../i18n/strings.json', import.meta.url), 'utf8'));

export const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Both languages in the HTML; the site CSS hides the one that is not the UI language.
export const bi = (obj) =>
  `<span lang="hr">${esc(obj.hr ?? obj.en)}</span><span lang="en">${esc(obj.en ?? obj.hr)}</span>`;

export const t = (key) => {
  if (!strings[key]) throw new Error(`missing string: ${key}`);
  return bi(strings[key]);
};

export const TYPE_LABELS = {
  'visual-novel': { one: { hr: 'Vizualni roman', en: 'Visual novel' }, many: { hr: 'Vizualni romani', en: 'Visual novels' } },
  'picture-book': { one: { hr: 'Slikovnica', en: 'Picture book' }, many: { hr: 'Slikovnice', en: 'Picture books' } },
  'choice-game': { one: { hr: 'Igra s izborima', en: 'Choice game' }, many: { hr: 'Igre s izborima', en: 'Choice games' } },
  'edu-game': { one: { hr: 'Igra za učenje', en: 'Learning game' }, many: { hr: 'Igre za učenje', en: 'Learning games' } },
  book: { one: { hr: 'Knjiga', en: 'Book' }, many: { hr: 'Knjige', en: 'Books' } },
  article: { one: { hr: 'Članak', en: 'Article' }, many: { hr: 'Članci', en: 'Articles' } },
};
export const RAIL_TYPES = ['visual-novel', 'picture-book', 'choice-game', 'edu-game', 'book'];

// The article is shelved with the books.
export const shelfTypes = (types) => [...new Set(types.map((x) => (x === 'article' ? 'book' : x)))];

export const LANG_NAMES = {
  hr: { hr: 'Hrvatski', en: 'Croatian' },
  en: { hr: 'Engleski', en: 'English' },
  de: { hr: 'Njemački', en: 'German' },
};
export const langName = (code) => LANG_NAMES[code] || { hr: code, en: code };
export const FILTER_LANGS = [
  { id: 'hr', name: 'Hrvatski' },
  { id: 'en', name: 'English' },
  { id: 'de', name: 'Deutsch' },
];

export const typeLabel = (type, plural = false) => (TYPE_LABELS[type] || TYPE_LABELS.book)[plural ? 'many' : 'one'];

export function fmtSize(bytes) {
  if (typeof bytes !== 'number' || !isFinite(bytes)) return null;
  const mb = bytes / 1048576;
  return mb < 0.05 ? '<0.1 MB' : `${mb.toFixed(1)} MB`;
}

export const prefixFor = (depth) => '../'.repeat(depth);

export function jsonForScript(obj) {
  return JSON.stringify(obj).replace(/</g, '\\u003c').replace(/[\u2028\u2029]/g, (c) => '\\u' + c.charCodeAt(0).toString(16));
}

// Cover as HTML: <span class="cover"> holding a lazy img (published webp) or inline generated SVG.
export function coverHtml(work, ctx, { size = 480, prefix = '' } = {}) {
  const entry = ctx.manifest.covers && ctx.manifest.covers[work.id];
  if (entry && entry.type === 'webp' && entry[String(size)]) {
    return `<span class="cover"><img class="lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="${esc(prefix + entry[String(size)])}" alt="" width="${size}" height="${size * 1.6}"></span>`;
  }
  const primary = ctx.deriveTypes(work);
  return `<span class="cover">${coverSvg(work, { lang: 'both', inline: true, type: primary[0] })}</span>`;
}

// Absolute-ish file for blurred background: the 480 webp, or the generated svg when published.
export function coverFile(work, ctx) {
  const entry = ctx.manifest.covers && ctx.manifest.covers[work.id];
  if (!entry) return null;
  if (entry.type === 'webp') return entry['480'] || null;
  if (entry.type === 'svg') return entry.path || null;
  return null;
}

export const playHref = (play, prefix) => `${prefix}play/${play.id}/index.html`;
export const readHref = (read, prefix) => `${prefix}read/${read.id}/${read.entry || 'index.html'}`;
export const downloadHref = (work, dl, prefix) => `${prefix}files/${work.id}/${dl.filename}`;
export const itemHref = (work, prefix) => `${prefix}item/${work.id}/`;

export function langChips(codes) {
  return codes.map((c) => `<span class="lc">${esc(c)}</span>`).join('');
}

export function typeList(types) {
  return types
    .map((ty) => bi(typeLabel(ty)))
    .reduce((acc, cur, i) => (i === 0 ? cur : acc + '<span class="sep">, </span>' + cur), '');
}

