import { DebugElement } from "@angular/core";

import { PageObject } from "@app/core/testing";

import { WrapperComponent } from "./room-booking-guest.component.spec";

enum RoomBookingGuestAutomation {
  RoomBookingGuestsLabel = "room-booking-guests-label",
  RoomBookingGuestsValue = "room-booking-guests-value",
}

export class RoomBookingGuestComponentPo extends PageObject<WrapperComponent> {
  get roomBookingGuestsLabelText(): string | null {
    return this.text(RoomBookingGuestAutomation.RoomBookingGuestsLabel);
  }

  get roomBookingGuestValue(): DebugElement | null {
    return this.getByAutomationId(
      RoomBookingGuestAutomation.RoomBookingGuestsValue,
    );
  }
}
