const puppeteer = require('puppeteer');

puppeteer.launch({
  timeout: 0,
  headless: false
})
  .then(async browser => {
    const page = await browser.newPage();
    await page.goto('https://www.google.com');
    await page.screenshot({ path: 'test.png' });
  });
