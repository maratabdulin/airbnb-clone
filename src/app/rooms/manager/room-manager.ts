import { Injectable } from "@angular/core";
import { combineLatest, map, Observable, of } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

import { Building } from "@app/buildings/common";
import { BuildingFacade } from "@app/buildings/state";
import { Person } from "@app/persons/common";
import { PersonFacade } from "@app/persons/state";
import { Room } from "@app/rooms/common";
import { RoomFacade } from "@app/rooms/state";

export interface RoomBuildingExtended extends Building {
  personExtended: Person;
}

export interface RoomExtended extends Room {
  buildingExtended: RoomBuildingExtended;
}

@Injectable()
export class RoomManager {
  roomsExtended$: Observable<RoomExtended[]> = this.roomFacade.rooms$.pipe(
    filter<any>(Boolean),
    switchMap((rooms: Room[]) =>
      rooms.length
        ? combineLatest(
            rooms.map((room: Room) =>
              this.buildingFacade.building$(room.building).pipe(
                filter<any>(Boolean),
                switchMap((building: Building) =>
                  this.personFacade.person$(building.person).pipe(
                    filter<any>(Boolean),
                    map((person: Person) => ({
                      ...room,
                      buildingExtended: {
                        ...building,
                        personExtended: person,
                      },
                    })),
                  ),
                ),
              ),
            ),
          )
        : of([]),
    ),
  );

  roomExtended$ = (id: number): Observable<RoomExtended> =>
    this.roomFacade.room$(id).pipe(
      filter<any>(Boolean),
      switchMap((room: Room) =>
        this.buildingFacade.building$(room.building).pipe(
          filter<any>(Boolean),
          switchMap((building: Building) =>
            this.personFacade.person$(building.person).pipe(
              filter<any>(Boolean),
              map((person: Person) => ({
                ...room,
                buildingExtended: {
                  ...building,
                  personExtended: person,
                },
              })),
            ),
          ),
        ),
      ),
    );

  constructor(
    private readonly roomFacade: RoomFacade,
    private readonly buildingFacade: BuildingFacade,
    private readonly personFacade: PersonFacade,
  ) {}

  clear(): void {
    this.buildingFacade.clearBuildingRoom();
    this.roomFacade.clear();
  }

  removeRoom(payload: Room): void {
    this.buildingFacade.removeBuildingRoom({
      id: payload.building,
      room: payload.id,
    });
    this.roomFacade.removeRoom(payload);
  }
}
