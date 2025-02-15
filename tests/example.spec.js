// @ts-check
import { test, expect } from '@playwright/test';
test.describe('Basic test', () => {
  test.beforeEach(async ({ page }) => {
    // Open the page before each test.
    await page.goto('/');
  });
  test('Landed on evaly home page', async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle("Evaly | Online shopping platform");
  });
  
  test('Login has all the input fields', async ({ page }) => {
  
    // Click the get login link.
    let login_element = await page.waitForSelector("//span[@class='sr-only'][normalize-space()='Sign in']");
    await login_element.click();
    await page.waitForTimeout(5000);
  });
  
});
