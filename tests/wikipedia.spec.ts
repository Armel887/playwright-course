import { test, expect } from '@playwright/test';

test('Logo de Wikipedia visible', async ({ page }) => {
  await page.goto('https://es.wikipedia.org');

  /**const logo = page.locator('a.mw-wiki-logo');
  await logo.waitFor({ state: 'visible', timeout: 10000 });
  await expect(logo).toBeVisible();*/

  const input = page.locator('#searchInput');
  await input.waitFor({ state: 'visible' });
  await expect(input).toBeVisible();

  
});