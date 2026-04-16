import {test , expect } from '@playwright/test';

test('Titulo de Google correcto' , async ({ page}) => {
    await page.goto('https://www.google.com');
    await expect(page).toHaveTitle(/Google/);

});