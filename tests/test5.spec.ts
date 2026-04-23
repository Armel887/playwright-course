import { test, expect } from '@playwright/test';

test('login con validacion visible', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.getByLabel('Username').fill('tomsmith');
  await page.getByLabel('Password').fill('SuperSecretPassword!');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/secure/);

  await expect(page.getByRole('heading', { level: 2 })).toBeVisible();
});