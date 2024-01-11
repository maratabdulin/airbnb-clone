import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RoomPersonComponent } from "./room-person.component";

@NgModule({
  imports: [CommonModule],
  declarations: [RoomPersonComponent],
  exports: [RoomPersonComponent],
})
export class RoomPersonModule {}
