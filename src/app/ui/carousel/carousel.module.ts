import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CarouselSlideModule } from "./carousel-slide/carousel-slide.module";
import { CarouselNavsModule } from "./carousel-navs/carousel-navs.module";
import { CarouselDotsModule } from "./carousel-dots/carousel-dots.module";
import { CarouselComponent } from "./carousel.component";

@NgModule({
  imports: [
    CommonModule,
    CarouselSlideModule,
    CarouselNavsModule,
    CarouselDotsModule,
  ],
  declarations: [CarouselComponent],
  exports: [CarouselComponent],
})
export class CarouselModule {}
