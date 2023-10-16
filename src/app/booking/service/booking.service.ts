import { Injectable } from "@angular/core";
import { combineLatest, map, Observable } from "rxjs";
import { filter } from "rxjs/operators";

import { Building } from "@app/buildings/common";
import { Room } from "@app/rooms/common";
import { BookingDetails, BookingVariant } from "@app/booking/common";
import { MapMarkerConfig } from "@app/maps/common";
import { BuildingFacade } from "@app/buildings/state";
import { RoomFacade } from "@app/rooms/state";
import { BookingFacade } from "@app/booking/state";

export function getFirstRoomOnBuilding(
  building: Building,
  rooms: Room[],
): Room | null {
  const firstRoom = building.rooms.length ? building.rooms[0] : null;
  return firstRoom ? rooms.find((room) => room.id === firstRoom) ?? null : null;
}

export function castMapMarkerConfigs(
  bookingVariants: BookingVariant[],
): MapMarkerConfig[] {
  return bookingVariants
    .filter((bookingVariant) => bookingVariant.rooms.length)
    .map((bookingVariant) => ({
      data: bookingVariant,
      lat: bookingVariant.lat,
      lng: bookingVariant.lng,
      label: {
        className: "google-map-marker",
        text: bookingVariant.firstRoom?.price.toString() ?? "",
        fontWeight: "bold",
      },
    }));
}

@Injectable()
export class BookingService {
  bookingVariant$: Observable<BookingVariant> =
    this.bookingFacade.bookingVariant$.pipe(filter<any>(Boolean));

  bookingVariants$: Observable<BookingVariant[]> = combineLatest([
    this.buildingFacade.buildings$.pipe(filter<any>(Boolean)),
    this.roomFacade.rooms$.pipe(filter<any>(Boolean)),
  ]).pipe(
    map(([buildings, rooms]: [Building[], Room[]]) =>
      buildings
        .filter((building) => building.rooms.length)
        .map((building) => ({
          ...building,
          firstRoom: getFirstRoomOnBuilding(building, rooms),
        })),
    ),
  );

  bookingDetails$: Observable<BookingDetails> =
    this.bookingFacade.bookingDetails$.pipe(filter<any>(Boolean));

  mapMarkers$: Observable<MapMarkerConfig[]> = this.bookingVariants$.pipe(
    map(castMapMarkerConfigs),
  );

  constructor(
    private readonly buildingFacade: BuildingFacade,
    private readonly roomFacade: RoomFacade,
    private readonly bookingFacade: BookingFacade,
  ) {}

  setBookingVariant(bookingVariant: BookingVariant): void {
    this.bookingFacade.setBookingVariant(bookingVariant);
  }

  setBookingDetails(bookingDetails: BookingDetails): void {
    this.bookingFacade.setBookingDetails(bookingDetails);
  }

  clearBookingVariant(): void {
    this.bookingFacade.clearBookingVariant();
  }

  clearBookingDetails(): void {
    this.bookingFacade.clearBookingDetails();
  }
}
