import { siteCredentials as credentials } from '../utils/utils'

class LoginPage {
  
  get usernameInput() { return browser.element('android=new UiSelector().resourceId("com.evernote:id/landing_email")') }
  get passwordInput() { return browser.element('android=new UiSelector().resourceId("com.evernote:id/landing_login_password")') }
  get continueButton() { return browser.element('android=new UiSelector().resourceId("com.evernote:id/continue_button")') }
  get SignIn() { return browser.element('android=new UiSelector().resourceId("com.evernote:id/landing_sign_in_button")') }
  get Message() { return browser.element('android=new UiSelector().resourceId("android:id/message")') }
  get ListView() { return browser.element('android=new UiSelector().resourceId("com.evernote:id/note_list_listview")') }
  get hamburguerMenu() { return browser.element('android=new UiSelector().className("android.widget.ImageButton").description("Navigate up")') }
  get accountArrow() { return browser.element('android=new UiSelector().resourceId("com.evernote:id/carat")') }
  get accountSettings() { return browser.element('android=new UiSelector().resourceId("com.evernote:id/home_list_text").text("Account Settings")') }
  get signOut() { return browser.element('android=new UiSelector().resourceId("android:id/title").text("Sign Out")') }
  get signOutConfirmation() { return browser.element('android=new UiSelector().resourceId("android:id/button1")') }

  login({email, password}) {
    browser.pause(3000);
    this.usernameInput.setValue(email)
    this.continueButton.click()
    this.passwordInput.setValue(password)
    this.submit()
  }

  logout() {
    this.hamburguerMenu.click()
    browser.pause(2000)
    this.accountArrow.click()
    browser.pause(2000)
    this.accountSettings.click()
    browser.pause(2000)
    browser.touchAction([{action: 'press', x: 50, y: 0}, { action: 'moveTo', x: 50, y: 500 }, 'release'])//Perform a swipe down
    this.signOut.click()
    browser.pause(2000)
    this.signOutConfirmation.click()
  }

  submit() {
    this.SignIn.click()
  }
}

export default new LoginPage()
