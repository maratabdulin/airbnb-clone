import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { RoomStorageModule } from "@app/rooms/storage";

import { reducer, ROOM_FEATURE_KEY } from "./room.reducer";
import { RoomFacade } from "./room.facade";
import { RoomEffects } from "./room.effects";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RoomStorageModule,
    StoreModule.forFeature(ROOM_FEATURE_KEY, reducer),
    EffectsModule.forFeature([RoomEffects]),
  ],
  providers: [RoomFacade],
})
export class RoomStateModule {}
