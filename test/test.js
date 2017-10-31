const puppeteer = require('puppeteer');
const assert = require("assert");

let browser;

describe('Test Puppeteer', async () => {
  before(async () => {
    browser = await puppeteer.launch({
      timeout: 0,
      headless: true
    });
  });

  describe('Open Google', () => {
    it('Should done open Google site with Search result', async () => {
      const page = await browser.newPage();
      await page.setViewport({
        width: 1280,
        height: 720
      });
      await page.goto('https://www.google.com', { waitUntil: 'networkidle' });
      await page.type('input[id="lst-ib"]', 'TakeMeTour');
      await page.click('input[name="btnK"]');
      await page.waitForSelector('#resultStats');
      const results = await page.$eval('#resultStats', div => div.innerHTML);
      assert.equal(0, results.indexOf('ผลการค้นหา'));
      return page.close();
    })
  })

  after(async () => browser.close())
});
