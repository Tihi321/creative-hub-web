// Generated cover for works that have no cover image (section 9 of the plan).
// A 5:8 SVG built from the work id hash: sea, horizon, one disc (sun, moon or lamp),
// the title in the display face (at most four lines) and the work's type at the bottom.
//
//   coverSvg(work, { lang: 'en' | 'hr' | 'both', type, inline })  -> string
//
// lang 'en' (default) gives the standalone file written to public/covers/<id>.svg.
// lang 'both' and inline: true give the markup the page generator inlines; it holds an
// <g lang="en"> and an <g lang="hr"> and the site CSS hides the one that is not the UI language.
// Inline markup uses the fonts the site already loads; the standalone file falls back to sans-serif.

const SEA = '#123247';
const QUAY = '#1E4A60';
const LAMP = '#F4B942';
const SAIL = '#F1ECE0';
const RUST = '#C9573C';

const W = 400;
const H = 640;
const PAD = 28;

const TYPE_LABELS = {
  'visual-novel': { en: 'Visual novel', hr: 'Vizualni roman' },
  'picture-book': { en: 'Picture book', hr: 'Slikovnica' },
  'choice-game': { en: 'Choice game', hr: 'Igra s izborima' },
  'edu-game': { en: 'Learning game', hr: 'Igra za učenje' },
  book: { en: 'Book', hr: 'Knjiga' },
  article: { en: 'Article', hr: 'Članak' },
};

export const COVER_ASPECT = { width: W, height: H };

export function hashId(id) {
  // FNV-1a, 32 bit
  let h = 0x811c9dc5;
  for (let i = 0; i < id.length; i++) {
    h ^= id.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h >>> 0;
}

// Small deterministic stream of numbers in [0,1) from one hash.
function stream(seed) {
  let s = seed || 1;
  return () => {
    s ^= s << 13; s >>>= 0;
    s ^= s >>> 17;
    s ^= s << 5; s >>>= 0;
    return s / 4294967296;
  };
}

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function wrap(title, size) {
  const maxChars = Math.max(6, Math.floor((W - PAD * 2) / (size * 0.54)));
  const words = String(title).split(/\s+/).filter(Boolean);
  const lines = [];
  let cur = '';
  for (const w of words) {
    if (!cur) cur = w;
    else if ((cur + ' ' + w).length <= maxChars) cur += ' ' + w;
    else { lines.push(cur); cur = w; }
  }
  if (cur) lines.push(cur);
  return { lines, maxChars };
}

function fitTitle(title) {
  for (const size of [46, 40, 34, 29]) {
    const { lines, maxChars } = wrap(title, size);
    if (lines.length <= 4 && lines.every((l) => l.length <= maxChars)) return { size, lines };
  }
  const { lines } = wrap(title, 29);
  const kept = lines.slice(0, 4);
  kept[3] = (kept[3] || '').replace(/.{0,2}$/, '') + '…';
  return { size: 29, lines: kept };
}

function primaryType(work, opts) {
  if (opts.type) return opts.type;
  if (work.plays && work.plays.length) return work.plays[0].type;
  return 'book';
}

function textGroup(lang, title, typeLabel, baseY) {
  const { size, lines } = fitTitle(title);
  const lead = Math.round(size * 1.08);
  const lastBaseline = baseY;
  const firstBaseline = lastBaseline - lead * (lines.length - 1);
  const tspans = lines
    .map((l, i) => `<tspan x="${PAD}" y="${firstBaseline + i * lead}">${esc(l)}</tspan>`)
    .join('');
  return (
    `<g lang="${lang}">` +
    `<text fill="${SAIL}" font-family="'Bricolage Grotesque',sans-serif" font-weight="700" font-size="${size}" letter-spacing="-0.02em">${tspans}</text>` +
    `<text x="${PAD}" y="${H - 26}" fill="${SAIL}" fill-opacity="0.8" font-family="'Atkinson Hyperlegible',sans-serif" font-size="25">${esc(typeLabel)}</text>` +
    `</g>`
  );
}

export function coverSvg(work, opts = {}) {
  const lang = opts.lang || 'en';
  const rnd = stream(hashId(work.id));
  const seaIsQuay = rnd() < 0.5;
  const sky = seaIsQuay ? SEA : QUAY;
  const water = seaIsQuay ? QUAY : SEA;
  const horizon = Math.round(H * (0.26 + rnd() * 0.16)); // 26..42 percent
  const discColor = [LAMP, SAIL, RUST][Math.floor(rnd() * 3)];
  const r = Math.round(30 + rnd() * 26);
  const cx = Math.round(W * (0.22 + rnd() * 0.56));
  const cy = Math.round(horizon - r * (0.15 + rnd() * 0.75));
  const refl = [0, 1, 2]
    .map((i) => {
      const w = Math.round(r * (1.5 - i * 0.4));
      return `<rect x="${cx - Math.round(w / 2)}" y="${horizon + 12 + i * 14}" width="${w}" height="4" rx="2" fill="${discColor}" fill-opacity="${(0.5 - i * 0.14).toFixed(2)}"/>`;
    })
    .join('');
  const typeId = primaryType(work, opts);
  const labels = TYPE_LABELS[typeId] || TYPE_LABELS.book;
  const titleEn = (work.title && (work.title.en || work.title.hr)) || work.id;
  const titleHr = (work.title && (work.title.hr || work.title.en)) || work.id;
  const baseY = H - 76;

  let text = '';
  if (lang === 'both') text = textGroup('en', titleEn, labels.en, baseY) + textGroup('hr', titleHr, labels.hr, baseY);
  else text = textGroup(lang, lang === 'hr' ? titleHr : titleEn, lang === 'hr' ? labels.hr : labels.en, baseY);

  const attrs = opts.inline
    ? `class="cover-art" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${esc(titleEn)}"`
    : `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${esc(titleEn)}"`;

  return (
    `<svg ${attrs}>` +
    `<rect width="${W}" height="${H}" fill="${sky}"/>` +
    `<rect y="${horizon}" width="${W}" height="${H - horizon}" fill="${water}"/>` +
    `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${discColor}"/>` +
    `<rect y="${horizon}" width="${W}" height="2" fill="${SAIL}" fill-opacity="0.35"/>` +
    refl +
    text +
    `</svg>`
  );
}
