import { test, expect } from '@playwright/test';

test('login basico', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  // completar campos
  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');

  // click login
  await page.getByRole('button', { name: 'Login' }).click();

  // validar URL (navegación real)
  await expect(page).toHaveURL(/secure/);
});