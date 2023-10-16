import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { BOOKING_FEATURE_KEY, reducer } from "./booking.reducer";
import { BookingEffects } from "./booking.effects";
import { BookingFacade } from "./booking.facade";

@NgModule({
  imports: [
    StoreModule.forFeature(BOOKING_FEATURE_KEY, reducer),
    EffectsModule.forFeature([BookingEffects]),
  ],
  providers: [BookingFacade],
})
export class BookingStateModule {}
