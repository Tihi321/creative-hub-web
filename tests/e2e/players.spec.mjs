// A8 (every play loads without page errors) and A10 (a remote can start each game and make a first choice).
// Plays are discovered in dist/play/*. Selectors for the two players are in helpers.mjs.
import { test, expect } from '@playwright/test';
import { VN, EDU, loadCatalog, listPlays, playType } from './helpers.mjs';

const { catalog } = loadCatalog();
const plays = listPlays();

test.skip(plays.length === 0, 'dist/play is empty: nothing published yet');

const isEdu = (page) => page.locator(EDU.root).count().then((n) => n > 0);

for (const id of plays) {
  const type = playType(catalog, id);

  test(`${id}: loads without page errors and shows its start screen`, async ({ page }) => {
    const errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    await page.goto(`/play/${id}/index.html`);
    if (await isEdu(page)) {
      await expect(page.locator(`${EDU.root} > *`).first()).toBeVisible();
      await expect(page.locator(EDU.root)).not.toBeEmpty();
    } else {
      await expect(page.locator(VN.mainMenu)).toBeVisible();
      await expect(page.locator(VN.mainMenu)).not.toHaveClass(new RegExp(VN.hiddenClass));
    }
    expect(await page.evaluate(() => typeof window.__hubBridge), 'bridge injected').toBe('object');
    await page.waitForTimeout(1500); // late errors (the check window is 5 s from navigation)
    expect(errors).toEqual([]);
  });

  test(`${id}: remote can start the game${type === 'choice-game' ? ' and make a first choice' : ''}`, async ({ page }) => {
    test.setTimeout(120_000);
    await page.goto(`/play/${id}/index.html`);

    if (await isEdu(page)) {
      // start screen: Start is focused by the player; reach it with arrows if not
      await page.locator(EDU.start).waitFor();
      for (let i = 0; i < 8 && !(await page.evaluate((s) => document.activeElement === document.querySelector(s), EDU.start)); i++) await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');
      await expect(page.locator(EDU.unitMap), 'unit map after Start').toBeVisible();
      // choose the first open unit with arrows only
      let focused = false;
      for (let i = 0; i < 8 && !focused; i++) {
        focused = await page.evaluate((s) => document.activeElement === document.querySelector(s), EDU.openUnit);
        if (!focused) await page.keyboard.press('ArrowDown');
      }
      expect(focused, 'arrows should reach the first open unit (else: Edu Studio ROADMAP row, D-pad navigation)').toBe(true);
      await page.keyboard.press('Enter');
      await expect(page.locator(EDU.unitMap), 'unit started: map gone').toBeHidden();
      return;
    }

    // VN: the bridge focuses the first main-menu button (Start) on its own; Enter starts
    await expect(page.locator(VN.mainMenu)).toBeVisible();
    const inMenu = () => page.evaluate((s) => !!document.activeElement && !!document.activeElement.closest(s) && document.activeElement.tagName === 'BUTTON', VN.mainMenu);
    await expect.poll(inMenu, { message: 'the bridge should focus a main-menu button on load (else: VN Studio ROADMAP row, D-pad navigation)', timeout: 3000 }).toBe(true);
    await page.keyboard.press('Enter');
    await expect(page.locator(VN.mainMenu)).toHaveClass(new RegExp(VN.hiddenClass));

    if (type !== 'choice-game') return;
    // advance with Enter until the choice list shows, then pick with arrows + Enter
    const overlay = page.locator(VN.choiceOverlay);
    let shown = false;
    for (let i = 0; i < 1500 && !shown; i++) {
      await page.keyboard.press('Enter');
      if (i % 5 === 0) shown = await overlay.evaluate((el, c) => !el.classList.contains(c), VN.hiddenClass);
    }
    expect(shown, 'a choice should appear within 1500 Enter presses').toBe(true);
    await page.keyboard.press('ArrowDown');
    const onChoice = await page.evaluate((s) => !!document.activeElement && document.activeElement.matches(s), VN.choiceButton);
    expect(onChoice, 'ArrowDown should focus a choice button').toBe(true);
    await page.keyboard.press('Enter');
    await expect(overlay, 'choice made: list hidden').toHaveClass(new RegExp(VN.hiddenClass));
  });
}

// WEB-05: Back (TV remote) with the Edu audio panel open must not leave the game; the player closes the panel first.
test('edu: Back with the audio panel open stays in the game, the Library pill is not top-left', async ({ page }) => {
  let found = false;
  for (const id of plays) {
    await page.goto(`/play/${id}/index.html`);
    if (!(await isEdu(page)) || !(await page.locator('[data-testid="audio-settings"]').count())) continue;
    found = true;
    const left = await page.locator('#hubb-pill').evaluate((el) => el.getBoundingClientRect().left);
    expect(left, 'the pill is not at the top-left corner, where the Title page control is').toBeGreaterThan(page.viewportSize().width * 0.3);
    await page.locator('[data-testid="audio-settings"]').click();
    await page.locator('[data-testid="audio-panel"]').waitFor();
    const url = page.url();
    await page.evaluate(() => (document.activeElement || document.body).dispatchEvent(new KeyboardEvent('keydown', { key: 'BrowserBack', keyCode: 461, bubbles: true, cancelable: true })));
    await page.waitForTimeout(500);
    expect(page.url(), 'still on the game page').toBe(url);
    break;
  }
  test.skip(!found, 'no published edu game with the audio panel');
});
