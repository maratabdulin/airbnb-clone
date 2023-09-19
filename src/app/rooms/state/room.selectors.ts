import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Dictionary } from "@ngrx/entity";

import { Entity } from "@app/core/common";
import { RoomEntity } from "@app/rooms/common";

import { ROOM_FEATURE_KEY, roomAdapter, RoomState } from "./room.reducer";

export const selectRoomState =
  createFeatureSelector<RoomState>(ROOM_FEATURE_KEY);

const { selectAll, selectEntities } = roomAdapter.getSelectors();

export const selectRooms = createSelector(selectRoomState, (state) =>
  selectAll(state),
);

export const selectRoomsEntities = createSelector(selectRoomState, (state) =>
  selectEntities(state),
);

export const selectRoomsLoadError = createSelector(
  selectRoomState,
  (state) => state.roomsLoadError,
);

export const selectRoomsLoadRun = createSelector(
  selectRoomState,
  (state) => state.roomsLoadRun,
);

export const selectRoomsCreateError = createSelector(
  selectRoomState,
  (state) => state.roomsCreateError,
);

export const selectRoomsCreateRun = createSelector(
  selectRoomState,
  (state) => state.roomsCreateRun,
);

export const selectRoom = (props: Entity) =>
  createSelector(
    selectRoomsEntities,
    (dictionary: Dictionary<RoomEntity>) => dictionary[props.id] ?? null,
  );

export const selectRoomsByBuilding = (props: Entity) =>
  createSelector(
    selectRooms,
    (rooms: RoomEntity[]) =>
      rooms?.filter((room) => room.building === props.id) ?? [],
  );
