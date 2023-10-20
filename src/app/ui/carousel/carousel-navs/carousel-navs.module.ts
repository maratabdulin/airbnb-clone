import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

import { CarouselNavsComponent } from "./carousel-navs.component";

@NgModule({
  imports: [CommonModule, MatIconModule, MatButtonModule],
  declarations: [CarouselNavsComponent],
  exports: [CarouselNavsComponent],
})
export class CarouselNavsModule {}
