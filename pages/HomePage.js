const BasePage = require('./BasePage');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.url = 'https://www.eliassen.com/';
    
    // Simple selectors
    this.logo = 'img[alt*="Eliassen"]';
    this.navigationMenu = 'nav';
    this.contactLink = 'a[href="/contact"]';
    this.mainContent = 'main';
    this.footer = 'footer';
  }

  async open() {
    await this.navigate(this.url);
    await this.waitForLoadState();
  }

  async goToContact() {
    await this.click(this.contactLink);
  }

  async isLogoVisible() {
    return await this.isElementVisible(this.logo);
  }

  async isNavigationVisible() {
    return await this.isElementVisible(this.navigationMenu);
  }

  async isMainContentVisible() {
    return await this.isElementVisible(this.mainContent);
  }

  async isFooterVisible() {
    return await this.isElementVisible(this.footer);
  }
}

module.exports = HomePage; 