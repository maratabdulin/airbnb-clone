import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

import { NavigationService } from "@app/core/navigation/service";
import { NavigationPath } from "@app/core/navigation/common";
import { BookingVariant } from "@app/booking/common";

@Component({
  selector: "app-booking-portlet",
  templateUrl: "booking-portlet.component.html",
  styleUrls: ["booking-portlet.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingPortletComponent {
  @Input() bookingVariant!: BookingVariant;

  NavigationPath = NavigationPath;
  constructor(private readonly navigationService: NavigationService) {}

  onSelected() {
    if (this.bookingVariant?.firstRoom?.id) {
      void this.navigationService.navigateByUrl(NavigationPath.ROOM_PAGE, {
        id: this.bookingVariant.firstRoom?.id,
      });
    }
  }
}
