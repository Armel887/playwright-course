import { test , expect } from '@playwright/test';

test('Validar página example', async ({ page }) => {
  await page.goto('https://example.com');

  const titulo = page.locator('h1');
  await expect(titulo).toBeVisible();
  await expect(titulo).toHaveText('Example Domain');
});

