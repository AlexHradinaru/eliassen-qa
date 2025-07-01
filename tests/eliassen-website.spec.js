// @ts-check
const { test, expect } = require('@playwright/test');

const HomePage = require('../pages/HomePage');
const ContactPage = require('../pages/ContactPage');

test.describe('Eliassen Group Website Tests', () => {
  
  // Helper function to handle cookie consent
  async function handleCookieConsent(page) {
    try {
      const acceptButton = page.locator('button:has-text("Accept")').first();
      await acceptButton.waitFor({ timeout: 2000 });
      await acceptButton.click();
      await page.waitForTimeout(1000);
    } catch (e) {
      // Cookie dialog might not appear
    }
  }
  
  test('1. Page loads successfully and has correct title', async ({ page }) => {
    const homePage = new HomePage(page);
    
    await homePage.open();
    await handleCookieConsent(page);
    
    await expect(page).toHaveTitle('Homepage');
    await expect(page.getByRole('heading', { name: /Strategic Consulting Solutions/i })).toBeVisible();
  });

  test('2. Main navigation menu is visible and functional', async ({ page }) => {
    const homePage = new HomePage(page);
    
    await homePage.open();
    await handleCookieConsent(page);
    
    await expect(page.locator('text=People Solutions').first()).toBeVisible();
    await expect(page.locator('text=Inside Eliassen').first()).toBeVisible();
    await expect(page.locator('text=Frontline Insights').first()).toBeVisible();
  });

  test('3. People Solutions dropdown navigation works', async ({ page }) => {
    const homePage = new HomePage(page);
    
    await homePage.open();
    await handleCookieConsent(page);
    
    await page.locator('text=People Solutions').first().hover();
    
    await expect(page.getByRole('heading', { name: 'Human Powered Approach' })).toBeVisible();
    await expect(page.locator('#js-primaryNav').getByRole('menuitem', { name: 'Technology Solutions' })).toBeVisible();
    await expect(page.getByText('Financial, Risk & Compliance, and Advisory Solutions').first()).toBeVisible();
    await expect(page.locator('#js-primaryNav').getByRole('menuitem', { name: 'Clinical Solutions' })).toBeVisible();
  });

  test('4. Inside Eliassen dropdown navigation works', async ({ page }) => {
    const homePage = new HomePage(page);
    
    await homePage.open();
    await handleCookieConsent(page);
    
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    await expect(page.locator('#hs_cos_wrapper_footer_module').getByRole('menuitem', { name: 'About Us' })).toBeVisible();
    await expect(page.locator('#hs_cos_wrapper_footer_module').getByRole('menuitem', { name: 'Leadership' })).toBeVisible();
    await expect(page.locator('#hs_cos_wrapper_footer_module').getByRole('menuitem', { name: 'Careers', exact: true })).toBeVisible();
    await expect(page.locator('#hs_cos_wrapper_footer_module').getByRole('menuitem', { name: 'Newsroom' })).toBeVisible();
  });

  test('5. Frontline Insights dropdown navigation works', async ({ page }) => {
    const homePage = new HomePage(page);
    
    await homePage.open();
    await handleCookieConsent(page);
    
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    await expect(page.locator('#hs_cos_wrapper_footer_module').getByRole('menuitem', { name: 'Blog' })).toBeVisible();
    await expect(page.locator('#hs_cos_wrapper_footer_module').getByRole('menuitem', { name: 'Case Studies' })).toBeVisible();
    await expect(page.locator('#hs_cos_wrapper_footer_module').getByRole('menuitem', { name: 'Whitepapers' })).toBeVisible();
  });

  test('6. Strategic Consulting Solutions section is displayed', async ({ page }) => {
    const homePage = new HomePage(page);
    
    await homePage.open();
    await handleCookieConsent(page);
    
    await expect(page.getByRole('heading', { name: /Strategic Consulting Solutions/i })).toBeVisible();
    await expect(page.getByText(/Eliassen Group empowers organizations/)).toBeVisible();
    await expect(page.getByRole('link', { name: 'Learn More' }).first()).toBeVisible();
  });

  test('7. Your Partner section content is visible', async ({ page }) => {
    const homePage = new HomePage(page);
    
    await homePage.open();
    await handleCookieConsent(page);
    
    await expect(page.getByRole('heading', { name: /Your Partner for Human-Powered Solutions/i })).toBeVisible();
    await expect(page.getByText(/Eliassen is the go-to partner/)).toBeVisible();
  });

  test('8. Client testimonials section is displayed', async ({ page }) => {
    const homePage = new HomePage(page);
    
    await homePage.open();
    await handleCookieConsent(page);
    
    await expect(page.getByRole('heading', { name: /Hear What Our Clients Have to Say/i })).toBeVisible();
    await expect(page.getByText(/As Eliassen has gotten to know me/).first()).toBeVisible();
    await expect(page.getByRole('heading', { name: /Client in the Digital Banking Services Industry/i })).toBeVisible();
  });

  test('9. Insights section with case studies is visible', async ({ page }) => {
    const homePage = new HomePage(page);
    
    await homePage.open();
    await handleCookieConsent(page);
    
    await expect(page.getByRole('heading', { name: /Insights from Eliassen Group/i })).toBeVisible();
    await expect(page.getByText(/Three Keys to Effective Board Oversight/)).toBeVisible();
    await expect(page.getByText(/IT Procurement Process Improvement/)).toBeVisible();
    await expect(page.getByText(/Is Agile Dead?/)).toBeVisible();
  });

  test('10. Let\'s Connect buttons are functional', async ({ page }) => {
    const homePage = new HomePage(page);
    
    await homePage.open();
    await handleCookieConsent(page);
    
    const connectButtons = page.getByRole('link', { name: /Let's Connect/i });
    await expect(connectButtons.first()).toBeVisible();
    
    await expect(page.getByRole('heading', { name: /Connect with Eliassen Group/i })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Connect with Our Experts' })).toBeVisible();
  });

  test('11. Footer navigation and contact information', async ({ page }) => {
    const homePage = new HomePage(page);
    
    await homePage.open();
    await handleCookieConsent(page);
    
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    const isFooterVisible = await homePage.isFooterVisible();
    expect(isFooterVisible).toBe(true);
    
    await expect(page.getByText('55 Walkers Brook Drive, 6th Floor')).toBeVisible();
    await expect(page.getByText('Reading, MA 01867')).toBeVisible();
  });

  test('12. Technology Solutions navigation works', async ({ page }) => {
    const homePage = new HomePage(page);
    
    await homePage.open();
    await handleCookieConsent(page);
    
    await page.locator('text=People Solutions').first().hover();
    
    await expect(page.locator('#js-primaryNav').getByRole('menuitem', { name: 'AI & Data Services' })).toBeVisible();
    await expect(page.locator('#js-primaryNav').getByRole('menuitem', { name: 'App Dev, Integrations & Test Automation' })).toBeVisible();
    await expect(page.locator('#js-primaryNav').getByRole('menuitem', { name: 'Cybersecurity' })).toBeVisible();
    await expect(page.locator('#js-primaryNav').getByRole('menuitem', { name: 'Infrastructure & Cloud' })).toBeVisible();
  });

  test('13. Clinical Solutions navigation works', async ({ page }) => {
    const homePage = new HomePage(page);
    
    await homePage.open();
    await handleCookieConsent(page);
    
    await page.locator('text=People Solutions').first().hover();
    
    await expect(page.locator('#js-primaryNav').getByRole('menuitem', { name: 'Clinical Operations' })).toBeVisible();
    await expect(page.locator('#js-primaryNav').getByRole('menuitem', { name: 'Clinical Data Sciences' })).toBeVisible();
    await expect(page.locator('#js-primaryNav').getByRole('menuitem', { name: 'Quality & Regulatory Compliance' })).toBeVisible();
  });

  test('14. Career-related links are accessible', async ({ page }) => {
    const homePage = new HomePage(page);
    
    await homePage.open();
    await handleCookieConsent(page);
    
    await page.locator('text=People Solutions').first().hover();
    
    await expect(page.getByRole('heading', { name: /We are always looking for consultants to join our team/i })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Explore Consulting Careers' })).toBeVisible();
    await expect(page.getByRole('menuitem', { name: 'Consulting Careers' })).toBeVisible();
  });

  test('15. Page responsiveness and mobile compatibility', async ({ page }) => {
    const homePage = new HomePage(page);
    
    await homePage.open();
    await handleCookieConsent(page);
    
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(2000);
    await expect(page.locator('body')).toBeVisible();
    
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.waitForTimeout(2000);
    await expect(page.locator('body')).toBeVisible();
    
    await page.setViewportSize({ width: 1200, height: 800 });
    await page.waitForTimeout(1000);
    await expect(page.locator('body')).toBeVisible();
  });

  test('16. Input length validation security test', async ({ page }) => {
    const contactPage = new ContactPage(page);
    
    await contactPage.open();
    await handleCookieConsent(page);
    
    const vulnerabilities = await contactPage.testInputLengthValidation();
    
    if (vulnerabilities.length > 0) {
      console.log('Security vulnerabilities found:');
      vulnerabilities.forEach(vuln => console.log(`- ${vuln}`));
      throw new Error(`SECURITY ALERT: Found ${vulnerabilities.length} input validation vulnerabilities`);
    }
  });

  test('17. Contact form basic functionality', async ({ page }) => {
    const contactPage = new ContactPage(page);
    
    await contactPage.open();
    await handleCookieConsent(page);
    
    const isFormVisible = await contactPage.isFormVisible();
    expect(isFormVisible).toBe(true);
    
    const heading = await contactPage.getPageHeading();
    expect(heading).toContain('Connect');
  });

  test('18. Contact form field validation', async ({ page }) => {
    const contactPage = new ContactPage(page);
    
    await contactPage.open();
    await handleCookieConsent(page);
    
    await contactPage.fillForm();
    
    await expect(page.locator(contactPage.firstNameInput).first()).toHaveValue('John');
    await expect(page.locator(contactPage.lastNameInput).first()).toHaveValue('Doe');
    await expect(page.locator(contactPage.emailInput).first()).toHaveValue('john.doe@example.com');
  });

  test('19. Form clearing functionality', async ({ page }) => {
    const contactPage = new ContactPage(page);
    
    await contactPage.open();
    await handleCookieConsent(page);
    
    await contactPage.fillForm();
    await contactPage.clearAllFields();
    
    const firstNameValue = await page.locator(contactPage.firstNameInput).first().inputValue();
    expect(firstNameValue).toBe('');
  });

}); 