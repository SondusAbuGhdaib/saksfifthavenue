import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: /.*\.spec\.ts/,
  fullyParallel: true,
  retries: 1,
  reporter: [['list'], ['html']],
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    storageState: 'storageState.json',
    baseURL: 'https://dev.hdbrite.com',
  },
  // ✅ ESM: provide the path as a string
  globalSetup: './global-setup.ts',
});
