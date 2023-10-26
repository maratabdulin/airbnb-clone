import { NgModule } from "@angular/core";

import { BookingVariantImagesPipe } from "./booking-variant-images.pipe";
import { BookingVariantFirstImagePipe } from "./booking-variant-first-image.pipe";

const pipes = [BookingVariantImagesPipe, BookingVariantFirstImagePipe];

@NgModule({
  declarations: [...pipes],
  exports: [...pipes],
})
export class BookingSharedModule {}
