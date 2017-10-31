const fs = require('fs');

module.exports = {
  captureScreen: async (page, namespace, filename) => {
    const rootPath = `screenshot/${namespace}`;
    if (!fs.existsSync(rootPath)) {
      fs.mkdirSync(rootPath);
    }
    await page.screenshot({ path: `screenshot/${namespace}/${filename}.png` })
  }
}
