const colors = require('colors');
const logSymbols = require('log-symbols');

module.exports = {
  success: msg => console.log(`${logSymbols.success} ${msg}`.green),
  error: msg => console.log(`${logSymbols.error} ${msg}`.red),
  info: msg => console.log(`${logSymbols.info} ${msg}`.cyan),
};
