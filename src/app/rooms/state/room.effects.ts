import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType, OnInitEffects } from "@ngrx/effects";
import { map } from "rxjs";
import { withLatestFrom } from "rxjs/operators";
import { Action, select, Store } from "@ngrx/store";

import { fetch, payload } from "@app/core/store/utils";
import { RoomStorage } from "@app/rooms/storage";
import { createRoomFromNewRoom } from "@app/rooms/common";
import { EnvironmentService } from "@app/core/environments";

import * as RoomsActions from "./room.actions";
import * as RoomsSelectors from "./room.selectors";

@Injectable()
export class RoomEffects implements OnInitEffects {
  loadRooms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RoomsActions.loadRooms),
      fetch({
        id: () => "load-rooms",
        run: () =>
          this.roomStorage
            .get()
            .pipe(map((payload) => RoomsActions.loadRoomsSuccess({ payload }))),
        onError: (action, payload) =>
          RoomsActions.loadRoomsFailure({ payload }),
      }),
    ),
  );

  addRooms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RoomsActions.addRoom),
      withLatestFrom(this.store.pipe(select(RoomsSelectors.selectRooms))),
      fetch({
        id: () => "add-room",
        run: (action, rooms) =>
          RoomsActions.addRoomSuccess({
            payload: createRoomFromNewRoom(rooms ?? [], action.payload),
          }),
        onError: (action, payload) => RoomsActions.addRoomFailure({ payload }),
      }),
    ),
  );

  removeRoom$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RoomsActions.removeRoom),
      withLatestFrom(
        this.store.pipe(select(RoomsSelectors.selectRoomsEntities)),
      ),
      fetch({
        id: (action) => `remove-room-${action.payload.id}`,
        run: (action, roomsEntities) => {
          const room = roomsEntities ? roomsEntities[action.payload.id] : null;
          return room
            ? RoomsActions.removeRoomSuccess({ payload: action.payload })
            : RoomsActions.removeRoomCancel();
        },
        onError: (action, error) =>
          RoomsActions.removeRoomFailure({
            payload: { ...error, id: action.payload.id },
          }),
      }),
    ),
  );

  changeRoom$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RoomsActions.changeRoom),
      fetch({
        id: () => "change-room",
        run: (action) =>
          RoomsActions.changeRoomSuccess({ payload: action.payload }),
        onError: (action, payload) =>
          RoomsActions.changeRoomFailure({ payload }),
      }),
    ),
  );

  removeRooms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RoomsActions.removeRooms),
      fetch({
        id: () => "remove-rooms",
        run: (action) => RoomsActions.removeRooms({ payload: action.payload }),
        onError: (action, payload) =>
          RoomsActions.removeRoomsFailure({
            payload: { ...payload, rooms: action.payload },
          }),
      }),
    ),
  );

  localStorageSync$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        RoomsActions.addRoomSuccess,
        RoomsActions.removeRoomsSuccess,
        RoomsActions.removeRoomsSuccess,
        RoomsActions.changeRoomSuccess,
        RoomsActions.clearRooms,
      ),
      withLatestFrom(this.store.pipe(select(RoomsSelectors.selectRooms))),
      fetch({
        id: (action) => `local-storage-sync-rooms-${action.type}`,
        run: (action, rooms) => {
          if (this.environmentService.getEnvironments().localStorageSync) {
            this.roomStorage.post(rooms ?? []);
          }
        },
      }),
    ),
  );

  constructor(
    private readonly actions$: Actions,
    private readonly roomStorage: RoomStorage,
    private readonly store: Store,
    private readonly environmentService: EnvironmentService,
  ) {}

  ngrxOnInitEffects(): Action {
    return RoomsActions.loadRooms();
  }
}
