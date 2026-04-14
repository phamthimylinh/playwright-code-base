import { test as base } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { BookingPage } from '../src/pages/BookingPage';
import { ApiClient } from '../src/api/ApiClient';

type TestFixtures = {
  loginPage: LoginPage;
  bookingPage: BookingPage;
  apiClient: ApiClient;
};

export const test = base.extend<TestFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  bookingPage: async ({ page }, use) => {
    await use(new BookingPage(page));
  },

  // Provide an API client that wraps Playwright's request context
  apiClient: async ({ request }, use) => {
    await use(new ApiClient(request));
  },
});

export { expect } from '@playwright/test';
