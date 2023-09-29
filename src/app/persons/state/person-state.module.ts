import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { PersonStorageModule } from "@app/persons/storage";

import { PERSON_FEATURE_KEY, reducer } from "./person.reducer";
import { PersonEffects } from "./person.effects";
import { PersonFacade } from "./person.facade";

@NgModule({
  imports: [
    PersonStorageModule,
    StoreModule.forFeature(PERSON_FEATURE_KEY, reducer),
    EffectsModule.forFeature([PersonEffects]),
  ],
  providers: [PersonFacade],
})
export class PersonStateModule {}
