# Playwright Test Suite

This project uses [Playwright](https://playwright.dev/) with TypeScript and the Page Object Model (POM) pattern.

## Project Structure

```
├── tests/
│   └── hdbrite/
│       ├── login.spec.ts     # Login scenarios for hdbrite
│       └── pages/            # Page Object Model classes
│           ├── LoginPage.ts  # Login page object
│           ├── DashboardPage.ts # Dashboard page object
│           └── index.ts      # Barrel file for page objects
├── .gitignore
├── README.md
├── package.json
├── playwright.config.ts
└── ...
```

## Scenarios Covered
- **hdbrite**: Valid login and invalid login (error message)

## How to Run

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Set environment variables (optional):**
   - Create a `.env` file using `.env.example` as a template, or update `cypress.env.example.json` and export as environment variables.
   - Required keys: `HDBRITE_BASE_URL`, `HDBRITE_LOGIN_PATH`, `HDBRITE_VALID_USER`, `HDBRITE_VALID_PASSWORD`.
3. **Run tests:**
   ```bash
   npx playwright test
   ```
4. **View HTML report:**
   ```bash
   npx playwright show-report
   ```

## Credentials
- For hdbrite tests, set environment variables or create a `cypress.env.json` using `cypress.env.example.json` as a template:
  ```json
  {
    "HDBRITE_BASE_URL": "https://dev.hdbrite.com",
    "HDBRITE_LOGIN_PATH": "/login",
    "HDBRITE_VALID_USER": "<email>",
    "HDBRITE_VALID_PASSWORD": "<password>",
    "HDBRITE_LOCKED_USER": "<optional>",
    "HDBRITE_LOCKED_PASSWORD": "<optional>"
  }
  ```

## Page Object Model (POM)
- hdbrite POMs live under `tests/hdbrite/pages/`

## CI/CD
- Suggested GitHub Actions workflow (save as `.github/workflows/playwright.yml`):
  ```yaml
  name: Playwright
  on: [push, pull_request]
  jobs:
    test:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v4
        - uses: actions/setup-node@v4
          with:
            node-version: 20
        - run: npm ci
        - run: npx playwright install --with-deps
        - run: npx playwright test
          env:
            HDBRITE_BASE_URL: ${{ secrets.HDBRITE_BASE_URL }}
            HDBRITE_LOGIN_PATH: ${{ secrets.HDBRITE_LOGIN_PATH }}
            HDBRITE_VALID_USER: ${{ secrets.HDBRITE_VALID_USER }}
            HDBRITE_VALID_PASSWORD: ${{ secrets.HDBRITE_VALID_PASSWORD }}
            HDBRITE_LOCKED_USER: ${{ secrets.HDBRITE_LOCKED_USER }}
            HDBRITE_LOCKED_PASSWORD: ${{ secrets.HDBRITE_LOCKED_PASSWORD }}
  ```

---

**Note:** This project is for demonstration and learning purposes.
