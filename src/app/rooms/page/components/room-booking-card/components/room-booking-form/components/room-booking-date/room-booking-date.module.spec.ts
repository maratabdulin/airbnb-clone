import { TestBed } from "@angular/core/testing";
import { RoomBookingDateModule } from "src/app/rooms/page/components/room-booking-card/components/room-booking-form/components/room-booking-date/room-booking-date.module";

describe("RoomBookingDateMoudle", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomBookingDateModule],
    }).compileComponents();
  });

  it("should create", () => {
    expect(RoomBookingDateModule).toBeTruthy();
  });
});
