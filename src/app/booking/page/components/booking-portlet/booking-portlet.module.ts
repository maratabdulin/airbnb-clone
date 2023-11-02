import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";

import { CarouselModule } from "@app/ui/carousel";
import { BookingSharedModule } from "@app/booking/shared";
import { NavigationSharedModule } from "@app/core/navigation/shared";
import { GridModule } from "@app/ui/grid";

import { BookingPortletComponent } from "./booking-portlet.component";

@NgModule({
  imports: [
    CommonModule,
    CarouselModule,
    BookingSharedModule,
    MatButtonModule,
    RouterModule,
    NavigationSharedModule,
    GridModule,
  ],
  declarations: [BookingPortletComponent],
  exports: [BookingPortletComponent],
})
export class BookingPortletModule {}
