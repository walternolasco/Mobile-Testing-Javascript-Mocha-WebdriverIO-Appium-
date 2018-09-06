require('dotenv').config()
const defaultTimeoutInterval = process.env.DEBUG ? 99999999 : 60000;

exports.config = {
  
  host: '127.0.0.1',
  port: 4723,
  specs: ['./tests/specs/*.spec.js'],
  exclude: [],

//Documentation for this capabilities are located here:
//https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/caps.md
  capabilities: [{
        automationName: 'Appium',
        appiumVersion: '1.9.0',//Appium version installed on your PC
        platformName: 'Android',//Which mobile OS platform to use
        platformVersion: '7.0',//Mobile OS version
        deviceName: 'e089d27b',
        browserName: '',//Name of mobile web browser to automate. Should be an empty string if automating an app instead. 
        app: '..\\app\\Evernote.apk',
        clearSystemFiles: true
    }],
    
  logLevel: 'silent',
  sync: true,
  coloredLogs: true,
  reporters: ['spec'],
  screenshotPath: './errorShots/',
  waitforTimeout: 90000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: ['appium'],//For Mobile local tests
  appium: {
        waitStartTime: 3000,
        command: 'appium.cmd',
        logFileName: 'appium190.log',
        args: {
            address: '127.0.0.1',
            port: 4723,
            newCommandTimeout: '7200',
            sessionOverride: true,
            debugLogSpacing: true,
          }
        },
  framework: 'mocha',
  mochaOpts: {
    // timeout: 30000,
    timeout: defaultTimeoutInterval,
    ui: 'bdd',
    compilers: ['js:babel-register']
  }
}
