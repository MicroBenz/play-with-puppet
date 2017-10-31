const devices = require('puppeteer/DeviceDescriptors');
const logger = require('../utils/logger');
const screenshot = require('../utils/screenshot');

const iPhone5 = devices['iPhone 5'];
const iPhone6 = devices['iPhone 6'];

const desktop = async browser => {
  logger.info('Test Case: Open Google in Desktop');
  const page = await browser.newPage();
  await page.setViewport({
    width: 1280,
    height: 720
  });
  await page.goto('https://www.google.com');
  await screenshot.captureScreen(page, 'multi-device', 'desktop');
  await page.close();
  logger.success('Finished test: Open Google in Desktop');
};

const mobile = async browser => {
  logger.info('Test Case: Open Google in Desktop');
  await Promise.all([
    openBrowserWithDevice(browser, 'iPhone 5'),
    openBrowserWithDevice(browser, 'iPhone 6')
  ]);
  logger.success('Finished test: Open Google in Mobile');
};

const openBrowserWithDevice = async (browser, device) => {
  const page = await browser.newPage();
  await page.emulate(devices[device]);
  await page.goto('https://www.google.com');
  await screenshot.captureScreen(page, 'multi-device', `mobile-${device.split(' ').join('-')}`);
  await page.close();
};

module.exports = {
  desktop,
  mobile
};
