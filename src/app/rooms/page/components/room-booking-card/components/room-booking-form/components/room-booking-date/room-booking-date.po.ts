import { PageObject } from "@app/core/testing";
import { WrapperComponent } from "src/app/rooms/page/components/room-booking-card/components/room-booking-form/components/room-booking-date/room-booking-date.component.spec";
import { DebugElement } from "@angular/core";

enum RoomBookingDateAutomation {
  RoomBookingDateLabel = "room-booking-date-label",
  RoomBookingDateRange = "room-booking-date-range",
  RoomBookingDateStart = "room-booking-date-start",
  RoomBookingDateEnd = "room-booking-date-end",
  RoomBookingDatepickerToggle = "room-booking-datepicker-toggle",
  RoomBookingRangePicker = "room-booking-range-picker",
}

export class RoomBookingDateComponentPo extends PageObject<WrapperComponent> {
  get roomBookingDateLabelText(): string | null {
    return this.text(RoomBookingDateAutomation.RoomBookingDateLabel);
  }

  get roomBookingDateRange(): DebugElement | null {
    return this.getByAutomationId(
      RoomBookingDateAutomation.RoomBookingDateRange,
    );
  }

  get roomBookingDateStart(): DebugElement | null {
    return this.getByAutomationId(
      RoomBookingDateAutomation.RoomBookingDateStart,
    );
  }

  get roomBookingDateEnd(): DebugElement | null {
    return this.getByAutomationId(RoomBookingDateAutomation.RoomBookingDateEnd);
  }

  get roomBookingDatepickerToggle(): DebugElement | null {
    return this.getByAutomationId(
      RoomBookingDateAutomation.RoomBookingDatepickerToggle,
    );
  }

  get roomBookingRangePicker(): DebugElement | null {
    return this.getByAutomationId(
      RoomBookingDateAutomation.RoomBookingRangePicker,
    );
  }
}
