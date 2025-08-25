// tests/workOrderList.spec.ts
import { test } from '@playwright/test';
import { WorkOrderListPage } from './pages/WorkOrderListPage';

test.describe('Work Order List Page', () => {

  // --------------------------
  // Test breadcrumb and table headers
  // --------------------------
  test('Verify breadcrumb and table headers', async ({ page }) => {
    const workOrderListPage = new WorkOrderListPage(page);

    // Navigate to Work Orders page
    await page.goto('/quotes-and-orders/work-orders#all-work-order');

    // Check breadcrumb
    await workOrderListPage.verifyTableAndBreadcrumb();

    // Check table headers
    await workOrderListPage.verifyTableHeaders([
      'Work No.',
      'Work Type',
      'Installer',
      'Status',
      'Follow-up Date',
      'Dealer',
      'Field Ops Rep',
    ]);
  });

  // --------------------------
  // Test clicking a work order navigates to detail page
  // --------------------------
  test('Verify clicking a work order navigates to detail page', async ({ page }) => {
    const workOrderListPage = new WorkOrderListPage(page);

    // Navigate to Work Orders page
    await page.goto('/quotes-and-orders/work-orders#all-work-order');

    // Open first work order and verify number
    await workOrderListPage.openWorkOrder(0);

    // Go back to list
    await workOrderListPage.goBackToList();
  });

});
