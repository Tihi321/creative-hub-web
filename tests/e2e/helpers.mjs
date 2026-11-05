// Shared helpers for the e2e specs. Selectors for the games and the site hooks live here
// so they are easy to adjust in one place.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
// SITE_DIR and SITE_CATALOG let the specs run against a dist built from another catalog (e.g. the fixture).
export const distDir = path.resolve(process.env.SITE_DIR || path.join(repoRoot, 'dist'));

// ---------- selectors ----------
export const SITE = {
  tile: '[data-test="tile"]',
  spotlightAction: '[data-test="spotlight-action"]',
  langToggle: '[data-test="lang-toggle"]',
  filterType: '[data-test="filter-type"]',
  filterLang: '[data-test="filter-lang"]',
  play: '[data-test="play"]',
  download: '[data-test="download"]',
  rail: '[data-nav-group][data-nav-axis="x"]',
};

// VN player (player.js of VN Studio builds)
export const VN = {
  mainMenu: '#vno-screen-main-menu',
  mainMenuButtons: '#vno-screen-main-menu button',
  hiddenClass: 'vno-hidden',
  choiceOverlay: '#vno-choice-overlay',
  choiceButton: '#vno-choice-container .vno-choice-btn',
  // new player (HUB-27): the flag, the shared language picker, voice controls, pause menu, rotate hint
  navFlag: 'html[data-vno-nav="1"]',
  dialogue: '#vno-dialogue-text',
  langChip: '#vno-stage-language',
  prefUiLang: '#vno-pref-ui-language',
  picker: '#vno-picker',
  pickerItem: '#vno-picker button.vno-picker-item',
  voiceStop: '#vno-voice-stop',
  voiceMute: '#vno-voice-mute',
  pauseMenu: '#vno-pause-menu',
  rotateHint: '#vno-rotate-hint',
  quickMenuButton: '#vno-quick-menu .vno-qm-btn',
};

// Edu player (Edu Studio builds)
export const EDU = {
  root: '#edu-root',
  start: '[data-testid="start"]',
  unitMap: '[data-testid="unit-map"]',
  openUnit: '[data-testid^="unit-u"]:not(.is-locked)',
};

// ---------- catalog and manifest ----------
export function readJson(file) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return null; }
}
export function loadCatalog() {
  const real = process.env.SITE_CATALOG ? path.resolve(process.env.SITE_CATALOG) : path.join(repoRoot, 'content', 'catalog.json');
  const sample = path.join(repoRoot, 'content', 'fixtures', 'catalog.sample.json');
  const file = fs.existsSync(real) ? real : sample;
  const catalog = readJson(file);
  return { catalog, isReal: file === real && catalog.works.length >= 25, file };
}
export const loadManifest = () => readJson(path.join(repoRoot, 'content', 'publish-manifest.json'));

export function workTypes(w) {
  const t = new Set((w.plays || []).map((p) => p.type));
  if ((w.reads || []).length || (w.downloads || []).length) t.add('book');
  return t;
}
export function workLanguages(w) {
  const l = new Set();
  for (const p of w.plays || []) (p.languages || []).forEach((x) => l.add(x));
  for (const r of w.reads || []) (r.languages || []).forEach((x) => l.add(x));
  for (const d of w.downloads || []) if (d.language) l.add(d.language);
  return l;
}
export function playType(catalog, playId) {
  for (const w of catalog.works) for (const p of w.plays || []) if (p.id === playId) return p.type;
  return null;
}
export function listPlays() {
  const dir = path.join(distDir, 'play');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).filter((e) => e.isDirectory()).map((e) => e.name).sort();
}

// ---------- page helpers ----------
export async function setLang(page, lang) {
  await page.addInitScript((l) => { try { localStorage.setItem('chw.lang', l); } catch (e) { /* ignore */ } }, lang);
}

/** What has focus now: hook, work id, data-id, rail index, index in group, rect. */
export function activeInfo(page) {
  return page.evaluate((railSel) => {
    const el = document.activeElement;
    if (!el || el === document.body) return null;
    const rails = Array.from(document.querySelectorAll(railSel)).filter((r) => r.querySelector('[data-test="tile"]'));
    const group = el.closest('[data-nav-group]');
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    return {
      test: el.getAttribute('data-test'),
      work: el.getAttribute('data-work'),
      id: el.getAttribute('data-id'),
      rail: group ? rails.indexOf(group) : -1,
      index: group ? Array.from(group.querySelectorAll('[data-nav]')).indexOf(el) : -1,
      rect: { left: r.left, top: r.top, right: r.right, bottom: r.bottom },
      inViewport: r.left >= -1 && r.top >= -1 && r.right <= innerWidth + 1 && r.bottom <= innerHeight + 1 && r.width > 0,
      outline: cs.outlineStyle !== 'none' && parseFloat(cs.outlineWidth) > 0,
    };
  }, SITE.rail);
}

/** Tile work ids per rail (DOM order), only rails with tiles. */
export function railsOnPage(page) {
  return page.evaluate((railSel) => Array.from(document.querySelectorAll(railSel))
    .filter((r) => r.querySelector('[data-test="tile"]'))
    .map((r) => Array.from(r.querySelectorAll('[data-test="tile"]')).map((t) => t.getAttribute('data-work'))), SITE.rail);
}

/** Press `key` up to `max` times until `pred(info)` is true. Returns the info or throws. */
export async function pressUntil(page, key, pred, max = 12, what = 'target') {
  for (let i = 0; i <= max; i++) {
    const info = await activeInfo(page);
    if (info && pred(info)) return info;
    if (i < max) await page.keyboard.press(key);
  }
  throw new Error(`pressUntil: ${what} not focused after ${max} x ${key}`);
}

/** Wait until site.js has bound its key handlers (main.js sets data-ready on <html>). */
export function siteReady(page) {
  return page.waitForSelector('html[data-ready]', { state: 'attached' });
}

/** Dispatch a TV remote Back key (webOS keyCode 461) on the page. */
export function pressTvBack(page) {
  return page.evaluate(() => {
    const e = new KeyboardEvent('keydown', { key: 'GoBack', bubbles: true, cancelable: true });
    Object.defineProperty(e, 'keyCode', { get: () => 461 });
    Object.defineProperty(e, 'which', { get: () => 461 });
    (document.activeElement || document.body).dispatchEvent(e);
  });
}
