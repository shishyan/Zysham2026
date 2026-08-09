const { chromium } = require('C:/Users/Shishyan/GitHub/Shishyan/Home-Manager/node_modules/playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1680, height: 1050 } });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('http://127.0.0.1:5500/Zysham2026/#overview', { waitUntil: 'networkidle' });
  if (await page.locator('#entryGate:not(.complete)').count()) {
    await page.locator('#enterGuest').click();
    await page.waitForSelector('#entryGate.complete');
  }
  await page.goto('http://127.0.0.1:5500/Zysham2026/#overview', { waitUntil: 'networkidle' });
  await page.waitForSelector('.railway-journey');
  const rail = await page.evaluate(() => {
    const shell = document.querySelector('.railway-journey');
    const nav = shell.querySelector('.journey-workspace-tabs');
    return { background: getComputedStyle(shell).backgroundImage, overflowX: getComputedStyle(nav).overflowX, scrollWidth: nav.scrollWidth, clientWidth: nav.clientWidth, stations: nav.children.length };
  });
  await page.locator('[data-journey-stage="grade10"]').click();
  await page.waitForSelector('.stage-learning-plan');
  const stage = await page.evaluate(() => ({
    lanes: document.querySelectorAll('.stage-learning-lane').length,
    resources: document.querySelectorAll('[data-action="stage-resource"]').length,
    stepperBeforeHero: document.querySelector('.journey-stage-page').firstElementChild.classList.contains('milestone-chevron-top'),
    headings: [...document.querySelectorAll('.stage-lane-head strong')].map(x => x.textContent.trim()),
  }));
  await page.waitForTimeout(350);
  await page.screenshot({ path: '.tmp-journey-curriculum.png', fullPage: false });
  await page.locator('[data-action="stage-resource"][data-target="assessments"]').first().click();
  await page.waitForSelector('.assessment-hub');
  const resourceRoute = { hash: await page.evaluate(() => location.hash), active: await page.locator('.assessment-hub-sidebar button.active strong').textContent() };
  console.log(JSON.stringify({ rail, stage, resourceRoute, errors }, null, 2));
  await browser.close();
})();
