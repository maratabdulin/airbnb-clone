import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Room } from "@app/rooms/common";
import { RoomFacade } from "@app/rooms/state";
import { filter } from "rxjs/operators";

@Injectable()
export class RoomService {
  rooms$: Observable<Room[]> = this.roomFacade.rooms$.pipe(
    filter<Room[]>(Boolean),
  );

  room$ = (id: number): Observable<Room> =>
    this.roomFacade.room$(id).pipe(filter<any>(Boolean));

  roomByBuilding$ = (id: number): Observable<Room> =>
    this.roomFacade.roomsByBuilding$(id).pipe(filter<any>(Boolean));

  constructor(private readonly roomFacade: RoomFacade) {}
}
