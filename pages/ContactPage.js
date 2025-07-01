const BasePage = require('./BasePage');

class ContactPage extends BasePage {
  constructor(page) {
    super(page);
    this.url = 'https://www.eliassen.com/contact';
    
    // Simple, direct selectors
    this.firstNameInput = 'input[name*="first" i]';
    this.lastNameInput = 'input[name*="last" i]';
    this.emailInput = 'input[name*="email" i]';
    this.phoneInput = 'input[name*="phone" i]';
    this.companyInput = 'input[name*="company" i]';
    this.jobTitleInput = 'input[name*="job" i]';
    this.messageTextarea = 'textarea';
    this.submitButton = 'button[type="submit"]';
    
    // Test data
    this.testData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '555-123-4567',
      company: 'Test Company',
      jobTitle: 'QA Engineer',
      message: 'This is a test message'
    };
  }

  async open() {
    await this.navigate(this.url);
    await this.waitForLoadState();
  }

  async fillForm(data = this.testData) {
    await this.fill(this.firstNameInput, data.firstName);
    await this.fill(this.lastNameInput, data.lastName);
    await this.fill(this.emailInput, data.email);
    await this.fill(this.phoneInput, data.phone);
    await this.fill(this.companyInput, data.company);
    await this.fill(this.jobTitleInput, data.jobTitle);
    await this.fill(this.messageTextarea, data.message);
  }

  async submitForm() {
    await this.click(this.submitButton);
  }

  async getPageHeading() {
    return await this.getText('h1');
  }

  async isFormVisible() {
    return await this.isElementVisible('form');
  }

  // Simple security testing method
  async testInputLengthValidation() {
    const longText = 'A'.repeat(1000);
    const vulnerabilities = [];

    // Test company name field
    await this.fill(this.companyInput, longText);
    const companyValue = await this.page.locator(this.companyInput).first().inputValue();
    if (companyValue.length > 100) {
      vulnerabilities.push('Company Name field accepts very long input');
    }

    // Test first name field
    await this.fill(this.firstNameInput, longText);
    const firstNameValue = await this.page.locator(this.firstNameInput).first().inputValue();
    if (firstNameValue.length > 100) {
      vulnerabilities.push('First Name field accepts very long input');
    }

    // Test last name field
    await this.fill(this.lastNameInput, longText);
    const lastNameValue = await this.page.locator(this.lastNameInput).first().inputValue();
    if (lastNameValue.length > 100) {
      vulnerabilities.push('Last Name field accepts very long input');
    }

    return vulnerabilities;
  }



  async clearAllFields() {
    await this.fill(this.firstNameInput, '');
    await this.fill(this.lastNameInput, '');
    await this.fill(this.emailInput, '');
    await this.fill(this.phoneInput, '');
    await this.fill(this.companyInput, '');
    await this.fill(this.jobTitleInput, '');
    await this.fill(this.messageTextarea, '');
  }
}

module.exports = ContactPage; 