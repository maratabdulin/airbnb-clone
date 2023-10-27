import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { BookingVariant } from "@app/booking/common";
import { BookingService } from "@app/booking/service";
import { NavigationService } from "@app/core/navigation/service";
import { NavigationPath } from "@app/core/navigation/common";

@Component({
  selector: "app-booking-card",
  templateUrl: "booking-card.component.html",
  styleUrls: ["booking-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingCardComponent implements OnInit {
  bookingVariant$!: Observable<BookingVariant>;

  constructor(
    private readonly bookingService: BookingService,
    private readonly navigationService: NavigationService,
  ) {}

  ngOnInit() {
    this.bookingVariant$ = this.bookingService.bookingVariant$;
  }

  onSelected(bookingVariant: BookingVariant) {
    if (bookingVariant.firstRoom?.id) {
      this.navigationService.navigateByUrl(NavigationPath.ROOM_PAGE, {
        id: bookingVariant.firstRoom.id,
      });
    }
  }
}
