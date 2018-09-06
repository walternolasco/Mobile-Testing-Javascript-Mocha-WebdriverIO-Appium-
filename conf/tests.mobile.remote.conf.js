require('dotenv').config()
const defaultTimeoutInterval = process.env.DEBUG ? 99999999 : 60000;

exports.config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,

  updateJob: false,
  specs: ['./tests/specs/*.spec.js'],
  exclude: [],

//Documentation for this capabilities are located here:
//https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/caps.md
  capabilities: [{
        // appiumVersion: '1.6.5',
        project: 'Evernote Mobile Tests',
        name: 'Evernote Login',
        build: '1.0',
        automationName: 'Appium',//Which automation engine to use (Appium (default), Selendroid, UiAutomator2 or Espresso for Android or XCUITest for iOS)
        device: 'Samsung Galaxy S8',//The kind of mobile device or emulator to use  
        os: 'Android', //OS you want to test.
        os_version: '7.0',//Use this capability to specify the OS version of the device.
        // browserName: 'Browser',//Name of mobile web browser to automate. Should be an empty string if automating an app instead. 
        clearSystemFiles: true,
        app: 'bs://7035f1127ff77e6129704661f0aedea2956b7875',//App id already uploaded in Browserstack
        'browserstack.video': true,
        'browserstack.appium_version': '1.6.5'
    }],
    
  logLevel: 'silent',
  sync: true,
  coloredLogs: true,
  reporters: ['spec'],
  screenshotPath: './errorShots/',
  // baseUrl: 'https://roadrunner-dashboard.acklenavenueclient.com',//In case for mobile web tests
  waitforTimeout: 90000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  // host: 'hub.browserstack.com',
  services: ['browserstack'],
  host: 'hub-cloud.browserstack.com',
  framework: 'mocha',
  mochaOpts: {
    // timeout: 30000,
    timeout: defaultTimeoutInterval,
    ui: 'bdd',
    compilers: ['js:babel-register']
  }
}
