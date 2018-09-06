import { expect } from 'chai'
import LoginPage from '../pages/login.page'
import { siteCredentials as credentials } from '../utils/utils'

describe('Login', () => {
  it('should login with the correct credentials', () => {
    LoginPage.login(credentials)
    LoginPage.ListView.waitForExist()
    expect(LoginPage.ListView.isExisting()).to.be.true
  })
  it('should logout from the app', () => {
    LoginPage.logout()
    LoginPage.continueButton.waitForExist()
    expect(LoginPage.continueButton.isExisting()).to.be.true
  })

})
