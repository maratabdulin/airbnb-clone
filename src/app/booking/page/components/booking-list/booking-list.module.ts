import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { BookingListComponent } from "./booking-list.component";
import { BookingPortletModule } from "../booking-portlet/booking-portlet.module";

@NgModule({
  imports: [CommonModule, RouterModule, BookingPortletModule],
  declarations: [BookingListComponent],
  exports: [BookingListComponent],
})
export class BookingListModule {}
