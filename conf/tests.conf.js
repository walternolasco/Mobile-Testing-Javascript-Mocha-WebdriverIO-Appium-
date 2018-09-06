require('dotenv').config()
const defaultTimeoutInterval = process.env.DEBUG ? 99999999 : 60000;

exports.config = {
  // user: process.env.BROWSERSTACK_USERNAME,
  // key: process.env.BROWSERSTACK_ACCESS_KEY,

  // updateJob: false,
  specs: ['./tests/specs/*.spec.js'],
  exclude: [],

  capabilities: [
    {
      browser: 'chrome',
      // browser_version: '66.0',
      // platform: 'Mac',
      // os: 'OS X',
      resolution: '1920x1080'
      // os_version: 'High Sierra',
      // project: 'Splitscnd',
      // name: 'Spliscnd e2e Tests',
      // build: 'Splitscnd'
    }
  ],

  // logLevel: 'verbose',
  logLevel: 'silent',
  sync: true,
  coloredLogs: true,
  reporters: ['spec'],
  screenshotPath: './errorShots/',
  baseUrl: 'https://roadrunner-dashboard.acklenavenueclient.com',
  waitforTimeout: 90000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  // host: 'hub.browserstack.com',
  services: ['selenium-standalone'],

  framework: 'mocha',
  mochaOpts: {
    // timeout: 30000,
    timeout: defaultTimeoutInterval,
    ui: 'bdd',
    compilers: ['js:babel-register']
  }
}
