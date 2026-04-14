import { test, expect } from './playwright-fixtures';
import { sampleUser } from '../src/utils/testData';

test.describe('Hotel booking flow (example)', () => {
  test('should allow a user to login and book a room', async ({ loginPage, bookingPage }) => {
    // Use environment variables for credentials when available
    const email = process.env.TEST_USER_EMAIL ?? 'testuser@example.com';
    const password = process.env.TEST_USER_PASSWORD ?? 'Password123!';

    // Login
    await loginPage.goto();
    await loginPage.login(email, password);

    // Go to booking section and perform a booking
    await bookingPage.goto();
    await bookingPage.searchHotel('Hanoi');
    await bookingPage.selectFirstRoom();

    const user = sampleUser();
    await bookingPage.fillGuestDetails(user.name, user.email);
    await bookingPage.confirmBooking();

    const confirmation = await bookingPage.getConfirmationText();
    expect(confirmation).toBeTruthy();
    // Optionally check for specific text if the app returns it
    // expect(confirmation).toContain('Booking confirmed');
  });
});
