import { test, expect } from '@playwright/test';

test('navegacion basica', async ({ page }) => {
  await page.goto('https://playwright.dev');

  // click en "Docs"
  await page.getByRole('link', { name: 'Docs' }).click();

  // validar URL
  await expect(page).toHaveURL(/docs/);
});