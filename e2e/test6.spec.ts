/*import { test , expect } from '@playwright/test';

test('navegacion y validacion de elementos', async ({page}) => {
    await page.goto('https://www.mercadolibre.com.co');

    const input = page.getByRole('combobox');  // encontrar input

    await input.fill('iphone');  // escribir
    await page.keyboard.press('Enter');  // buscar
    //await page.pause();
    
    await page.waitForTimeout(3000); //espera 3 segundos
    const productos = page.locator('a.ui-search-result__content');
    const count = await productos.count();

    for (let i = 0; i < count; i++) {
     console.log(await productos.nth(i).innerText());
    }


    //await page.getByRole('link', { name: 'Apple iPhone 16 (128 GB) - color azul', exact: true }).click();
    //await page.getByRole('button', { name: 'Comprar ahora' }).first().click();

    //await page.waitForTimeout(3000); //espera 3 segundos

    //await page.locator('Search').fill('Iphone 16')
}
);

*/

import { test, expect } from '@playwright/test';

test('navegacion y validacion de lista de resultados', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.co');

  // Buscar "iphone"
  const input = page.getByRole('combobox');
  await input.fill('iphone');
  await page.keyboard.press('Enter');

  // Esperar a que aparezcan los resultados
  await page.waitForSelector('a.ui-search-result__content');

  // Obtener todos los productos de la lista
  const productos = page.locator('a.ui-search-result__content');
  const count = await productos.count();

  console.log(`Se encontraron ${count} resultados:`);

  // Recorrer y mostrar cada resultado
  for (let i = 0; i < count; i++) {
    const texto = await productos.nth(i).innerText();
    console.log(`Resultado ${i + 1}: ${texto}`);
  }

  // Ejemplo de validación: asegurarse de que haya al menos un resultado
  expect(count).toBeGreaterThan(0);
});
