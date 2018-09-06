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

## Running the tests

- To run the tests:
For Browserstack: `yarn test-mobile-remote` / `npm run test-mobile-remote`

For Local: `yarn test-mobile-local` / `npm run test-mobile-local`

