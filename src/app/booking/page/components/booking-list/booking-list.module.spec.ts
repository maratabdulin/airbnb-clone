import { TestBed } from "@angular/core/testing";

import { BookingListModule } from "./booking-list.module";

describe("BookingLIstModule", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingListModule],
    }).compileComponents();
  });

  it("should create", () => {
    expect(BookingListModule).toBeTruthy();
  });
});
