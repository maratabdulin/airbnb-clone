import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { Observable, Subject, tap } from "rxjs";

import { BookingDetails, BookingPrice } from "@app/booking/common";
import { RoomExtended } from "@app/rooms/manager";
import { NumeralType } from "@app/core/numerals/common";
import { BookingService } from "@app/booking/service";

import { RoomBookingPriceService } from "./room-booking-price.service";

@Component({
  selector: "app-room-booking-price",
  templateUrl: "room-booking-price.component.html",
  styleUrls: ["room-booking-price.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomBookingPriceComponent implements OnInit, OnDestroy {
  @Input() room!: RoomExtended;

  NumeralType = NumeralType;

  bookingDetails$!: Observable<BookingDetails>;
  bookingPrice!: BookingPrice;

  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly bookingService: BookingService,
    private readonly roomBookingPriceService: RoomBookingPriceService,
  ) {}

  ngOnInit() {
    this.bookingDetails$ = this.bookingService.bookingDetails$.pipe(
      tap((bookingDetails) => {
        this.bookingPrice = this.roomBookingPriceService.calculate({
          bookingDetails,
          roomExtended: this.room,
        });
      }),
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
