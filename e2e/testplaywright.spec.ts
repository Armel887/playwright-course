import {test , expect } from '@playwright/test';


test.only('Buscar en Playwright.dev', async ({ page }) => {
  await page.goto('https://playwright.dev');

  await page.getByRole('button' , {name:'Search'}).click();
  await page.getByPlaceholder('Search docs').fill('locator');
  
  await expect(page.getByText('locator')).toBeVisible();  // solo valida la URL
  
});