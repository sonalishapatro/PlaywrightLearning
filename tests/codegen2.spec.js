import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('heading', { name: 'System Users' }).click();
  await page.locator('#app div').filter({ hasText: 'System UsersUsernameUser Role' }).nth(2).click();
  await expect(page.getByRole('button', { name: ' Add' })).toBeVisible();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('sp');
  await page.getByText('-- Select --').first().click();
  await page.getByRole('option', { name: 'Admin' }).locator('span').click();
  await page.locator('#app div').filter({ hasText: 'System UsersUsernameUser' }).nth(2).click();
  await page.locator('form').getByText('Admin').click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('heading', { name: 'Add User' }).click();
  await expect(page.getByRole('heading', { name: 'Admin' })).toBeVisible();
});