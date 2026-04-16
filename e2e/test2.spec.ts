import { test, expect } from '@playwright/test';

test('test basico input', async ({ page }) => {
  await page.goto('https://playwright.dev');

  await page.getByRole('button', { name: 'Search' }).click();

  const input = page.getByPlaceholder('Search docs');

  await input.fill('hola');

  await expect(input).toHaveValue('hola');
});
