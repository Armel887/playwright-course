import { test , expect } from '@playwright/test';

test('navegacion y validacion de elementos', async ({page}) => {
    await page.goto('https://www.mercadolibre.com.co');

    const input = page.getByRole('combobox');  // encontrar input

    await input.fill('iphone');  // escribir
    await page.keyboard.press('Enter');  // buscar









}
);