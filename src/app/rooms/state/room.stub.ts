import {
  ChangedRoom,
  NewRoom,
  Room,
  RoomAmenities,
  RoomDto,
  RoomField,
} from "@app/rooms/common";
import { Entity } from "@app/core/common";

export const ROOM_DTO_STUB: RoomDto = {
  id: 1,
  building: 1,
  guests: 3,
  beds: 2,
  bathrooms: 2,
  bedrooms: 2,
  price: 2300,
  description:
    "This cozy apartment features 2 bedrooms, 2 bathrooms, and comfortable sleeping arrangements for up to 3 guests. With amenities like heating, free parking, and more, it offers a pleasant stay at a reasonable price.",
  amenities: [
    RoomAmenities.HEATING,
    RoomAmenities.FREE_PARKING,
    RoomAmenities.SMOKE_ALARM,
    RoomAmenities.SOAP,
  ],
  photos: ["/photo.jpeg"],
  created: "2023-09-19T01:16:40.000Z",
  updated: "2023-09-19T01:16:41.000Z",
};

export const ROOM_STUB: Room = {
  ...ROOM_DTO_STUB,
  roomRemoveError: null,
  roomRemoveRun: false,
  roomChangeError: null,
  roomChangeRun: false,
};

export const ROOMS_STUB: Room[] = [ROOM_STUB];

export const ROOM_LOAD_ERROR = { code: 0, message: "Failure load rooms" };

export const ENTITY_STUB: Entity = { id: ROOM_STUB.id };

export const NEW_ROOM_STUB: NewRoom = {
  [RoomField.PERSON]: 1,
  [RoomField.BUILDING]: 1,
  [RoomField.GUESTS]: 1,
  [RoomField.BEDROOMS]: 1,
  [RoomField.BATHROOMS]: 1,
  [RoomField.BEDS]: 1,
  [RoomField.PHOTOS]: ["/photo.jpeg"],
  [RoomField.AMENITIES]: [RoomAmenities.SOAP],
  [RoomField.DESCRIPTION]: "Room description",
  [RoomField.PRICE]: 1000,
};

export const CHANGED_ROOM_STUB: ChangedRoom = {
  [RoomField.ID]: 1,
  [RoomField.PERSON]: 1,
  [RoomField.BUILDING]: 1,
  [RoomField.GUESTS]: 1,
  [RoomField.BEDROOMS]: 1,
  [RoomField.BATHROOMS]: 1,
  [RoomField.BEDS]: 1,
  [RoomField.PHOTOS]: ["/photo.jpeg"],
  [RoomField.AMENITIES]: [RoomAmenities.SOAP],
  [RoomField.DESCRIPTION]: "Room description",
  [RoomField.PRICE]: 2000,
};
