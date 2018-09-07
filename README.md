<p align="center">
  <img src="https://files.catbox.moe/7t42mf.png" width="100">
  <br>
  <b style="font-size: 18px;">MONOCLE MOBILE</b><br>
</p>

<p align="center">Simple and fun boilerplate for Mobile automated tests with WebdriverIO and BrowserStack :microscope: :tea:</p>

## Framework

- Mocha 
For more documentation please go to: https://mochajs.org/ or http://webdriver.io/guide/testrunner/frameworks.html

- Appium
For more documentation please go to: http://appium.io/docs/en/about-appium/intro/ or http://webdriver.io/guide/services/appium.html

## Features

- Page Objects Model usage with ES6 style class base approach and fully ES6 - ES8 support through Babel
- Integration with BrowserStack
- Integration with Local Environment (Physical devices, Emulator devices) (Android-IOS)
- Example using BrowserStack capabilities (Remote)
- Example using Local Desired capabilities (Local)
- ESLint using slightly modificated standard style
- Pre-commit support through lint-staged

## Setup

- Clone the repo
- Install dependencies with `yarn install` / `npm install`
- Set environment variables in your system OR create `.env` in the project root and update with [BrowserStack Username and Access Key](https://www.browserstack.com/accounts/settings)
- Prepare the required capabilities based on what you want to run:
For Browserstack: Set up the /conf/test-mobile-remote.conf.js config file
For Local: Set up the /conf/test-mobile-local.conf.js config file

Like this:

```
BROWSERSTACK_USERNAME=monocleman
BROWSERSTACK_ACCESS_KEY=nTnrxYTqE55jeklwks
```

## Setting up the wdio config files

1) For physical devices and emulator devices (test-mobile-local.conf.js):

a) Add these 2 variables to the config file
host: '127.0.0.1',
port: 4723
b) Set up the desired capabilities to the config file (test-mobile-local.conf.js) as follows:
capabilities: [{
        automationName: 'Appium',//Which automation engine to use (Appium(default), XCUITest for iOS)
        appiumVersion: '1.9.0',//Appium version installed on your PC (Recommended version 1.9.0)
        platformName: 'Android',//Which mobile OS platform to use (ios for Iphones)
        platformVersion: '7.0',//Mobile OS version
        deviceName: 'e089d27b',//The kind of mobile device or emulator to use. (Device ID returned by CLI from running the command: "adb devices")
        browserName: '',//Name of mobile web browser to automate. Should be an empty string if automating an app instead. 
        app: './app/Evernote.apk',//The absolute local path or remote http URL to a .ipa file (IOS), .app folder (IOS Simulator) or .apk file (Android)
    }]
c) Add the following appium server args:
appium: {
        waitStartTime: 3000,// wait time before runnning the app on the device.
        command: 'appium.cmd',//show appium logs on the CMD
        logFileName: 'appium190.log',//Save appium logs on this file
        args: {
            address: '127.0.0.1',//Localhost address
            port: 4723,//localhost default port
            newCommandTimeout: '7200',//How long (in seconds) Appium will wait for a new command from the client before assuming the client quit and ending the session	
            sessionOverride: true,//Enables session override (clobbering)
            debugLogSpacing: true,//Add spacing in logs to help with visual inspection
          }
        }

2. For remote devices on Browserstack (test-mobile-remote.conf.js):

a) Add to the config file the Browserstack keys:
user: process.env.BROWSERSTACK_USERNAME,
key: process.env.BROWSERSTACK_ACCESS_KEY

b) Set up the desired capabilities as follows;
capabilities: [{
        project: 'Evernote Mobile Tests',//Allows the user to specify a name for a logical group of builds.
        name: 'Evernote Login',//Allows the user to specify an identifier for the test run.
        build: '1.0',//Allows the user to specify a name for a logical group of tests.
        automationName: 'Appium',//Which automation engine to use (Appium (default), Selendroid, UiAutomator2 or Espresso for Android or XCUITest for iOS)
        device: 'Samsung Galaxy S8',//The kind of mobile device or emulator to use (name of the device on Browserstack)
        os: 'Android', //OS you want to test.
        os_version: '7.0',//The OS version of the device.
        browserName: '',//Name of mobile web browser to automate (chrome, firefox, explorer, safari). Should be an empty string if automating an app instead. 
        clearSystemFiles: true,
        app: 'bs://7035f1127ff77e6129704661f0aedea2956b7875',//App id already uploaded in Browserstack
        browserstack.video: true,//Browserstack tests video recording 
        browserstack.appium_version: '1.8.0'//Appium version you want to use to run the tests (Recommended version 1.8.0)
    }]

## Running the tests

- To run the tests via Git Bash or CMD:
Before running the tests you need to access via Gitbash or CMD the root folder where your test environment is set up. 
For Browserstack: `yarn test-mobile-remote` / `npm run test-mobile-remote`
For Local: `yarn test-mobile-local` / `npm run test-mobile-local`

