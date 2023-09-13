import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import {
  rootInitialState,
  rootReducer,
} from "src/app/core/store/root/state/state.reducer";
import { EffectsModule } from "@ngrx/effects";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { RootRouterStateSerializer } from "src/app/core/store/root/services/root-router-state-serializer.service";

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
