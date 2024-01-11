import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { MatDialogModule } from "@angular/material/dialog";

import { RoomBookingDialogComponentPo } from "./room-booking-dialog.po";
import { RoomBookingDialogComponent } from "./room-booking-dialog.component";

describe("RoomBookingComponent", () => {
  let pageObject: RoomBookingDialogComponentPo;
  let fixture: ComponentFixture<RoomBookingDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [RoomBookingDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomBookingDialogComponent);
    pageObject = new RoomBookingDialogComponentPo(fixture);
  });

  it("should create", () => {
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it("should show dialog", () => {
    fixture.detectChanges();
    expect(pageObject.roomBookingTitleText).toBe("Booking confirmation");
    expect(pageObject.roomBookingContentText).toBe(
      "There should be logic here with booking the selected option.",
    );
    expect(pageObject.roomBookingCloseText).toBe("Close");
  });
});
