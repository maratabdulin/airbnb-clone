import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType, OnInitEffects } from "@ngrx/effects";
import { Action, select, Store } from "@ngrx/store";
import { withLatestFrom } from "rxjs/operators";
import { map } from "rxjs";

import { BuildingStorage } from "@app/buildings/storage";
import { EnvironmentService } from "@app/core/environments";
import { fetch } from "@app/core/store/utils";
import { createBuildingFromNewBuilding } from "@app/buildings/common";

import * as BuildingSelectors from "./building.selectors";
import * as BuildingActions from "./building.actions";
import { BuildingState } from "./building.reducer";

@Injectable()
export class BuildingEffects implements OnInitEffects {
  loadBuildings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BuildingActions.loadBuildings),
      fetch({
        id: () => "load-buildings",
        run: () =>
          this.buildingStorage
            .get()
            .pipe(
              map((payload) =>
                BuildingActions.loadBuildingsSuccess({ payload }),
              ),
            ),
        onError: (action, payload) =>
          BuildingActions.loadBuildingsFailure({ payload }),
      }),
    ),
  );

  clearBuildingRooms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BuildingActions.clearBuildingRooms),
      withLatestFrom(
        this.store.pipe(select(BuildingSelectors.selectBuildings)),
      ),
      fetch({
        id: () => "clear-building-rooms",
        run: (action, buildings) =>
          BuildingActions.clearBuildingRoomsSuccess({
            payload:
              buildings?.map((building) => ({ ...building, rooms: [] })) ?? [],
          }),
        onError: (action, payload) =>
          BuildingActions.clearBuildingRoomsFailure({ payload }),
      }),
    ),
  );

  removeBuilding$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BuildingActions.removeBuilding),
      withLatestFrom(
        this.store.pipe(select(BuildingSelectors.selectBuildingsEntities)),
      ),
      fetch({
        id: (action) => `remove-building-${action.payload.id}`,
        run: (action, buildingEntities) => {
          const building = buildingEntities
            ? buildingEntities[action.payload.id]
            : null;
          return building
            ? BuildingActions.removeBuildingSuccess({ payload: action.payload })
            : BuildingActions.removeBuildingCancel();
        },
        onError: (action, error) =>
          BuildingActions.removeBuildingFailure({
            payload: { ...error, id: action.payload.id },
          }),
      }),
    ),
  );

  addBuilding$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BuildingActions.addBuilding),
      withLatestFrom(
        this.store.pipe(select(BuildingSelectors.selectBuildings)),
      ),
      fetch({
        id: () => "add-building",
        run: (action, buildings) =>
          BuildingActions.addBuildingSuccess({
            payload: createBuildingFromNewBuilding(
              buildings ?? [],
              action.payload,
            ),
          }),
        onError: (action, payload) =>
          BuildingActions.addBuildingFailure({ payload }),
      }),
    ),
  );

  changeBuilding$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BuildingActions.changeBuilding),
      fetch({
        id: (action) => `change-building-${action.payload.id}`,
        run: (action) =>
          BuildingActions.changeBuildingSuccess({ payload: action.payload }),
        onError: (action, payload) =>
          BuildingActions.changeBuildingFailure({ payload }),
      }),
    ),
  );

  addBuildingRoom$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BuildingActions.addBuildingRoom),
      withLatestFrom(
        this.store.pipe(select(BuildingSelectors.selectBuildingsEntities)),
      ),
      fetch({
        id: (action) => `add-building-room-${action.payload.id}`,
        run: (action, buildingsEntities) => {
          const building = buildingsEntities
            ? buildingsEntities[action.payload.id]
            : null;
          const rooms = building?.rooms ?? [];
          return BuildingActions.addBuildingRoomSuccess({
            payload: {
              id: action.payload.id,
              rooms: [...rooms, action.payload.room],
            },
          });
        },
        onError: (action, payload) =>
          BuildingActions.addBuildingRoomFailure({ payload }),
      }),
    ),
  );

  removeBuildingRoom$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BuildingActions.removeBuildingRoom),
      withLatestFrom(
        this.store.pipe(select(BuildingSelectors.selectBuildingsEntities)),
      ),
      fetch({
        id: (action) => `remove-building-room-${action.payload.id}`,
        run: (action, buildingEntities) => {
          const building = buildingEntities
            ? buildingEntities[action.payload.id]
            : null;
          const rooms =
            building?.rooms.filter((room) => room !== action.payload.room) ??
            [];
          return BuildingActions.removeBuildingRoomSuccess({
            payload: { id: action.payload.id, rooms },
          });
        },
        onError: (action, payload) =>
          BuildingActions.removeBuildingRoomFailure({ payload }),
      }),
    ),
  );

  removeBuildings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BuildingActions.removeBuildings),
      fetch({
        id: () => "remove-buildings",
        run: (action) =>
          BuildingActions.removeBuildingsSuccess({ payload: action.payload }),
        onError: (action, payload) =>
          BuildingActions.removeBuildingsFailure({
            payload: { ...payload, buildings: action.payload },
          }),
      }),
    ),
  );

  localStorageSync$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        BuildingActions.clearBuildings,
        BuildingActions.addBuildingSuccess,
        BuildingActions.addBuildingRoomSuccess,
        BuildingActions.removeBuildingsSuccess,
        BuildingActions.removeBuildingSuccess,
        BuildingActions.changeBuildingSuccess,
        BuildingActions.clearBuildingRoomsSuccess,
      ),
      withLatestFrom(
        this.store.pipe(select(BuildingSelectors.selectBuildings)),
      ),
      fetch({
        id: (action) => `local-storage-sync-buildings-${action.type}`,
        run: (action, buildings) => {
          if (this.environmentsService.getEnvironments().localStorageSync) {
            this.buildingStorage.post(buildings ?? []);
          }
        },
      }),
    ),
  );

  constructor(
    private readonly actions$: Actions,
    private readonly store: Store<BuildingState>,
    private readonly buildingStorage: BuildingStorage,
    private readonly environmentsService: EnvironmentService,
  ) {}

  ngrxOnInitEffects(): Action {
    return BuildingActions.loadBuildings();
  }
}
