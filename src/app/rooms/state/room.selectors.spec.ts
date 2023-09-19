import { createEntityState, createStore } from "@app/core/store/utils";

import {
  ROOM_FEATURE_KEY,
  roomInitialState,
  RoomPartialState,
  RoomState,
} from "./room.reducer";
import * as RoomSelectors from "./room.selectors";
import { ROOM_LOAD_ERROR, ROOM_STUB, ROOMS_STUB } from "./room.stub";

describe("RoomsSelectors", () => {
  const getState = (payload: Partial<RoomState>): RoomPartialState =>
    createStore(ROOM_FEATURE_KEY, roomInitialState, payload);

  it("selectRooms() should return rooms", () => {
    const state = getState({ ...createEntityState(ROOMS_STUB) });
    const result = RoomSelectors.selectRooms(state);
    expect(result?.length).toBe(ROOMS_STUB.length);
  });

  it("selectRoomsLoadError() should return roomsLoadError", () => {
    const state = getState({ roomsLoadError: ROOM_LOAD_ERROR });
    const result = RoomSelectors.selectRoomsLoadError(state);
    expect(result).toEqual(ROOM_LOAD_ERROR);
  });

  it("selectRoomsLoadRun() should return roomsLoadRun", () => {
    const state = getState({ roomsLoadRun: true });
    const result = RoomSelectors.selectRoomsLoadRun(state);
    expect(result).toBeTruthy();
  });

  it("selectRoomCreateError() should return roomCreateError", () => {
    const state = getState({ roomsCreateError: ROOM_LOAD_ERROR });
    const result = RoomSelectors.selectRoomsCreateError(state);
    expect(result).toEqual(ROOM_LOAD_ERROR);
  });

  it("selectRoomCreateRun() should return roomCreateRun", () => {
    const state = getState({ roomsCreateRun: true });
    const result = RoomSelectors.selectRoomsCreateRun(state);
    expect(result).toBeTruthy();
  });

  it("selectRoom() should return room by id", () => {
    const state = getState({ ...createEntityState(ROOMS_STUB) });
    const result = RoomSelectors.selectRoom(ROOM_STUB)(state);
    expect(result).toEqual(ROOM_STUB);
  });

  it("selectRoomByBuilding() should return rooms by building id", () => {
    const state = getState(createEntityState(ROOMS_STUB));
    const result = RoomSelectors.selectRoomsByBuilding({
      id: ROOM_STUB.building,
    })(state);
    expect(result?.length).toBe(ROOMS_STUB.length);
  });
});
