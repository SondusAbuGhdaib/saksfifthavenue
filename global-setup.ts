// global-setup.ts
import { chromium, FullConfig } from '@playwright/test';
import { LoginPage } from './tests/pages/LoginPage';

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.clickDealerSignIn();
  await loginPage.clickSignInButton();
  await loginPage.enterLoginName('test.email@hdbrite.com'); // 🔹 replace
  await loginPage.enterPassword('ChangeMe@123'); // 🔹 replace

  await page.context().storageState({ path: 'storageState.json' });
  await browser.close();
}

export default globalSetup;
