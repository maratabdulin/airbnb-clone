import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { filter } from "rxjs/operators";
import { FormGroup } from "@angular/forms";
import { Subject, take, takeUntil, tap } from "rxjs";
import { MatDialog } from "@angular/material/dialog";

import { RoomExtended } from "@app/rooms/manager";
import { BookingService } from "@app/booking/service";
import { BookingField } from "@app/booking/common";

import { getRoomBookingForm } from "./room-booking.form";
import { RoomBookingDialogComponent } from "../room-booking-dialog/room-booking-dialog.component";

@Component({
  selector: "app-room-booking-form",
  templateUrl: "./room-booking-form.component.html",
  styleUrls: ["./room-booking-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomBookingFormComponent implements OnInit, OnDestroy {
  @Input() room!: RoomExtended;
  form!: FormGroup;
  BookingField = BookingField;
  showError = false;
  private readonly destroy$ = new Subject<void>();
  private edited = false;
  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly bookingService: BookingService,
    private readonly matDialog: MatDialog,
  ) {}

  ngOnInit() {
    this.form = getRoomBookingForm();
    this.form.valueChanges
      .pipe(
        filter(() => this.form.valid),
        tap(() => {
          this.showError = false;
          this.edited = true;
          this.bookingService.setBookingDetails(this.form.value);
          this.changeDetectorRef.markForCheck();
        }),
        takeUntil(this.destroy$),
      )
      .subscribe();

    this.bookingService.bookingDetails$
      .pipe(
        tap((bookingDetails) => {
          if (!this.edited) {
            // @ts-ignore
            const details = { ...bookingDetails };
            if (bookingDetails[BookingField.GUESTS] > this.room.guests) {
              details[BookingField.GUESTS] = this.room.guests;
            }
            this.form.patchValue(details, { emitEvent: false });
            this.changeDetectorRef.markForCheck();
          }
        }),
        take(1),
        takeUntil(this.destroy$),
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onBooking() {
    if (this.form.valid) {
      this.matDialog.open(RoomBookingDialogComponent);
    } else {
      this.showError = true;
    }
    this.changeDetectorRef.markForCheck();
  }
}
