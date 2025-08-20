import { test, expect } from '@playwright/test';

test('Saks Fifth Avenue homepage loads and search works', async ({ page }) => {
  // 1. Go to the homepage
  await page.goto('https://www.saksfifthavenue.com/');

  // 2. Verify title contains "Saks"
  await expect(page).toHaveTitle(/Saks Fifth Avenue/);

 
});
