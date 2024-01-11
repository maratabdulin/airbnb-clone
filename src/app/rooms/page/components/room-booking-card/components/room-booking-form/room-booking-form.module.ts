import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatDialogModule } from "@angular/material/dialog";

import { FormsSharedModule } from "@app/core/forms/shared";

import { RoomBookingGuestModule } from "./components/room-booking-guest/room-booking-guest.module";
import { RoomBookingDateModule } from "./components/room-booking-date/room-booking-date.module";
import { RoomBookingDialogModule } from "../room-booking-dialog/room-booking-dialog.module";
import { RoomBookingFormComponent } from "./room-booking-form.component";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    FormsSharedModule,
    ReactiveFormsModule,
    RoomBookingGuestModule,
    RoomBookingDateModule,
    RoomBookingDialogModule,
  ],
  declarations: [RoomBookingFormComponent],
  exports: [RoomBookingFormComponent],
})
export class RoomBookingFormModule {}
