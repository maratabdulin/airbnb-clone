import { TestBed } from "@angular/core/testing";

import { BookingSharedModule } from "./booking-shared.module";

describe("BookingSharedModule", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingSharedModule],
    }).compileComponents();
  });

  it("should create", () => {
    expect(BookingSharedModule).toBeTruthy();
  });
});
