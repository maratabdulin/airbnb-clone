import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CarouselDotsComponent } from "./carousel-dots.component";

@NgModule({
  imports: [CommonModule],
  declarations: [CarouselDotsComponent],
  exports: [CarouselDotsComponent],
})
export class CarouselDotsModule {}
