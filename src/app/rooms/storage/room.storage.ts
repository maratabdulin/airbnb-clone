import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";

import { LocalStorage } from "@app/core/storage";
import { RoomDto, RoomEntity } from "@app/rooms/common";

import { ROOMS_DTO_STUB } from "./room.stub";

const ROOM_STORAGE_KEY = "rooms";

export function castRoomEntity(room: RoomDto): RoomEntity {
  return {
    ...room,
    roomRemoveRun: false,
    roomRemoveError: null,
    roomChangeRun: false,
    roomChangeError: null,
  };
}

export function castRoomDto<T extends RoomEntity = RoomEntity>({
  id,
  created,
  updated,
  building,
  guests,
  bedrooms,
  beds,
  price,
  description,
  photos,
  amenities,
  bathrooms,
}: T): RoomDto {
  return {
    id,
    created,
    updated,
    building,
    guests,
    bedrooms,
    beds,
    price,
    description,
    photos,
    amenities,
    bathrooms,
  };
}

@Injectable()
export class RoomStorage {
  constructor(private readonly localStorage: LocalStorage) {}

  clear(): void {
    this.localStorage.setItem(ROOM_STORAGE_KEY, []);
  }

  get(): Observable<RoomEntity[]> {
    return this.localStorage
      .getItem<RoomDto[] | null>(ROOM_STORAGE_KEY)
      .pipe(map((rooms) => (rooms ?? ROOMS_DTO_STUB).map(castRoomEntity)));
  }

  post(rooms: RoomEntity[] | null): void {
    this.localStorage.setItem(ROOM_STORAGE_KEY, rooms?.map(castRoomDto));
  }

  reset(): void {
    this.localStorage.setItem(ROOM_STORAGE_KEY, ROOMS_DTO_STUB);
  }
}
