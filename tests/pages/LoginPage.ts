import { type Page, expect } from "@playwright/test";

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("https://dev.hdbrite.com/login");
  }

  async clickDealerSignIn() {
    await this.page.getByText("briteDealerSign in").click();
  }

  async clickSignInButton() {
    await this.page.getByRole("button", { name: "Sign in" }).click();
  }

  async enterLoginName(username: string) {
    await this.page.getByRole("textbox", { name: "Login Name" }).fill(username);
    await this.page.getByRole("button", { name: "Next" }).click();
  }

  async enterPassword(password: string) {
    await this.page.getByRole("textbox", { name: "Password" }).fill(password);
    await this.page.getByRole("button", { name: "Next" }).click();
  }

  async assertLoginError() {
    await expect(this.page.getByText("User could not be found")).toBeVisible();
  }
}
