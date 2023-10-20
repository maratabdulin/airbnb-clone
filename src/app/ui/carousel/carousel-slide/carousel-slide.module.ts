import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "@app/ui/shared";

import { CarouselSlideComponent } from "./carousel-slide.component";

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [CarouselSlideComponent],
  exports: [CarouselSlideComponent],
})
export class CarouselSlideModule {}
