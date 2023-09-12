import { Entity } from "@app/core/common";

export enum RoomAmenities {
  SHAMPOO = "shampoo",
  HAIR_DRYER = "hairDryer",
  IRON = "iron",
  HANGERS = "hangers",
  ESSENTIALS = "essentials",
  BED_SHEETS = "bedSheets",
  SOAP = "soap",
  TOILET_PAPER = "toiletPaper",
  WASHER = "washer",
  TV = "tv",
  HEATING = "heating",
  SECURITY_CAMERAS = "securityCameras",
  SMOKE_ALARM = "smokeAlarm",
  WIFI = "wifi",
  DEDICATED_WORKSPACE = "dedicatedWorkspace",
  KITCHEN = "kitchen",
  COOKING_BASICS = "cookingBasics",
  ELEVATOR = "elevator",
  FREE_PARKING = "freeParking",
  LONG_TERM_STAYS = "longTermStays",
  AIR_CONDITIONING = "airConditioning",
  CARBON_MONOXIDE_ALARM = "carbonMonoxideAlarm",
  PRIVATE_ENTRANCE = "privateEntrance",
}

export const ROOM_AMENITIES: RoomAmenities[] = [
  RoomAmenities.SHAMPOO,
  RoomAmenities.HAIR_DRYER,
  RoomAmenities.IRON,
  RoomAmenities.HANGERS,
  RoomAmenities.ESSENTIALS,
  RoomAmenities.BED_SHEETS,
  RoomAmenities.SOAP,
  RoomAmenities.TOILET_PAPER,
  RoomAmenities.WASHER,
  RoomAmenities.TV,
  RoomAmenities.HEATING,
  RoomAmenities.SECURITY_CAMERAS,
  RoomAmenities.SMOKE_ALARM,
  RoomAmenities.WIFI,
  RoomAmenities.DEDICATED_WORKSPACE,
  RoomAmenities.KITCHEN,
  RoomAmenities.COOKING_BASICS,
  RoomAmenities.ELEVATOR,
  RoomAmenities.FREE_PARKING,
  RoomAmenities.LONG_TERM_STAYS,
  RoomAmenities.AIR_CONDITIONING,
  RoomAmenities.CARBON_MONOXIDE_ALARM,
  RoomAmenities.PRIVATE_ENTRANCE,
];

export const ROOM_AMENITIES_LABELS: Record<RoomAmenities, string> = {
  [RoomAmenities.SHAMPOO]: "Shampoo",
  [RoomAmenities.HAIR_DRYER]: "Hair dryer",
  [RoomAmenities.IRON]: "Iron",
  [RoomAmenities.HANGERS]: "Hangers",
  [RoomAmenities.ESSENTIALS]: "Essentials",
  [RoomAmenities.BED_SHEETS]: "Bad sheets",
  [RoomAmenities.SOAP]: "Soap",
  [RoomAmenities.TOILET_PAPER]: "Toilet paper",
  [RoomAmenities.WASHER]: "Washer",
  [RoomAmenities.TV]: "TV",
  [RoomAmenities.HEATING]: "Heating",
  [RoomAmenities.SECURITY_CAMERAS]: "Security cameras",
  [RoomAmenities.SMOKE_ALARM]: "Smoke alarm",
  [RoomAmenities.WIFI]: "WiFi",
  [RoomAmenities.DEDICATED_WORKSPACE]: "Dedicated workspace",
  [RoomAmenities.KITCHEN]: "Kitchen",
  [RoomAmenities.COOKING_BASICS]: "Cooking basics",
  [RoomAmenities.ELEVATOR]: "Elevator",
  [RoomAmenities.FREE_PARKING]: "Free parking",
  [RoomAmenities.LONG_TERM_STAYS]: "Long Term stays",
  [RoomAmenities.AIR_CONDITIONING]: "Air conditioning",
  [RoomAmenities.CARBON_MONOXIDE_ALARM]: "Carbon monoxide alarm",
  [RoomAmenities.PRIVATE_ENTRANCE]: "Private entrance",
};

export interface RoomDto {
  readonly id: number;
  readonly created: string;
  readonly updated: string;
  readonly building: number;
  readonly guests: number;
  readonly bedrooms: number;
  readonly bathrooms: number;
  readonly beds: number;
  readonly price: number;
  readonly description: string;
  readonly photos: string[];
  readonly amenities: RoomAmenities[];
}

export interface RoomEntity {
  id: number;
  created: string;
  updated: string;
  building: number;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  beds: number;
  price: number;
  description: string;
  photos: string[];
  amenities: RoomAmenities[];

  roomRemoveRun: boolean;
  roomRemoveError: Record<string, any> | null;
  roomChangeRun: boolean;
  roomChangeError: Record<string, any> | null;
}

export interface Room extends RoomEntity {}

export enum RoomField {
  ID = "id",
  BUILDING = "building",
  PERSON = "person",
  GUESTS = "guests",
  BEDROOMS = "bedrooms",
  BEDS = "beds",
  BATHROOMS = "bathrooms",
  PRICE = "price",
  DESCRIPTION = "description",
  PHOTOS = "photos",
  AMENITIES = "amenities",
  CREATED = "created",
  UPDATED = "updated",
}

export interface NewRoom {
  [RoomField.PERSON]: number;
  [RoomField.BUILDING]: number;
  [RoomField.GUESTS]: number;
  [RoomField.BEDROOMS]: number;
  [RoomField.BEDS]: number;
  [RoomField.BATHROOMS]: number;
  [RoomField.PRICE]: number;
  [RoomField.DESCRIPTION]: string;
  [RoomField.PHOTOS]: string[];
  [RoomField.AMENITIES]: RoomAmenities[];
}

export type ChangedRoom = Partial<NewRoom> & Entity;

export const ROOMS_IDS: Record<RoomField, string> = {
  [RoomField.ID]: "RoomId",
  [RoomField.PERSON]: "RoomPerson",
  [RoomField.BUILDING]: "RoomBuilding",
  [RoomField.GUESTS]: "RoomGuests",
  [RoomField.BEDROOMS]: "RoomBedrooms",
  [RoomField.BEDS]: "RoomBeds",
  [RoomField.BATHROOMS]: "RoomBathrooms",
  [RoomField.PRICE]: "RoomPrice",
  [RoomField.DESCRIPTION]: "RoomDescription",
  [RoomField.PHOTOS]: "RoomPhotos",
  [RoomField.AMENITIES]: "RoomAmenities",
  [RoomField.CREATED]: "RoomCreated",
  [RoomField.UPDATED]: "RoomUpdated",
};
