import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

import { RoomHeaderComponent } from "./room-header.component";

@NgModule({
  imports: [CommonModule, MatIconModule, MatButtonModule],
  declarations: [RoomHeaderComponent],
  exports: [RoomHeaderComponent],
})
export class RoomHeaderModule {}
