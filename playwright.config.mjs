import { defineConfig, devices } from '@playwright/test';

const PORT = Number(process.env.PORT || 4173);
// The screens project only runs when asked for (npm run screens); a plain `playwright test` skips it.
const wantScreens = process.env.PW_SCREENS === '1' || process.argv.some((a) => a.includes('screens'));
if (wantScreens) process.env.PW_SCREENS = '1'; // worker processes re-read this config and must see the same projects

const base = { ...devices['Desktop Chrome'], browserName: 'chromium', baseURL: `http://127.0.0.1:${PORT}/` };

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 60_000,
  expect: { timeout: 5_000 },
  fullyParallel: true,
  reporter: [['list']],
  outputDir: 'test-results',
  webServer: {
    command: `node tests/e2e/serve.mjs ${process.env.SITE_DIR || 'dist'} ${PORT}`,
    url: `http://127.0.0.1:${PORT}/`,
    reuseExistingServer: true,
    timeout: 30_000,
  },
  projects: [
    { name: 'tv-nav', testMatch: /tv-nav\.spec\.mjs/, use: { ...base, viewport: { width: 1920, height: 1080 } } },
    // two viewports are set inside the spec with test.use; hasTouch/isMobile come from here
    { name: 'touch', testMatch: /touch\.spec\.mjs/, use: { ...base, hasTouch: true, isMobile: true, viewport: { width: 768, height: 1024 } } },
    { name: 'desktop', testMatch: /desktop\.spec\.mjs/, use: { ...base, viewport: { width: 1440, height: 900 } } },
    { name: 'players', testMatch: /players\.spec\.mjs/, use: { ...base, viewport: { width: 1280, height: 720 } } },
    ...(wantScreens
      ? [{ name: 'screens', testMatch: /screens\.spec\.mjs/, timeout: 180_000, use: { ...base, viewport: { width: 1920, height: 1080 } } }]
      : []),
  ],
});
