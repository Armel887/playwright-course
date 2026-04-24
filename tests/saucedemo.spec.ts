/*import {test , expect } from '@playwright/test'

test ('test login' , async ({ page }) => {

    await page.goto('https://www.saucedemo.com/')
    
    
  
    await page.getByRole('textbox' , {name:'Nombre de usuario'}).fill('estándar usuario')
    await page.getByRole('textbox' , {name:'Contraseña'}).fill('salsa secreta')
    await page.getByRole('button' , {name:'Acceso'}).click()
    await page.pause()



})*/

// @ts-check
/*import { test, expect } from '@playwright/test';

test('Login en Saucedemo sin popup de idioma', async ({ browser }) => {
  // Lanzar navegador con flags para desactivar traducción automática
  const context = await browser.newContext({
    locale: 'en-US', // fuerza idioma inglés
  });

  const page = await context.newPage();

  // Ir a la página de Saucedemo
  await page.goto('https://www.saucedemo.com/');

  // Completar login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Verificar que el login fue exitoso
  await expect(page).toHaveURL(/inventory.html/);
  await expect(page.locator('.inventory_list')).toBeVisible();
});*/

// @ts-check
import { test, expect } from '@playwright/test';

test('Login en Saucedemo con fixture page', async ({ page }) => {
  // Ir directamente a la página
  await page.goto('https://www.saucedemo.com/');

  // Completar login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Verificar que el login fue exitoso
  await expect(page).toHaveURL(/inventory.html/);
  await expect(page.locator('.inventory_list')).toBeVisible();
});
