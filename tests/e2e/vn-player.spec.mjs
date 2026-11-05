// HUB-27: VN player on a TV remote (project vn-tv, 1920x1080) and on touch (project vn-touch, 844x390).
// Written to the player/bridge key contract in the HUB-27 plan. Selectors live in helpers.mjs (VN).
// Both projects run only this spec; tests are tagged @tv / @touch and each project greps its tag.
import { test, expect } from '@playwright/test';
import { VN, pressTvBack } from './helpers.mjs';

const PLAY = 'play/the-clockless-god-linear/'; // en + hr
const BACK = /\/item\/the-clockless-god\//; // data-back of that play

const activeId = (page) => page.evaluate(() => (document.activeElement && document.activeElement.id) || '');
const activeText = (page) => page.evaluate(() => (document.activeElement && document.activeElement.textContent) || '');
const dialogue = (page) => page.locator(VN.dialogue).evaluate((el) => (el.textContent || '').trim());

/** Dialogue text once the typewriter has finished (two equal reads in a row). */
async function settledText(page) {
  let last = null;
  for (let i = 0; i < 40; i++) {
    const t = await dialogue(page);
    if (t && t === last) return t;
    last = t;
    await page.waitForTimeout(300);
  }
  return last;
}

/** Press only the given keys, each up to `each` times in turn, until `done(page)` is true. */
async function reach(page, done, keys, what, each = 8) {
  for (const key of keys) {
    for (let i = 0; i < each; i++) {
      if (await done(page)) return;
      await page.keyboard.press(key);
    }
  }
  if (await done(page)) return;
  throw new Error(`${what} not reached with ${keys.join(', ')}`);
}

const focusedId = (id) => async (page) => (await activeId(page)) === id;

/** Start from the main menu with Enter (the player focuses Start on load). */
async function startGame(page, url = PLAY) {
  await page.goto(url);
  await expect(page.locator(VN.mainMenu)).toBeVisible();
  await expect.poll(() => activeId(page), { message: 'a main-menu button has focus on load' }).toMatch(/^vno-mm-/);
  await page.keyboard.press('Enter');
  await expect(page.locator(VN.mainMenu)).toHaveClass(new RegExp(VN.hiddenClass));
}

/** In the open picker, move to the item showing `label` and press Enter. */
async function pickLanguage(page, label) {
  await expect(page.locator(VN.picker)).toBeVisible();
  await expect(page.locator(VN.pickerItem).first()).toBeVisible();
  const onItem = async () => (await activeText(page)).includes(label);
  await reach(page, onItem, ['ArrowDown', 'ArrowRight'], `picker item ${label}`, 40);
  await page.keyboard.press('Enter');
  await expect(page.locator(VN.picker)).toBeHidden();
}

