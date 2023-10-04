import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { RoomStateModule } from "@app/rooms/state";
import { RoomServiceModule } from "@app/rooms/service";

import { BookingPageComponent } from "./booking-page.component";
import { BookingPageRoutingModule } from "./booking-page-routing.module";

@NgModule({
  declarations: [BookingPageComponent],
  imports: [
    CommonModule,
    BookingPageRoutingModule,
    RoomStateModule,
    RoomServiceModule,
  ],
})
export class BookingPageModule {}
