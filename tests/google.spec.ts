import { test, expect } from '@playwright/test';

test('Título de Google correcto', async ({ page }) => {
  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle(/Google/);
});