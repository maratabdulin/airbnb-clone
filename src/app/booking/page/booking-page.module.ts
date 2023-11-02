import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from "@angular/common";

import { GridModule } from "@app/ui/grid";
import { BookingServiceModule } from "@app/booking/service";
import { BookingStateModule } from "@app/booking/state";
import { ContainerModule } from "@app/ui/container";

import { AppCommonModule } from "../../app-common.module";
import { BookingPageComponent } from "./booking-page.component";
import { BookingPageRoutingModule } from "./booking-page-routing.module";
import { BookingListModule } from "./components/booking-list/booking-list.module";
import { BookingMapModule } from "./components/booking-map/booking-map.module";
import { BookingCardModule } from "./components/booking-card/booking-card.module";
import { BookingBoxModule } from "./components/booking-box/booking-box.module";

@NgModule({
  declarations: [BookingPageComponent],
  imports: [
    CommonModule,
    BookingServiceModule,
    BookingStateModule,
    ContainerModule,
    BookingPageRoutingModule,
    AppCommonModule,
    GridModule,
    BookingListModule,
    BookingMapModule,
    BookingCardModule,
    MatButtonModule,
    MatIconModule,
    BookingBoxModule,
  ],
})
export class BookingPageModule {}
