// A11: tablet touch layout at 768x1024 and 1024x768.
import { test, expect } from '@playwright/test';
import { SITE, loadCatalog } from './helpers.mjs';

const { catalog } = loadCatalog();
const sizes = [{ width: 768, height: 1024 }, { width: 1024, height: 768 }];

async function smallTargets(page) {
  return page.evaluate(() => {
    const bad = [];
    for (const el of document.querySelectorAll('a[href], button, input, select, summary, [data-nav]')) {
      const cs = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      if (cs.display === 'none' || cs.visibility === 'hidden' || r.width <= 1 || r.height <= 1) continue; // hidden or sr-only
      if (r.width < 47.5 || r.height < 47.5) bad.push(`${el.tagName.toLowerCase()} "${(el.textContent || el.getAttribute('aria-label') || '').trim().slice(0, 30)}" ${Math.round(r.width)}x${Math.round(r.height)}`);
    }
    return bad;
  });
}

for (const size of sizes) {
  test.describe(`${size.width}x${size.height}`, () => {
    test.use({ viewport: size });

    test('no horizontal page scroll, targets at least 48x48, rails scroll sideways', async ({ page }) => {
      const workWithDownloads = catalog.works.find((w) => (w.downloads || []).length).id;
      for (const url of ['/', `/item/${workWithDownloads}/`, '/downloads/', '/about/']) {
        await page.goto(url);
        const wide = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
        expect(wide, `horizontal scroll on ${url}`).toBe(false);
      }
      await page.goto('/');
      expect(await smallTargets(page), 'interactive elements under 48x48 on home').toEqual([]);
      await page.goto(`/item/${workWithDownloads}/`);
      expect(await smallTargets(page), 'interactive elements under 48x48 on work page').toEqual([]);

      await page.goto('/');
      const scrolled = await page.evaluate((sel) => {
        // the rail with the most tiles: its scroll container must scroll sideways natively
        const rails = Array.from(document.querySelectorAll('[data-nav-group][data-nav-axis="x"]')).filter((r) => r.querySelector(sel));
        rails.sort((a, b) => b.querySelectorAll(sel).length - a.querySelectorAll(sel).length);
        let el = rails[0] && rails[0].querySelector(sel);
        while (el && el !== document.body && !/^(auto|scroll)$/.test(getComputedStyle(el).overflowX)) el = el.parentElement;
        if (!el || el === document.body) return { ok: false, why: 'rail has no overflow-x auto/scroll container' };
        if (el.scrollWidth <= el.clientWidth + 1) return { ok: true, skipped: true, why: 'rail content fits (too few tiles to scroll)' };
        el.scrollLeft = 150;
        return { ok: el.scrollLeft > 0, why: `scrollLeft ${el.scrollLeft}` };
      }, SITE.tile);
      expect(scrolled.ok, scrolled.why).toBe(true);
      if (scrolled.skipped) test.info().annotations.push({ type: 'note', description: scrolled.why });
    });

    test('tapping a tile opens its page', async ({ page }) => {
      await page.goto('/');
      const tile = page.locator(SITE.tile).first();
      const work = await tile.getAttribute('data-work');
      await tile.tap();
      await expect(page).toHaveURL(new RegExp(`/item/${work}/`));
    });
  });
}
