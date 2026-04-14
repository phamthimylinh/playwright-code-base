import { test, expect } from '../playwright-fixtures';

test.describe('API seed helpers', () => {
  test('should create and delete a booking via API', async ({ apiClient }) => {
    const timestamp = Date.now();
    const payload = {
      hotelId: 'hotel-sample',
      roomId: `room-${timestamp}`,
      guestName: `API Guest ${timestamp}`,
      guestEmail: `api+${timestamp}@example.com`,
      checkIn: '2026-04-15',
      checkOut: '2026-04-16',
    };

    const createRes = await apiClient.createBooking(payload);
    expect(createRes.ok()).toBeTruthy();
    const body = await createRes.json();
    expect(body).toHaveProperty('id');

    // cleanup
    const id = body.id as string;
    const del = await apiClient.deleteBooking(id);
    expect(del.ok()).toBeTruthy();
  });
});
