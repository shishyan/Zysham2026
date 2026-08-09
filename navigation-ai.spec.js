const { test, expect } = require('@playwright/test');

async function enterAsGuest(page) {
  await page.goto('http://127.0.0.1:4173');
  await page.locator('#enterGuest').click();
  await expect(page.locator('#entryGate')).toHaveClass(/complete/, { timeout: 3000 });
}

test('right rail is AI-only and learning/research live in the left menu', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await enterAsGuest(page);
  await expect(page.locator('#researchRail > *')).toHaveCount(1);
  await expect(page.locator('#researchRail > #mentorDock')).toHaveCount(1);
  await page.locator('#leftSidebarToggle').click();

  const learning = page.locator('.nav-group-learning');
  await learning.locator('[data-menu="learning"]').click();
  await expect(learning.locator('.nav-subitem')).toHaveCount(3);
  await learning.getByRole('button', { name: 'Certification Courses' }).click();
  await expect(page).toHaveURL(/#certifications$/);
  await expect(learning.locator('[data-menu="learning"]')).toHaveClass(/active/);

  const research = page.locator('.nav-group-research');
  await research.locator('[data-menu="research"]').click();
  await expect(research.locator('.nav-subitem')).toHaveCount(11);
  await research.getByRole('button', { name: /Evidence library/ }).click();
  await expect(page).toHaveURL(/#research$/);
  await expect(page.locator('.research-view')).toBeVisible();
  await expect(page.locator('body')).not.toHaveClass(/right-drawer-open/);
  await page.locator('[data-action="research-detail"]').first().click();
  await expect(page.locator('#viewHost .research-detail')).toBeVisible();
  await expect(page.locator('body')).not.toHaveClass(/right-drawer-open/);
});

test('AI opens as a dark glass chat panel', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await enterAsGuest(page);
  await page.locator('#mentorTrigger').click();
  await expect(page.locator('#rightDrawer')).toHaveAttribute('data-kind', 'mentor');
  const colors = await page.locator('#mentorPanel').evaluate((node) => {
    const panel = getComputedStyle(node);
    const message = getComputedStyle(node.querySelector('.mentor-message'));
    return { ink: panel.getPropertyValue('--ink').trim(), message: message.backgroundColor };
  });
  expect(colors.ink).toBe('#fbf9ff');
  expect(colors.message).toContain('rgba');
  await expect(page.locator('#mentorPanel')).toBeVisible();
  await page.waitForTimeout(350);
  await page.screenshot({ path: 'test-results/dark-ai-chat.png' });
});
