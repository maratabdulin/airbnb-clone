import { BOOKING_DETAILS_STUB } from "@app/booking/state";
import { ROOM_EXTENDED_STUB } from "@app/rooms/manager";

import { RoomBookingPriceService } from "./room-booking-price.service";

describe("RoomBookingPriceService", () => {
  let service: RoomBookingPriceService;

  beforeEach(() => {
    service = new RoomBookingPriceService();
  });

  it("should create", () => {
    expect(service).toBeTruthy();
  });

  it("should calc for 1 day with minimal", () => {
    expect(
      service.calculate({
        roomExtended: { price: 1 } as any,
        bookingDetails: BOOKING_DETAILS_STUB,
      }),
    ).toEqual({
      cleaning: 0.1,
      days: 1,
      fee: 0.15,
      rent: 1,
      total: 1.25,
    });
  });

  it("should calc for 1 day normal", () => {
    expect(
      service.calculate({
        roomExtended: ROOM_EXTENDED_STUB,
        bookingDetails: BOOKING_DETAILS_STUB,
      }),
    ).toEqual({
      cleaning: 230,
      days: 1,
      fee: 345,
      rent: 2300,
      total: 2875,
    });
  });
});
