const puppeteer = require('puppeteer');

const logger = require('./utils/logger');
const multiDeviceTest = require('./test/multiple-devices');

puppeteer.launch({
  timeout: 0,
  headless: false
})
  .then(async browser => {
    logger.info('Begin Test');
    await multiDeviceTest.desktop(browser);
    await multiDeviceTest.mobile(browser);
    await browser.close();
    logger.info('Done Test');
  });
