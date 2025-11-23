const { test, expect } = require('@playwright/test');

test('Title matches expected value', async ({ page }) => {
  await page.goto('https://iansaini.com');
  await expect(page).toHaveTitle('Ian Saini | Home');

const footer = page.locator('div');
  await expect(footer).toBeVisible();
});
