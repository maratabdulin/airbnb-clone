import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CarouselModule } from "@app/ui/carousel";
import { BookingSharedModule } from "@app/booking/shared";

import { BookingCardComponent } from "./booking-card.component";

@NgModule({
  imports: [CommonModule, CarouselModule, BookingSharedModule],
  declarations: [BookingCardComponent],
  exports: [BookingCardComponent],
})
export class BookingCardModule {}
