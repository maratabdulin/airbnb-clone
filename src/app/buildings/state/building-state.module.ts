import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { BuildingStorageModule } from "@app/buildings/storage";

import { BUILDING_FEATURE_KEY, reducer } from "./building.reducer";
import { BuildingEffects } from "./building.effects";
import { BuildingFacade } from "./building.facade";

@NgModule({
  imports: [
    BuildingStorageModule,
    StoreModule.forFeature(BUILDING_FEATURE_KEY, reducer),
    EffectsModule.forFeature([BuildingEffects]),
  ],
  providers: [BuildingFacade],
})
export class BuildingStateModule {}
