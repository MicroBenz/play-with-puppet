const logger = require('../utils/logger');
const screenshot = require('../utils/screenshot');

const googleSearch = async (browser, query) => {
  logger.info(`Test Google search with keyword = ${query}`);
  const page = await browser.newPage();
  await page.setViewport({
    width: 1280,
    height: 720
  });
  await page.goto('https://www.google.com', { waitUntil: 'networkidle' });
  await page.type('input[id="lst-ib"]', query);
  await page.click('input[name="btnK"]');
  await page.waitForSelector('div.mw');
  await screenshot.captureScreen(page, 'google-search', `search-${query.split(' ').join('-')}`);
  await page.close();
  logger.success(`Search with query "${query}" has been done`);
  return Promise.resolve();
}

module.exports = { googleSearch };
