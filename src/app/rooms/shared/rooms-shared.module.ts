import { NgModule } from "@angular/core";

import { RoomPreviewImagesPipe } from "./room-preview-images.pipe";
import { RoomAmenitiesLabelPipe } from "./room-amenities-label.pipe";
import { RoomsPreviewImagesPipe } from "src/app/rooms/shared/rooms-preview-images.pipe";

@NgModule({
  declarations: [
    RoomPreviewImagesPipe,
    RoomAmenitiesLabelPipe,
    RoomsPreviewImagesPipe,
  ],
  exports: [
    RoomPreviewImagesPipe,
    RoomAmenitiesLabelPipe,
    RoomsPreviewImagesPipe,
  ],
})
export class RoomsSharedModule {}
