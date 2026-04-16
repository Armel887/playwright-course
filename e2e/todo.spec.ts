import { test, expect } from '@playwright/test';

test.only('Mi primer test exitoso', async ({ page }) => {
  // Asegúrate de que esta URL sea EXACTAMENTE así
  await page.goto('https://playwright.dev');

  // Localizamos el input único
  const input = page.getByPlaceholder('What needs to be done?');
  
  // Escribimos y damos Enter
  await input.fill('Comprar leche');
  await input.press('Enter');

  // Verificamos que la tarea se agregó
  // Usamos getByTestId porque es el selector más robusto en Playwright
  await expect(page.getByTestId('todo-item')).toHaveText('Comprar leche');
});

