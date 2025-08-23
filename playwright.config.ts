import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: /.*\.spec\.ts/,   // only run *.spec.ts files
  use: {
    headless: true,            // change to false for headed mode
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});
