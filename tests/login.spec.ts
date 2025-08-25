import { test } from "@playwright/test";
import { LoginPage } from "./pages/LoginPage"; // 

test("login flow", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  // First login attempt
  await loginPage.clickDealerSignIn();
  await loginPage.clickSignInButton();
  await loginPage.enterLoginName("test.email@hdbrite.com");
  await loginPage.enterPassword("ChangeMe@123");

  // Navigate somewhere after login
  await page.goto("https://dev.hdbrite.com/quotes-and-orders/work-orders#all-work-order");

  // Logout
  //await page.locator('button[data-slot="dropdown-menu-trigger"]').nth(1).click();
  //await page.getByRole('menuitem', { name: 'Logout' }).click();
  

  // Second login attempt with wrong user
  //await page.getByRole('button', { name: 'Other User' }).click();
 // await loginPage.enterLoginName("testtegfd");

  // Assert error
 // await loginPage.assertLoginError();
});
