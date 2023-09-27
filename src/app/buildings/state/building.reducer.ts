import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";

import { BuildingEntity } from "@app/buildings/common";

import * as BuildingActions from "./building.actions";

export const BUILDING_FEATURE_KEY = "buildings";

export interface BuildingState extends EntityState<BuildingEntity> {
  buildingsLoadError: Record<string, any> | null;
  buildingsLoadRun: boolean;
  buildingCreateError: Record<string, any> | null;
  buildingCreateRun: boolean;
  buildingsRoomClearError: Record<string, any> | null;
  buildingsRoomClearRun: boolean;
  buildingsRemoveError: (Record<string, any> & { buildings: number[] }) | null;
  buildingsRemoveRun: boolean;
}

export interface BuildingPartialState {
  readonly [BUILDING_FEATURE_KEY]: BuildingState;
}

export const buildingAdapter: EntityAdapter<BuildingEntity> =
  createEntityAdapter<BuildingEntity>();

export const buildingInitialState: BuildingState =
  buildingAdapter.getInitialState({
    buildingsLoadError: null,
    buildingsLoadRun: false,
    buildingCreateError: null,
    buildingCreateRun: false,
    buildingsRemoveError: null,
    buildingsRemoveRun: false,
    buildingsRoomClearError: null,
    buildingsRoomClearRun: false,
  });

export const reducer = createReducer(
  buildingInitialState,

  on(BuildingActions.loadBuildings, (state) => ({
    ...state,
    buildingsLoadError: null,
    buildingsLoadRun: true,
  })),

  on(BuildingActions.loadBuildingsSuccess, (state, { payload }) =>
    buildingAdapter.setAll(payload, {
      ...state,
      buildingsLoadRun: false,
    }),
  ),

  on(BuildingActions.loadBuildingsFailure, (state, { payload }) => ({
    ...state,
    buildingsLoadRun: false,
    buildingsLoadError: payload,
  })),

  on(BuildingActions.clearBuildings, (state) =>
    buildingAdapter.removeAll({ ...state }),
  ),

  on(BuildingActions.removeBuilding, (state, { payload }) =>
    buildingAdapter.updateOne(
      {
        id: payload["id"],
        changes: {
          buildingRemoveRun: true,
        },
      },
      state,
    ),
  ),

  on(BuildingActions.removeBuildingSuccess, (state, { payload }) =>
    buildingAdapter.removeOne(payload.id, state),
  ),

  on(BuildingActions.removeBuildingFailure, (state, { payload }) =>
    buildingAdapter.updateOne(
      {
        id: payload["id"],
        changes: {
          buildingRemoveError: payload,
          buildingRemoveRun: false,
        },
      },
      state,
    ),
  ),

  on(BuildingActions.removeBuildings, (state) => ({
    ...state,
    buildingsRemoveRun: true,
    buildingsRemoveError: null,
  })),

  on(BuildingActions.removeBuildingsSuccess, (state, { payload }) =>
    buildingAdapter.removeMany(payload, {
      ...state,
      buildingsRemoveRun: false,
    }),
  ),

  on(BuildingActions.removeBuildingsFailure, (state, { payload }) => ({
    ...state,
    buildingsRemoveRun: false,
    buildingsRemoveError: payload,
  })),

  on(BuildingActions.addBuilding, (state) => ({
    ...state,
    buildingCreateError: null,
    buildingCreateRun: true,
  })),

  on(BuildingActions.addBuildingSuccess, (state, { payload }) =>
    buildingAdapter.addOne(payload, { ...state, buildingCreateRun: false }),
  ),

  on(BuildingActions.addBuildingFailure, (state, { payload }) => ({
    ...state,
    buildingCreateRun: false,
    buildingCreateError: payload,
  })),

  on(BuildingActions.changeBuilding, (state, { payload }) =>
    buildingAdapter.updateOne(
      {
        id: payload["id"],
        changes: {
          buildingChangeRun: true,
        },
      },
      state,
    ),
  ),

  on(BuildingActions.changeBuildingSuccess, (state, { payload }) =>
    buildingAdapter.updateOne(
      {
        id: payload["id"],
        changes: {
          ...payload,
          updated: new Date().toISOString(),
          buildingChangeRun: false,
        },
      },
      state,
    ),
  ),

  on(BuildingActions.changeBuildingFailure, (state, { payload }) =>
    buildingAdapter.updateOne(
      {
        id: payload["id"],
        changes: {
          buildingChangeError: payload,
          buildingChangeRun: false,
        },
      },
      state,
    ),
  ),

  on(BuildingActions.removeBuildingRoom, (state, { payload }) =>
    buildingAdapter.updateOne(
      {
        id: payload["id"],
        changes: {
          buildingRoomRemoveRun: true,
        },
      },
      state,
    ),
  ),

  on(BuildingActions.removeBuildingRoomSuccess, (state, { payload }) =>
    buildingAdapter.updateOne(
      {
        id: payload["id"],
        changes: {
          rooms: payload.rooms,
          buildingRoomRemoveRun: false,
        },
      },
      state,
    ),
  ),

  on(BuildingActions.removeBuildingRoomFailure, (state, { payload }) =>
    buildingAdapter.updateOne(
      {
        id: payload["id"],
        changes: {
          buildingRoomRemoveError: payload,
          buildingRoomRemoveRun: false,
        },
      },
      state,
    ),
  ),

  on(BuildingActions.clearBuildingRooms, (state) => ({
    ...state,
    buildingsRoomClearError: null,
    buildingsRoomClearRun: true,
  })),

  on(BuildingActions.clearBuildingRoomsSuccess, (state, { payload }) =>
    buildingAdapter.setAll(payload, { ...state, buildingsRoomClearRun: false }),
  ),

  on(BuildingActions.clearBuildingRoomsFailure, (state, { payload }) => ({
    ...state,
    buildingsRoomClearRun: false,
    buildingsRoomClearError: payload,
  })),

  on(BuildingActions.addBuildingRoom, (state, { payload }) =>
    buildingAdapter.updateOne(
      {
        id: payload["id"],
        changes: {
          buildingRoomAddRun: true,
        },
      },
      state,
    ),
  ),

  on(BuildingActions.addBuildingRoomSuccess, (state, { payload }) =>
    buildingAdapter.updateOne(
      {
        id: payload["id"],
        changes: {
          ...payload,
          updated: new Date().toISOString(),
          buildingRoomAddRun: false,
        },
      },
      state,
    ),
  ),

  on(BuildingActions.addBuildingRoomFailure, (state, { payload }) =>
    buildingAdapter.updateOne(
      {
        id: payload["id"],
        changes: {
          buildingRoomAddRun: false,
          buildingRoomAddError: payload,
        },
      },
      state,
    ),
  ),
);
