// A12 (desktop layout, filters, download rows vs manifest) and A13 (downloads grouped).
import { test, expect } from '@playwright/test';
import { SITE, loadCatalog, loadManifest, workTypes, workLanguages, railsOnPage } from './helpers.mjs';

const { catalog, isReal } = loadCatalog();
const idsOf = (list) => [...list].sort();

async function gridWorks(page) {
  await page.waitForLoadState('load'); // filters are applied by the page script
  const works = await page.locator(SITE.tile).evaluateAll((els) => els.filter((e) => e.getBoundingClientRect().width > 0).map((e) => e.getAttribute('data-work')));
  return [...new Set(works)].sort();
}

test('at least 6 tiles visible per rail', async ({ page }) => {
  await page.goto('/');
  const bad = await page.evaluate((railSel) => Array.from(document.querySelectorAll(railSel))
    .filter((r) => r.querySelector('[data-test="tile"]'))
    .map((r) => {
      const tiles = Array.from(r.querySelectorAll('[data-test="tile"]'));
      const visible = tiles.filter((t) => { const b = t.getBoundingClientRect(); return b.left >= 0 && b.right <= innerWidth + 1 && b.width > 0; }).length;
      return { total: tiles.length, visible };
    })
    .filter((x) => x.visible < Math.min(6, x.total)), SITE.rail);
  expect(bad, 'rails showing fewer than 6 (or all) tiles').toEqual([]);
  expect((await railsOnPage(page)).length).toBeGreaterThan(0);
});

test('type and language filters in the query string', async ({ page }) => {
  const want = (pred) => idsOf(catalog.works.filter(pred).map((w) => w.id));

  await page.goto('/?type=picture-book');
  const books = await gridWorks(page);
  expect(books).toEqual(want((w) => workTypes(w).has('picture-book')));
  if (isReal) expect(books).toHaveLength(2);

  await page.goto('/?lang=de');
  const de = await gridWorks(page);
  expect(de).toEqual(want((w) => workLanguages(w).has('de')));
  if (isReal) expect(de).toEqual(['deutsch-a1-pilot', 'deutsch-roleplay-a1', 'deutsch-roleplay-b2', 'the-snail-and-the-salad']);
});

test('download rows show format and size equal to the manifest', async ({ page }) => {
  const manifest = loadManifest();
  test.skip(!manifest, 'content/publish-manifest.json not written yet (run npm run publish)');
  let rows = 0;
  for (const w of catalog.works.filter((x) => (x.downloads || []).length)) {
    await page.goto(`/item/${w.id}/`);
    for (const d of w.downloads) {
      const size = manifest.items?.[d.id]?.size;
      if (size === undefined) continue;
      const row = page.locator(`${SITE.download}[data-id="${d.id}"]`);
      await expect(row, `${d.id} row`).toHaveCount(1);
      const text = await row.evaluate((el) => `${el.innerText} ${el.parentElement ? el.parentElement.innerText : ''}`);
      const mb = (n) => (size / n / n).toFixed(1);
      const accepted = [`${mb(1024)} MB`, `${(size / 1e6).toFixed(1)} MB`, `${Math.round(size / 1024)} KB`, `${(size / 1024).toFixed(1)} KB`, `${Math.round(size / 1e3)} KB`];
      expect(text.toUpperCase(), `${d.id} format`).toContain(d.format.toUpperCase());
      expect(accepted.some((s) => text.includes(s.replace('.', ',')) || text.includes(s)), `${d.id} size ${size} in "${text.replace(/\s+/g, ' ')}"`).toBe(true);
      rows++;
    }
  }
  expect(rows, 'download rows compared').toBeGreaterThan(0);
});

test('Croatian edition row directly follows the original in the book group', async ({ page }) => {
  const work = catalog.works.find((w) => w.id === 'the-clockless-god');
  test.skip(!work, 'the-clockless-god not in this catalog');
  const book = (work.downloads || []).filter((d) => d.group === 'book');
  const en = book.find((d) => d.language === 'en');
  const hr = book.find((d) => d.language === 'hr');
  test.skip(!en || !hr, 'catalog has no en+hr book pair for the-clockless-god (fixture)');
  await page.goto('/item/the-clockless-god/');
  const ids = await page.locator(SITE.download).evaluateAll((els) => els.map((e) => e.getAttribute('data-id')));
  expect(ids.indexOf(hr.id), `${hr.id} right after ${en.id} in ${ids.join(', ')}`).toBe(ids.indexOf(en.id) + 1);
});
