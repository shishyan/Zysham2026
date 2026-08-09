const { test, expect } = require('@playwright/test');

test('team blog and infographic experiences render', async ({ page }) => {
  await page.goto('http://127.0.0.1:4177');
  await page.getByRole('button', { name: 'Continue as guest', exact: true }).click();
  await page.getByRole('button', { name: 'Open Team Blog' }).click();
  await expect(page.locator('#pageEyebrow')).toContainText('66 HUMAN STORIES');
  await expect(page.getByText('When your result disappoints everyone, including you').first()).toBeVisible();
  await page.getByText('When your result disappoints everyone, including you').first().click();
  await expect(page.getByText('A gentle way forward')).toBeVisible();
  await page.getByRole('button', { name: 'Explore the seven infographics' }).click();
  await expect(page.locator('#pageEyebrow')).toContainText('7 VISUAL GUIDES');
  await expect(page.locator('.infographic-grid > button')).toHaveCount(7);
  await page.locator('.infographic-grid > button').first().click();
  await expect(page.locator('#pageTitle')).toHaveText('A decision begins with a person, not a rank');
  await expect(page.locator('.infographic-flow section')).toHaveCount(4);
});
