import { Component } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule } from "@angular/material/input";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";

import { BookingField } from "@app/booking/common";

import { RoomBookingDateComponentPo } from "./room-booking-date.po";
import { RoomBookingDateComponent } from "./room-booking-date.component";

@Component({
  template: `<app-room-booking-date
    [control]="control"
  ></app-room-booking-date>`,
})
export class WrapperComponent {
  control = new FormGroup({
    [BookingField.PERIOD_START]: new FormControl(null, [Validators.required]),
    [BookingField.PERIOD_END]: new FormControl(null, [Validators.required]),
  });
}

describe("RoomBookingDateComponent", () => {
  let pageObject: RoomBookingDateComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MatInputModule,
        MatNativeDateModule,
        MatDatepickerModule,
        ReactiveFormsModule,
      ],
      declarations: [RoomBookingDateComponent, WrapperComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new RoomBookingDateComponentPo(fixtureWrapper);
  });

  it("should create", () => {
    fixtureWrapper.detectChanges();
    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it("should show control", () => {
    fixtureWrapper.detectChanges();
    expect(pageObject.roomBookingDateLabelText).toBeTruthy();
    expect(pageObject.roomBookingDateRange).toBeTruthy();
    expect(pageObject.roomBookingDateEnd).toBeTruthy();
    expect(pageObject.roomBookingDateStart).toBeTruthy();
    expect(pageObject.roomBookingDatepickerToggle).toBeTruthy();
    expect(pageObject.roomBookingRangePicker).toBeTruthy();
  });
});
