import type { APIRequestContext, APIResponse } from '@playwright/test';

export class ApiClient {
  private readonly request: APIRequestContext;
  private readonly base: string;

  constructor(request: APIRequestContext) {
    this.request = request;
    // ensure BASE_URL has no trailing slash for consistent concatenation
    this.base = (process.env.BASE_URL ?? '').replace(/\/$/, '');
  }

  async createUser(payload: Record<string, any>): Promise<APIResponse> {
    const url = `${this.base}/api/users`;
    return this.request.post(url, { data: payload });
  }

  async createBooking(payload: Record<string, any>): Promise<APIResponse> {
    const url = `${this.base}/api/bookings`;
    return this.request.post(url, { data: payload });
  }

  async deleteBooking(id: string): Promise<APIResponse> {
    const url = `${this.base}/api/bookings/${id}`;
    return this.request.delete(url);
  }
}
