import {
  BookingDetails,
  BookingField,
  BookingVariant,
} from "@app/booking/common";
import { RoomAmenities } from "@app/rooms/common";

export const BOOKING_VARIANT_STUB: BookingVariant = {
  id: 1,
  person: 1,
  rooms: [1],
  name: "John Smith",
  city: "Girona",
  lat: 41.97945550465817,
  lng: 2.821231025394162,
  address: "C. de Joan Maragall, 18",
  firstRoom: {
    id: 1,
    guests: 2,
    building: 1,
    beds: 1,
    bathrooms: 1,
    bedrooms: 1,
    price: 1000,
    description: "nice apartments in city center",
    amenities: [
      RoomAmenities.SOAP,
      RoomAmenities.ELEVATOR,
      RoomAmenities.SMOKE_ALARM,
    ],
    photos: ["1.jpg"],
    created: "2023-09-30T01:16:20.000Z",
    updated: "2023-09-30T01:17:20.000Z",
    roomRemoveError: null,
    roomRemoveRun: false,
    roomChangeError: null,
    roomChangeRun: false,
  },
  created: "2023-09-30T01:16:20.000Z",
  updated: "2023-09-30T01:17:20.000Z",
  buildingChangeError: null,
  buildingChangeRun: false,
  buildingRemoveError: null,
  buildingRemoveRun: false,
  buildingRoomRemoveError: null,
  buildingRoomRemoveRun: false,
  buildingRoomAddError: null,
  buildingRoomAddRun: false,
};

export const BOOKING_DETAILS_STUB: BookingDetails = {
  [BookingField.PERIOD]: {
    [BookingField.PERIOD_START]: "2023-09-29",
    [BookingField.PERIOD_END]: "2023-09-30",
  },
  [BookingField.GUESTS]: 1,
};