test.describe('remote keys', () => {
  test('language can be changed with remote keys only', { tag: '@tv' }, async ({ page }) => {
    await startGame(page);
    const before = await settledText(page);

    // only ArrowUp, ArrowRight and Enter: up into the HUD, then right to the language chip
    await reach(page, focusedId('vno-stage-language'), ['ArrowUp', 'ArrowRight'], 'the language chip');
    await expect(page.locator('html')).toHaveClass(/vno-kb/);
    const ring = await page.evaluate(() => { const cs = getComputedStyle(document.activeElement); return cs.outlineStyle !== 'none' && parseFloat(cs.outlineWidth) > 0; });
    expect(ring, 'focus ring on the chip').toBe(true);

    await page.keyboard.press('Enter');
    await pickLanguage(page, 'Hrvatski');

    await expect(page.locator(VN.langChip)).toContainText('Hrvatski');
    await expect.poll(() => settledText(page), { message: 'dialogue is the Croatian edition', timeout: 15_000 }).not.toBe(before);
  });

  test('main-menu language chip and Preferences UI language work with remote keys', { tag: '@tv' }, async ({ page }) => {
    await page.goto(PLAY);
    await expect(page.locator(VN.mainMenu)).toBeVisible();
    // story language from the main menu
    await reach(page, focusedId('vno-stage-language'), ['ArrowDown', 'ArrowRight', 'ArrowUp'], 'the chip on the main menu');
    await page.keyboard.press('Enter');
    await pickLanguage(page, 'Hrvatski');
    await expect(page.locator(VN.langChip)).toContainText('Hrvatski');
    await expect.poll(() => activeId(page), { message: 'focus returns to the chip after picking' }).toBe('vno-stage-language');

    // UI language in Preferences
    await reach(page, focusedId('vno-mm-prefs'), ['ArrowUp', 'ArrowLeft', 'ArrowDown'], 'Preferences on the main menu');
    await page.keyboard.press('Enter');
    await expect(page.locator('#vno-screen-prefs')).toBeVisible();
    await reach(page, focusedId('vno-pref-ui-language'), ['ArrowDown'], 'the UI language row', 20);
    const uiBefore = await page.locator(VN.prefUiLang).textContent();
    await page.keyboard.press('Enter');
    // 36 UI languages: pick the neighbour of the focused (current) item
    await expect(page.locator(VN.picker)).toBeVisible();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await expect(page.locator(VN.picker)).toBeHidden();
    await expect(page.locator(VN.prefUiLang)).not.toHaveText(uiBefore);
  });

  test('focus on load, new layers focus their first control, Back closes layers or leaves', { tag: '@tv' }, async ({ page }) => {
    await startGame(page);
    await expect(page.locator(VN.navFlag)).toHaveCount(1);

    // Back in gameplay opens the pause menu (focus on its first control); Back again closes it
    await page.keyboard.press('Escape');
    await expect(page.locator(VN.pauseMenu)).toBeVisible();
    expect(await page.evaluate((s) => !!document.activeElement.closest(s), VN.pauseMenu), 'pause menu focuses a control').toBe(true);
    await page.keyboard.press('Escape');
    await expect(page.locator(VN.pauseMenu)).toBeHidden();

    // a screen (History) focuses its first control; Back closes it
    await page.locator('#vno-qm-history').click();
    await expect(page.locator('#vno-screen-history')).toBeVisible();
    expect(await page.evaluate(() => !!document.activeElement.closest('#vno-screen-history')), 'screen focuses a control').toBe(true);
    await pressTvBack(page);
    await expect(page.locator('#vno-screen-history')).toBeHidden();

    // the picker focuses its first control; Back closes it and focus returns to the chip
    await page.locator(VN.langChip).click();
    await expect(page.locator(VN.picker)).toBeVisible();
    expect(await page.evaluate((s) => !!document.activeElement.closest(s), VN.picker), 'picker focuses an item').toBe(true);
    await page.keyboard.press('Escape');
    await expect(page.locator(VN.picker)).toBeHidden();
    expect(await activeId(page)).toBe('vno-stage-language');

    // main menu: the player leaves Back unhandled, the bridge goes to data-back
    await page.goto(PLAY);
    await expect(page.locator(VN.mainMenu)).toBeVisible();
    await expect.poll(() => activeId(page)).toMatch(/^vno-mm-/);
    await pressTvBack(page);
    await expect(page).toHaveURL(BACK);
  });

  test('Android Back (history navigation) opens the pause menu in play and leaves only from the main menu', { tag: '@tv' }, async ({ page }) => {
    await page.goto('item/the-clockless-god/'); // the page before the play, as a visitor arrives
    await page.goto(PLAY);
    await expect(page.locator(VN.mainMenu)).toBeVisible();
    await expect.poll(() => activeId(page)).toMatch(/^vno-mm-/);
    const url = page.url();
    await page.keyboard.press('Enter'); // Start
    await expect(page.locator(VN.mainMenu)).toHaveClass(new RegExp(VN.hiddenClass));

    // plain play: history Back opens the pause menu and stays on the page; it does so again after Resume
    await page.goBack();
    await expect(page.locator(VN.pauseMenu)).toBeVisible();
    expect(page.url()).toBe(url);
    await page.locator('#vno-pause-resume').click();
    await expect(page.locator(VN.pauseMenu)).toBeHidden();
    await page.goBack();
    await expect(page.locator(VN.pauseMenu)).toBeVisible();
    expect(page.url()).toBe(url);

    // Main Menu drops the story's history entries: the next Back leaves for the page before
    await page.locator('#vno-pause-mainmenu').click();
    await expect(page.locator(VN.mainMenu)).toBeVisible();
    await page.goBack();
    await expect(page).toHaveURL(BACK);
  });

  test('Enter on a focused button clicks once and does not also advance', { tag: '@tv' }, async ({ page }) => {
    await page.goto(PLAY);
    await expect(page.locator(VN.mainMenu)).toBeVisible();
    await expect.poll(() => activeId(page)).toMatch(/^vno-mm-/);
    await page.evaluate(() => {
      window.__clicks = 0;
      document.addEventListener('click', (e) => { if (e.target.closest('button')) window.__clicks++; }, true);
    });
    await page.keyboard.press('Enter'); // Start
    await expect(page.locator(VN.mainMenu)).toHaveClass(new RegExp(VN.hiddenClass));
    expect(await page.evaluate(() => window.__clicks), 'Enter on Start clicks once').toBe(1);

    const text = await settledText(page);
    await reach(page, focusedId('vno-qm-history'), ['ArrowUp', 'ArrowRight', 'ArrowLeft', 'ArrowDown'], 'the History button');
    await page.evaluate(() => { window.__clicks = 0; });
    await page.keyboard.press('Enter');
    await expect(page.locator('#vno-screen-history')).toBeVisible();
    expect(await page.evaluate(() => window.__clicks), 'Enter on History clicks once').toBe(1);
    await page.keyboard.press('Escape');
    await expect(page.locator('#vno-screen-history')).toBeHidden();
    expect(await settledText(page), 'dialogue did not advance').toBe(text);
  });

  test('Enter on a focused choice picks it once and does not also advance the next chapter', { tag: '@tv' }, async ({ page }) => {
    await startGame(page, 'play/the-clockless-god-choices/');
    // advance with Enter until the first choice appears (the player focuses it)
    const choiceShown = () => page.evaluate((s) => !document.querySelector(s).classList.contains('vno-hidden'), VN.choiceOverlay);
    for (let i = 0; i < 400 && !(await choiceShown()); i++) {
      await page.keyboard.press('Enter');
      await page.waitForTimeout(20);
    }
    await expect(page.locator(VN.choiceOverlay)).toBeVisible();
    await expect.poll(() => page.evaluate((s) => !!document.activeElement.closest(s), VN.choiceOverlay), { message: 'a choice has focus' }).toBe(true);
    await page.waitForTimeout(900); // past the short pause that keeps a held OK from picking the choice at once
    const chapter = await page.evaluate(() => window.VNOEngine.getState().chapterIdx);
    await page.evaluate((s) => {
      window.__clicks = 0;
      document.addEventListener('click', (e) => { if (e.target.closest(s)) window.__clicks++; }, true);
    }, VN.choiceButton);

    await page.keyboard.press('Enter');
    await expect(page.locator(VN.choiceOverlay)).toBeHidden();
    expect(await page.evaluate(() => window.__clicks), 'Enter on the choice clicks once').toBe(1);
    // the target chapter starts at its card (beat -1): the same key did not also advance past it
    const state = await page.evaluate(() => window.VNOEngine.getState());
    expect(state.chapterIdx, 'the choice led to another chapter').not.toBe(chapter);
    expect(state.beatIdx, 'the new chapter did not advance').toBe(-1);
  });
});

