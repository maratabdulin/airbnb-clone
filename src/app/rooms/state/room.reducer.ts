import { createReducer, on } from "@ngrx/store";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";

import { RoomEntity } from "@app/rooms/common";

import * as RoomActions from "./room.actions";

export const ROOM_FEATURE_KEY = "rooms";

export interface RoomState extends EntityState<RoomEntity> {
  roomsLoadError: Record<string, any> | null;
  roomsLoadRun: boolean;
  roomsCreateError: Record<string, any> | null;
  roomsCreateRun: boolean;
  roomsRemoveError: (Record<string, any> & { rooms: number[] }) | null;
  roomsRemoveRun: boolean;
}

export interface RoomPartialState {
  readonly [ROOM_FEATURE_KEY]: RoomState;
}

export const roomAdapter: EntityAdapter<RoomEntity> =
  createEntityAdapter<RoomEntity>();

export const roomInitialState: RoomState = roomAdapter.getInitialState({
  roomsLoadError: null,
  roomsLoadRun: false,
  roomsCreateError: null,
  roomsCreateRun: false,
  roomsRemoveError: null,
  roomsRemoveRun: false,
});

export const reducer = createReducer(
  roomInitialState,
  // LOAD ROOMS
  on(RoomActions.loadRooms, (state) => ({
    ...state,
    roomsLoadError: null,
    roomsLoadRun: true,
  })),
  on(RoomActions.loadRoomsSuccess, (state, { payload }) =>
    roomAdapter.setAll(payload, {
      ...state,
      roomsLoadRun: false,
    }),
  ),
  on(RoomActions.loadRoomsFailure, (state, { payload }) => ({
    ...state,
    roomsLoadError: payload,
    roomsLoadRun: false,
  })),
  // CLEAR ROOMS
  on(RoomActions.clearRooms, (state) =>
    roomAdapter.removeAll({
      ...state,
    }),
  ),
  // REMOVE ROOM
  on(RoomActions.removeRoom, (state, { payload }) =>
    roomAdapter.updateOne(
      {
        id: payload["id"],
        changes: {
          roomRemoveRun: true,
        },
      },
      state,
    ),
  ),
  on(RoomActions.removeRoomSuccess, (state, { payload }) =>
    roomAdapter.removeOne(payload.id, state),
  ),
  on(RoomActions.removeRoomFailure, (state, { payload }) =>
    roomAdapter.updateOne(
      {
        id: payload["id"],
        changes: {
          roomRemoveError: payload,
          roomRemoveRun: false,
        },
      },
      state,
    ),
  ),
  // ADD ROOM
  on(RoomActions.addRoom, (state) => ({
    ...state,
    roomsCreateError: null,
    roomsCreateRun: true,
  })),
  on(RoomActions.addRoomSuccess, (state, { payload }) =>
    roomAdapter.addOne(payload, { ...state, roomsCreateRun: false }),
  ),
  on(RoomActions.addRoomFailure, (state, { payload }) => ({
    ...state,
    roomsCreateRun: false,
    roomsCreateError: payload,
  })),
  // CHANGE ROOM
  on(RoomActions.changeRoom, (state, { payload }) =>
    roomAdapter.updateOne(
      {
        id: payload["id"],
        changes: {
          roomChangeRun: true,
        },
      },
      state,
    ),
  ),
  on(RoomActions.changeRoomSuccess, (state, { payload }) =>
    roomAdapter.updateOne(
      {
        id: payload["id"],
        changes: {
          ...payload,
          updated: new Date().toISOString(),
          roomChangeRun: false,
        },
      },
      state,
    ),
  ),
  on(RoomActions.changeRoomFailure, (state, { payload }) =>
    roomAdapter.updateOne(
      {
        id: payload["id"],
        changes: {
          roomChangeError: payload,
          roomChangeRun: false,
        },
      },
      state,
    ),
  ),
  // REMOVE ROOMS
  on(RoomActions.removeRooms, (state) => ({
    ...state,
    roomsRemoveError: null,
    roomsRemoveRun: true,
  })),
  on(RoomActions.removeRoomsSuccess, (state, { payload }) =>
    roomAdapter.removeMany(payload, {
      ...state,
      roomsRemoveRun: false,
    }),
  ),
  on(RoomActions.removeRoomsFailure, (state, { payload }) => ({
    ...state,
    roomsRemoveError: payload,
    roomsRemoveRun: false,
  })),
);
