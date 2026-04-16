
import { test, expect } from '@playwright/test';

test('verificar título de Google', async ({ page }) => {
  await page.goto('https://www.google.com');

  // Comprobar que el título contiene "Google"
  await expect(page).toHaveTitle(/Google/);
});