test.describe('touch', () => {
  test('HUD targets are at least 44x44, a tap on the stage advances, a tap on a HUD button does not', { tag: '@touch' }, async ({ page }) => {
    await page.goto(PLAY);
    await page.locator('#vno-mm-start').tap();
    await expect(page.locator(VN.mainMenu)).toHaveClass(new RegExp(VN.hiddenClass));
    const first = await settledText(page);

    await expect(page.locator(VN.voiceStop)).toHaveCount(1);
    await expect(page.locator(VN.voiceMute)).toHaveCount(1);
    const small = await page.evaluate(([qm, ids]) => {
      const bad = [];
      const nodes = Array.from(document.querySelectorAll(qm)).concat(ids.map((i) => document.querySelector(i)));
      let seen = 0;
      for (const el of nodes) {
        if (!el) continue;
        const r = el.getBoundingClientRect();
        const cs = getComputedStyle(el);
        if (cs.display === 'none' || cs.visibility === 'hidden' || r.width < 1) continue; // e.g. voice cluster of a game without voices
        seen++;
        if (r.width < 43.5 || r.height < 43.5) bad.push(`${el.id || el.className} ${Math.round(r.width)}x${Math.round(r.height)}`);
      }
      return { bad, seen };
    }, [VN.quickMenuButton, ['#vno-lang-bar', VN.langChip, VN.voiceStop, VN.voiceMute]]);
    expect(small.seen, 'HUD targets found').toBeGreaterThan(5);
    expect(small.bad, 'HUD targets under 44x44 CSS px').toEqual([]);

    // a tap on a HUD button does not advance
    const hud = page.locator(VN.voiceMute);
    if (await hud.isVisible()) {
      await hud.tap();
      await page.waitForTimeout(800);
      expect(await settledText(page), 'tap on a HUD button must not advance').toBe(first);
    }
    // a tap on the background does
    const vp = page.viewportSize();
    await page.touchscreen.tap(vp.width / 2, vp.height * 0.35);
    await expect.poll(() => settledText(page), { message: 'tap on the stage advances', timeout: 10_000 }).not.toBe(first);
  });

  test.describe('portrait', () => {
    test.use({ viewport: { width: 390, height: 844 } });
    test('a coarse pointer in portrait shows the rotate hint', { tag: '@touch' }, async ({ page }) => {
      await page.goto(PLAY);
      await expect(page.locator(VN.rotateHint)).toBeVisible();
    });
  });
});
