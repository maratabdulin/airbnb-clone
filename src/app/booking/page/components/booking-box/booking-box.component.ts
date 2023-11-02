import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { BookingVariant } from "@app/booking/common";
import { BookingService } from "@app/booking/service";
import { NavigationPath } from "@app/core/navigation/common";
import { NavigationService } from "@app/core/navigation/service";

@Component({
  selector: "app-booking-box",
  templateUrl: "booking-box.component.html",
  styleUrls: ["booking-box.component.scss"],
})
export class BookingBoxComponent implements OnInit {
  bookingVariant$!: Observable<BookingVariant>;

  constructor(
    private readonly bookingService: BookingService,
    private readonly navigationService: NavigationService,
  ) {}

  ngOnInit() {
    this.bookingVariant$ = this.bookingService.bookingVariant$;
  }

  onClick(bookingVariant: BookingVariant) {
    if (bookingVariant.firstRoom?.id) {
      void this.navigationService.navigateByUrl(NavigationPath.ROOM_PAGE, {
        id: bookingVariant.firstRoom?.id,
      });
    }
  }
}
