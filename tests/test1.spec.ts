import { test, expect } from '@playwright/test';

test('Buscar en Google', async ({ page }) => {
  await page.goto('https://www.google.com'); // ir a la pagina

  const input = page.getByRole('combobox');  // encontrar input

  await input.fill('Playwright');  // escribir
  await page.keyboard.press('Enter');  // buscar

  await expect(page).toHaveURL(/search/);  // validar resultado
});