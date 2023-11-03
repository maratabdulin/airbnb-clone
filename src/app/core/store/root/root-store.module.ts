import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreRouterConnectingModule } from "@ngrx/router-store";

import { rootInitialState, rootReducer } from "./state/state.reducer";
import { RootRouterStateSerializer } from "./services/root-router-state-serializer.service";

@NgModule({
  imports: [
    RouterModule,
    StoreModule.forRoot(rootReducer, {
      initialState: rootInitialState,
      metaReducers: [],
    }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({
      serializer: RootRouterStateSerializer,
    }),
  ],
})
export class RootStoreModule {}
