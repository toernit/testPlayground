import { test, expect } from '@playwright/test';

test('can add and remove a task', async ({ page }) => {
  await page.goto('http://localhost:5173');

  const taskInput = page.getByPlaceholder('Enter a task');
  const addButton = page.getByRole('button', { name: /add/i });

  await taskInput.fill('Write Playwright test');
  await addButton.click();

  await expect(page.getByText('Write Playwright test')).toBeVisible();

  await page.getByRole('button', { name: /delete/i }).click();

  await expect(page.getByText('Write Playwright test')).not.toBeVisible();
});
