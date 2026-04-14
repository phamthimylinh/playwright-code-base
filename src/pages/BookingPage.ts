import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class BookingPage extends BasePage {
  readonly searchInput = 'input[name="search"]';
  readonly searchButton = 'button[data-test="search"]';
  readonly roomSelect = 'button[data-test^="select-room-"]';
  readonly guestNameInput = 'input[name="guestName"]';
  readonly guestEmailInput = 'input[name="guestEmail"]';
  readonly bookButton = 'button[data-test="book"]';
  readonly confirmationBanner = '[data-test="booking-confirmation"]';

  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await super.goto('/booking');
  }

  async searchHotel(query: string) {
    await this.page.fill(this.searchInput, query);
    await Promise.all([
      this.page.waitForResponse((r) => r.url().includes('/api/search') && r.status() === 200),
      this.page.click(this.searchButton),
    ]);
  }

  async selectFirstRoom() {
    await this.page.click(this.roomSelect);
  }

  async fillGuestDetails(name: string, email: string) {
    await this.page.fill(this.guestNameInput, name);
    await this.page.fill(this.guestEmailInput, email);
  }

  async confirmBooking() {
    await Promise.all([
      this.page.waitForResponse((r) => r.url().includes('/api/book') && r.status() === 201),
      this.page.click(this.bookButton),
    ]);
  }

  async getConfirmationText() {
    return this.page.textContent(this.confirmationBanner);
  }
}
