import { type Page, type Locator, expect } from '@playwright/test';
import { LoginPage } from './LoginPage';

export class WorkOrderListPage {
  readonly page: Page;

  // --------------------------
  // Constructor
  // --------------------------
  constructor(page: Page) {
    this.page = page;
  }

  // --------------------------
  // TABLE & BREADCRUMB VALIDATIONS
  // --------------------------
  async verifyTableAndBreadcrumb() {
    const breadcrumb = this.page.getByLabel('Breadcrumb');
    await expect(breadcrumb).toContainText('All Work Orders');
  }

  async verifyTableHeaders(expectedHeaders: string[]) {
    const headers = this.page.locator('table thead tr th button');

    // Auto-wait using expect
    await expect(headers.first()).toBeVisible();

    const headerTexts = (await headers.allTextContents()).map(h => h.trim());
    console.log('Received headers:', headerTexts);
    console.log('Expected headers:', expectedHeaders);

    expect(headerTexts).toEqual(expectedHeaders);
  }

  // --------------------------
  // WORK ORDER INTERACTIONS
  // --------------------------
  async openWorkOrder(index: number = 0) {
    // Get the work order number from the table
    const workOrderLink = this.page.locator('td a').nth(index);
    const workOrderNumber = await workOrderLink.textContent();

    // Click the work order
    await workOrderLink.click();

    // Get work order number on the detail page
    const detailNumberSpan = this.page.locator(
      '//span[contains(@class,"font-bold") and contains(text(),"000")]'
    );
    await expect(detailNumberSpan).toBeVisible();

    const detailNumberText = await detailNumberSpan.evaluate(el => {
      const node = Array.from(el.childNodes).find(n => n.nodeType === Node.TEXT_NODE);
      return node?.textContent?.trim();
    });

    console.log('Work order number on detail page:', detailNumberText);
    console.log('Work order number on table page:', workOrderNumber);

    // Assert they match
    expect(detailNumberText?.trim()).toBe(workOrderNumber?.trim());
  }

  async goBackToList() {
    await this.page.getByRole('menuitem', { name: 'All Work Orders' }).click();
  }
}
