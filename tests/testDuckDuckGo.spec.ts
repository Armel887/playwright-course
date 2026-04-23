import { test, expect } from '@playwright/test';

test('Buscar en DuckDuckGo', async ({ page }) => {
  await page.goto('https://duckduckgo.com/?kl=us-en');

  const input = page.getByRole('combobox', { name: /search/i });

  await input.fill('Playwright');
  await page.keyboard.press('Enter');

  await expect(page).toHaveTitle(/Playwright/, { timeout: 15000 });
});