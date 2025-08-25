import { test as base,type Page } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

// Extend base test to add a loggedInPage fixture
export const test = base.extend<{
  loggedInPage: Page;   // 👈 Correct typing
}>({
  loggedInPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    // Perform login
    await loginPage.goto();
    await loginPage.clickDealerSignIn();
    await loginPage.clickSignInButton();
    await loginPage.enterLoginName('test.email@hdbrite.com'); // replace with real
    await loginPage.enterPassword('ChangeMe@123'); // replace with real

    // Navigate to Work Orders page after login
    await page.goto('https://dev.hdbrite.com/quotes-and-orders/work-orders#all-work-order');

    // Expose the page to the tests
    await use(page);
  },
});
