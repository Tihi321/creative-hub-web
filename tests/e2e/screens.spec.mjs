// Screenshot capture for the UI review loop: SCREEN_ROUND=N npm run screens
// Writes .claude/tickets/WEB-01-site/screens/round-N/<shot>_<w>x<h>_<lang>.png
import fs from 'node:fs';
import path from 'node:path';
import { test } from '@playwright/test';
import { repoRoot, loadCatalog, listPlays, setLang } from './helpers.mjs';

const round = process.env.SCREEN_ROUND || '0';
const outDir = path.join(repoRoot, '.claude', 'tickets', 'WEB-01-site', 'screens', `round-${round}`);
fs.mkdirSync(outDir, { recursive: true });

const { catalog } = loadCatalog();
const sizes = [[1920, 1080], [1440, 900], [768, 1024], [1024, 768]];
const langs = ['hr', 'en'];
const detailWork = catalog.works.find((w) => w.id === 'the-clockless-god') || catalog.works.find((w) => (w.downloads || []).length);
const playId = (detailWork.plays || [])[0]?.id || listPlays()[0];

for (const [w, h] of sizes) {
  for (const lang of langs) {
    test(`screens ${w}x${h} ${lang}`, async ({ browser }) => {
      const touch = w < 1440;
      const context = await browser.newContext({ viewport: { width: w, height: h }, hasTouch: touch, isMobile: touch, locale: lang === 'hr' ? 'hr-HR' : 'en-US' });
      const page = await context.newPage();
      await setLang(page, lang);
      const shot = async (name) => page.screenshot({ path: path.join(outDir, `${name}_${w}x${h}_${lang}.png`) });

      await page.goto('/');
      await page.waitForLoadState('networkidle');
      await shot('home');

      // focus deep in a rail: keyboard only (also switches the page into key mode)
      await page.goto('/');
      // Down until a tile has focus (touch sizes start with nothing focused, and chip rows may stack)
      for (let i = 0; i < 8 && !(await page.evaluate(() => !!document.activeElement && document.activeElement.matches('[data-test="tile"]'))); i++) await page.keyboard.press('ArrowDown');
      for (let i = 0; i < 6; i++) await page.keyboard.press('ArrowRight');
      await page.waitForTimeout(400); // focus tween
      await shot('home-focus');

      await page.goto('/?type=visual-novel');
      await page.waitForLoadState('networkidle');
      await shot('filtered');

      await page.goto(`/item/${detailWork.id}/`);
      await page.waitForLoadState('networkidle');
      await shot('work');

      await page.goto('/about/');
      await shot('about');
      await page.goto('/downloads/');
      await shot('downloads');

      if (playId) {
        await page.goto(`/play/${playId}/index.html`);
        await page.waitForFunction(() => window.__hubBridge, null, { timeout: 5000 }).catch(() => {});
        await page.waitForTimeout(4600); // the pill hides itself after its first 4 s
        await page.mouse.move(w / 2, 4); // pointer in the top area shows it again
        await page.locator('#hubb-pill.hubb-on').waitFor({ timeout: 3000 }).catch(() => {}); // selector from src/bridge/hub-bridge.js
        await page.waitForTimeout(300);
        await shot('play');
      }
      await context.close();
    });
  }
}
