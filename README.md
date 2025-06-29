# Playwright Test Framework - Eliassen Group Website

## 🎯 Overview

This is a **Playwright test framework built from scratch** demonstrating professional test automation practices using the **Page Object Model (POM)** design pattern. The framework was developed to test the Eliassen Group website and successfully discovered critical security vulnerabilities through systematic testing.

## 🏗️ Architecture - Page Object Model (POM)

The framework follows the **Page Object Model** design pattern for maintainable and scalable test automation:

```
eliassen-qa/
├── pages/                    # Page Object classes
│   ├── BasePage.js          # Base class with common functionality
│   ├── HomePage.js          # Homepage interactions & navigation
│   └── ContactPage.js       # Contact form & security testing
├── tests/                   # Test specifications
│   └── eliassen-website.spec.js
└── playwright.config.js     # Playwright configuration
```



## 🚨 Security Vulnerabilities Discovered

During comprehensive testing, **critical security vulnerabilities** were identified and **reported to the security team** for immediate remediation:

### 🔓 Input Length Validation Vulnerabilities
**Status:** ❌ **CRITICAL SECURITY ISSUE FOUND**

```bash
Security vulnerabilities found:
- Company Name field accepts very long input
- First Name field accepts very long input  
- Last Name field accepts very long input
```

**Impact:**
- **Database Overflow:** Risk of data truncation and database errors
- **UI Breaking:** Extremely long text can break page layout
- **DoS Attacks:** Potential resource exhaustion through large inputs
- **Performance Issues:** Degradation during data processing

**Recommendations:**
- Implement HTML `maxlength` attributes on all input fields
- Add server-side input length validation
- Set reasonable field length limits (50-255 chars for names/titles)
- Consider rate limiting for form submissions



## 🧪 Test Suite Structure

### 📊 Test Coverage (19 Comprehensive Tests)

**Functional Tests (17):**
- ✅ Page load and title verification
- ✅ Navigation menu functionality
- ✅ Dropdown navigation testing
- ✅ Content section visibility
- ✅ Footer information verification
- ✅ Responsive design testing
- ✅ Contact form functionality

**Security Tests (2):**
- 🚨 Input length validation testing
- 🧹 Form clearing functionality

### 🎯 Security-First Testing Approach

**Critical Feature:** Security tests **FAIL when vulnerabilities are found**, preventing vulnerable code from reaching production:

```javascript
test('16. Input length validation security test', async ({ page }) => {
  const contactPage = new ContactPage(page);
  await contactPage.open();
  
  const vulnerabilities = await contactPage.testInputLengthValidation();
  
  if (vulnerabilities.length > 0) {
    console.log('Security vulnerabilities found:');
    vulnerabilities.forEach(vuln => console.log(`- ${vuln}`));
    throw new Error(`SECURITY ALERT: Found ${vulnerabilities.length} input validation vulnerabilities`);
  }
});
```

## 🚀 Getting Started

### Prerequisites
```bash
npm install @playwright/test
```

### Running Tests

**All Tests:**
```bash
npx playwright test
```

**Security Tests Only:**
```bash
npx playwright test --grep "security"
```

**Specific Test:**
```bash
npx playwright test --grep "Input length validation"
```

**With UI Mode:**
```bash
npx playwright test --ui
```

## 📈 Key Features & Benefits

### ✨ Professional Architecture
- **Page Object Model:** Maintainable and scalable test structure
- **Inheritance:** BasePage provides common functionality
- **Encapsulation:** Page-specific logic contained in respective classes
- **Reusability:** Page objects can be used across multiple test files

### 🔒 Security-Focused Testing
- **Proactive Security:** Tests actively search for vulnerabilities
- **CI/CD Protection:** Security failures block deployments
- **Input Validation Testing:** Comprehensive length validation testing
- **Professional Reporting:** Clear vulnerability documentation

### 🎯 Code Quality
- **Simple & Clean:** Easy to understand for junior developers
- **No Complex Logic:** Straightforward, readable code
- **Minimal Dependencies:** Built with core Playwright functionality
- **Professional Structure:** Industry-standard patterns and practices

## 📊 Test Results Summary

```bash
Running 57 tests using 5 workers

✅ 54 Tests Passed  - All functional tests working
🚨 3 Tests Failed   - Security vulnerabilities detected (EXPECTED)

Security Issues Found:
- 3 Input Length Validation vulnerabilities
- Form fields accept 1000+ character inputs without restriction
- No maxlength attributes implemented
```

## 🛠️ Framework Advantages

1. **Built from Scratch:** Custom framework tailored for specific needs
2. **POM Architecture:** Professional, maintainable test structure  
3. **Security Discovery:** Successfully identified real vulnerabilities
4. **Scalable Design:** Easy to extend with new pages and tests
5. **CI/CD Ready:** Proper test failures prevent vulnerable deployments

## 📞 Contact & Support

This framework demonstrates professional test automation capabilities and security-focused testing approaches. The discovered vulnerabilities highlight the importance of comprehensive security testing in web applications.

---

**Framework developed by:** Alex Hradinaru  
**Pattern:** Page Object Model (POM)  
**Tool:** Playwright  
**Focus:** Security & Functional Testing 