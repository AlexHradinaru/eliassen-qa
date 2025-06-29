class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  async getTitle() {
    return await this.page.title();
  }

  async getUrl() {
    return this.page.url();
  }

  async waitForLoadState(state = 'load') {
    await this.page.waitForLoadState(state);
  }

  async isElementVisible(selector) {
    return await this.page.isVisible(selector);
  }

  async getText(selector) {
    return await this.page.textContent(selector);
  }

  async click(selector) {
    await this.page.click(selector);
  }

  async fill(selector, text) {
    await this.page.fill(selector, text);
  }

  async selectOption(selector, value) {
    await this.page.selectOption(selector, value);
  }

  async check(selector) {
    await this.page.check(selector);
  }

  async screenshot(path) {
    await this.page.screenshot({ path });
  }
}

module.exports = BasePage; 