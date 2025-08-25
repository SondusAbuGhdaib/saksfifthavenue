import { FullConfig, chromium } from '@playwright/test';
import { LoginPage } from './tests/pages/LoginPage';
import dotenv from 'dotenv';

dotenv.config(); // load .env variables

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.clickDealerSignIn();
  await loginPage.clickSignInButton();
  await loginPage.enterLoginName(process.env.LOGIN_EMAIL!);
  await loginPage.enterPassword(process.env.LOGIN_PASSWORD!);

  await page.context().storageState({ path: 'storageState.json' });
  await browser.close();
}

export default globalSetup;
