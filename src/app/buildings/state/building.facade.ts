import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Action, select, Store } from "@ngrx/store";
import { Actions, ofType } from "@ngrx/effects";

import {
  Building,
  ChangeBuildingRoom,
  ChangedBuilding,
  NewBuilding,
} from "@app/buildings/common";
import { Entity } from "@app/core/common";

import * as BuildingActions from "./building.actions";
import * as BuildingSelectors from "./building.selectors";
import { BuildingState } from "./building.reducer";

@Injectable()
export class BuildingFacade {
  buildings$: Observable<Building[]> = this.store.pipe(
    select(BuildingSelectors.selectBuildings),
  );
  buildingsLoadError$ = this.store.pipe(
    select(BuildingSelectors.selectBuildingsLoadError),
  );
  buildingsLoadRun$ = this.store.pipe(
    select(BuildingSelectors.selectBuildingsLoadRun),
  );
  buildingAdded$: Observable<Building> = this.actions.pipe(
    ofType(BuildingActions.addBuildingSuccess),
    map((action) => action.payload),
  );
  buildingChanged$: Observable<ChangedBuilding> = this.actions.pipe(
    ofType(BuildingActions.changeBuildingSuccess),
    map((action) => action.payload),
  );
  building$ = (id: number): Observable<Building | null> =>
    this.store.pipe(select(BuildingSelectors.selectBuilding({ id })));
  buildingByPerson$ = (id: number): Observable<Building[]> =>
    this.store.pipe(select(BuildingSelectors.selectBuildingByPerson({ id })));

  constructor(
    private readonly actions: Actions,
    private readonly store: Store<BuildingState>,
  ) {}

  clear(): void {
    this.dispatch(BuildingActions.clearBuildings());
  }

  clearBuildingRoom(): void {
    this.dispatch(BuildingActions.clearBuildingRooms());
  }

  load(): void {
    this.dispatch(BuildingActions.loadBuildings());
  }

  addBuilding(payload: NewBuilding): void {
    this.dispatch(BuildingActions.addBuilding({ payload }));
  }

  removeBuilding(payload: Entity): void {
    this.dispatch(BuildingActions.removeBuilding({ payload }));
  }

  removeBuildings(payload: number[]): void {
    this.dispatch(BuildingActions.removeBuildings({ payload }));
  }

  addBuildingRoom(payload: ChangeBuildingRoom): void {
    this.dispatch(BuildingActions.addBuildingRoom({ payload }));
  }

  removeBuildingRoom(payload: ChangeBuildingRoom): void {
    this.dispatch(BuildingActions.removeBuildingRoom({ payload }));
  }

  changeBuilding(payload: ChangedBuilding): void {
    this.dispatch(BuildingActions.changeBuilding({ payload }));
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
