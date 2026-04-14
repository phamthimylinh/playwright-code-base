# Playwright automation framework (starter)

This repository contains a small, reusable Playwright + TypeScript automation test framework scaffold.

What's included
- `playwright.config.ts` — base Playwright config (already present)
- `tsconfig.json` — TypeScript configuration for tests and page objects
- `src/pages` — Page Object Model classes (BasePage, LoginPage)
- `src/utils` — small utilities (test data generator)
- `tests/playwright-fixtures.ts` — shared fixtures that inject page objects into tests
- `tests/example.spec.ts` — basic Playwright smoke examples
- `.env.example` — example env vars

Getting started
1. Install dependencies:

```bash
npm install
npx playwright install
```

2. Copy `.env.example` to `.env` and update `BASE_URL` and credentials.

3. Run tests:

```bash
npm test
```

Helpful tips
- Keep selectors in page objects; avoid using them directly in tests.
- Use `tests/playwright-fixtures.ts` to add more fixtures (e.g., API helpers, DB cleanup).
- Add test tags and projects in `playwright.config.ts` for CI matrix runs.
