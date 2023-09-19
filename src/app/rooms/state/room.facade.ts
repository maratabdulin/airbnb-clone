import { Injectable } from "@angular/core";
import { Action, select, Store } from "@ngrx/store";
import { map, Observable } from "rxjs";
import { Actions, ofType } from "@ngrx/effects";

import { ChangedRoom, NewRoom, Room } from "@app/rooms/common";
import { Entity } from "@app/core/common";

import { RoomState } from "./room.reducer";
import * as RoomSelectors from "./room.selectors";
import * as RoomActions from "./room.actions";

@Injectable()
export class RoomFacade {
  rooms$: Observable<Room[]> = this.store.pipe(
    select(RoomSelectors.selectRooms),
  );

  roomsLoadError$: Observable<Record<string, any> | null> = this.store.pipe(
    select(RoomSelectors.selectRoomsLoadError),
  );

  roomsLoadRun: Observable<boolean> = this.store.pipe(
    select(RoomSelectors.selectRoomsLoadRun),
  );

  roomAdded$: Observable<Room> = this.actions.pipe(
    ofType(RoomActions.addRoomSuccess),
    map((action) => action.payload),
  );

  roomChanged$ = this.actions.pipe(
    ofType(RoomActions.changeRoomSuccess),
    map((action) => action.payload),
  );

  room$ = (id: number): Observable<Room | null> =>
    this.store.pipe(select(RoomSelectors.selectRoom({ id })));

  roomsByBuilding$ = (id: number): Observable<Room[]> =>
    this.store.pipe(select(RoomSelectors.selectRoomsByBuilding({ id })));

  constructor(
    private readonly store: Store<RoomState>,
    private readonly actions: Actions,
  ) {}

  clear(): void {
    this.dispatch(RoomActions.clearRooms());
  }

  load(): void {
    this.dispatch(RoomActions.loadRooms());
  }
  removeRoom(payload: Entity): void {
    this.dispatch(RoomActions.removeRoom({ payload }));
  }

  removeRooms(payload: number[]): void {
    this.dispatch(RoomActions.removeRooms({ payload }));
  }

  addRoom(payload: NewRoom): void {
    this.dispatch(RoomActions.addRoom({ payload }));
  }

  changeRoom(payload: ChangedRoom): void {
    this.dispatch(RoomActions.changeRoom({ payload }));
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
