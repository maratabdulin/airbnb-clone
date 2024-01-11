import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RoomDetailsComponent } from "./room-details.component";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  imports: [CommonModule, MatIconModule],
  declarations: [RoomDetailsComponent],
  exports: [RoomDetailsComponent],
})
export class RoomDetailsModule {}
