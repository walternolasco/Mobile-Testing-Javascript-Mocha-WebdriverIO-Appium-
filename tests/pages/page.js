'use strict'

export default class Page {
  constructor(title) {
    this.title = title
  }

  open(path) {
    browser.url(`/${path}`)
  }

  getUrl() {
    return browser.getUrl()
  }
}
