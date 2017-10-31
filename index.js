const puppeteer = require('puppeteer');

const logger = require('./utils/logger');
const multiDeviceTest = require('./test/multiple-devices');
const typingInputTest = require('./test/typing-input');

puppeteer.launch({
  timeout: 0,
  headless: true
})
  .then(async browser => {
    logger.info('Begin Test');
    // await multiDeviceTest.desktop(browser);
    // await multiDeviceTest.mobile(browser);
    await Promise.all([
      typingInputTest.googleSearch(browser, 'John Cena'),
      typingInputTest.googleSearch(browser, 'TakeMeTour')
    ])
    await browser.close();
    logger.info('Done Test');
  });
