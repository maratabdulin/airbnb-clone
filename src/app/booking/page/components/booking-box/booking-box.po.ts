import { PageObject } from "@app/core/testing";
import { BookingBoxComponent } from "./booking-box.component";

enum BookingBoxAutomation {
  BookingBox = "booking-box",
  BookingBoxImage = "booking-box-image",
  BookingBoxDescription = "booking-box-description",
}

export class BookingBoxComponentPo extends PageObject<BookingBoxComponent> {
  get bookingBoxImagesStyles(): Record<string, any> | null {
    return (
      this.getByAutomationId(BookingBoxAutomation.BookingBoxImage)?.styles ??
      null
    );
  }

  get bookingBoxDescription(): string | null {
    return this.text(BookingBoxAutomation.BookingBoxDescription);
  }

  triggerBookingBox() {
    this.triggerEventHandler(BookingBoxAutomation.BookingBox, "click");
  }
}
