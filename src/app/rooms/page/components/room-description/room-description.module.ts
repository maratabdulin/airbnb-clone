import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RoomDescriptionComponent } from "./room-description.component";

@NgModule({
  imports: [CommonModule],
  declarations: [RoomDescriptionComponent],
  exports: [RoomDescriptionComponent],
})
export class RoomDescriptionModule {}
