// A9 (keyboard-only TV navigation at 1920x1080) and A14 (UI language toggle).
import { test, expect } from '@playwright/test';
import { SITE, loadCatalog, activeInfo, railsOnPage, pressUntil, pressTvBack } from './helpers.mjs';

const { catalog } = loadCatalog();
// a work that has a play, preferring the featured one
const playWork = (catalog.works.find((w) => w.id === catalog.site.featured && (w.plays || []).length)
  || catalog.works.find((w) => (w.plays || []).length)).id;

test('initial focus is the spotlight action and visible', async ({ page }) => {
  await page.goto('/');
  const info = await activeInfo(page);
  expect(info && info.test, 'spotlight action should hold focus on load').toBe('spotlight-action');
  expect(info.outline, 'focus outline').toBe(true);
  expect(info.inViewport).toBe(true);
});

test('every tile in every rail is reachable with arrows, focus stays visible, rails remember their column', async ({ page }) => {
  await page.goto('/');
  const rails = await railsOnPage(page);
  expect(rails.length).toBeGreaterThan(0);
  let lastRail1Index = -1;
  for (let r = 0; r < rails.length; r++) {
    // go down until a tile of rail r is focused
    await pressUntil(page, 'ArrowDown', (i) => i.test === 'tile' && i.rail === r, 14, `rail ${r}`);
    // walk to the start of the rail, then right to its end
    await pressUntil(page, 'ArrowLeft', (i) => i.index <= 0 || i.rail !== r, rails[r].length + 1, 'rail start').catch(() => {});
    const seen = [];
    for (let step = 0; step < rails[r].length + 2; step++) {
      // scrolling is tweened: wait for the focused tile to settle inside the viewport
      await expect.poll(async () => (await activeInfo(page)).inViewport, { message: 'focused tile inside viewport', timeout: 2000 }).toBe(true);
      const info = await activeInfo(page);
      expect(info.test).toBe('tile');
      expect(info.rail).toBe(r);
      expect(info.outline, `outline on ${info.work}`).toBe(true);
      seen.push(info.work);
      await page.keyboard.press('ArrowRight');
      const next = await activeInfo(page);
      if (next.work === info.work && next.rail === r) break;
    }
    expect(seen, `rail ${r} reachable tiles`).toEqual(rails[r]);
    if (r === 1) lastRail1Index = (await activeInfo(page)).index;
  }
  if (rails.length > 2) {
    // column memory: go up from rail 2 to rail 1, same index as left it
    await pressUntil(page, 'ArrowUp', (i) => i.test === 'tile' && i.rail === 1, 6, 'back to rail 1');
    expect((await activeInfo(page)).index).toBe(lastRail1Index);
  }
});

test('Enter opens the work, Escape returns home on the same tile, Play opens the game, Back key 461 returns', async ({ page }) => {
  await page.goto('/');
  const rails = await railsOnPage(page);
  const r = rails.findIndex((ids) => ids.includes(playWork));
  expect(r, `${playWork} should be in some rail`).toBeGreaterThanOrEqual(0);
  await pressUntil(page, 'ArrowDown', (i) => i.test === 'tile' && i.rail === r, 14, `rail ${r}`);
  await pressUntil(page, 'ArrowRight', (i) => i.work === playWork, rails[r].length + 2, playWork);

  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(new RegExp(`/item/${playWork}/`));
  await page.keyboard.press('Escape');
  await expect(page).not.toHaveURL(/\/item\//);
  await expect.poll(async () => (await activeInfo(page))?.work, { message: 'same tile focused after Escape' }).toBe(playWork);

  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(new RegExp(`/item/${playWork}/`));
  await pressUntil(page, 'ArrowDown', (i) => i.test === 'play', 12, 'play action').catch(async () => {
    await pressUntil(page, 'ArrowRight', (i) => i.test === 'play', 6, 'play action');
  });
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/\/play\/[^/]+\//);
  await page.waitForFunction(() => window.__hubBridge, null, { timeout: 5000 });
  await pressTvBack(page);
  await expect(page).toHaveURL(new RegExp(`/item/${playWork}/`));
});

test('language toggle is reachable by arrows, switches hr/en and is remembered', async ({ page }) => {
  await page.goto('/');
  const ui = () => page.evaluate(() => document.documentElement.getAttribute('data-ui'));
  const before = await ui();
  const target = before === 'hr' ? 'en' : 'hr';
  const actionText = () => page.locator(SITE.spotlightAction).first().innerText();
  const textBefore = await actionText();

  await page.keyboard.press('ArrowUp'); // header row
  await pressUntil(page, 'ArrowRight', (i) => i.test === 'lang-toggle', 6, 'lang toggle');
  // a toggle made of two buttons: move to the one that selects the target language
  if ((await page.locator(SITE.langToggle).count()) > 1) {
    await pressUntil(page, 'ArrowRight', (i) => i.id === target, 3, `toggle ${target}`)
      .catch(() => pressUntil(page, 'ArrowLeft', (i) => i.id === target, 3, `toggle ${target}`));
  }
  await page.keyboard.press('Enter');
  await expect.poll(ui).toBe(target);
  expect(await page.evaluate(() => document.documentElement.lang)).toBe(target);
  expect(await actionText()).not.toBe(textBefore);

  await page.reload();
  expect(await ui()).toBe(target);
  expect(await page.evaluate(() => document.documentElement.lang)).toBe(target);
  expect(await page.evaluate(() => localStorage.getItem('chw.lang'))).toBe(target);
});
