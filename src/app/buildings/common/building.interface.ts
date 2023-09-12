import { Entity } from "@app/core/common";

export interface BuildingDto {
  readonly id: number;
  readonly name: string;
  readonly rooms: number[];
  readonly person: number;
  readonly city: string;
  readonly address: string;
  readonly created: string;
  readonly updated: string;
  readonly lat: number;
  readonly lng: number;
}

export interface BuildingEntity {
  id: number;
  name: string;
  rooms: number[];
  person: number;
  city: string;
  address: string;
  created: string;
  updated: string;
  lat: number;
  lng: string;

  buildingRemoveRun: boolean;
  buildingRemoveError: Record<string, any> | null;
  buildingChangeRun: boolean;
  buildingChangeError: Record<string, any> | null;
  buildingRoomRemoveRun: boolean;
  buildingRoomRemoveError: Record<string, any> | null;
  buildingRoomAddRun: boolean;
  buildingRoomAddError: Record<string, any> | null;
}

export interface Building extends BuildingEntity {}

export enum BuildingField {
  ID = "id",
  NAME = "name",
  ROOMS = "rooms",
  PERSON = "person",
  CITY = "city",
  ADDRESS = "address",
  CREATED = "created",
  UPDATED = "updated",
  LAT = "lat",
  LNG = "lng",
}

export interface NewBuilding {
  [BuildingField.NAME]: string;
  [BuildingField.ROOMS]: number[];
  [BuildingField.PERSON]: number;
  [BuildingField.CITY]: string;
  [BuildingField.ADDRESS]: string;
  [BuildingField.CREATED]: string;
  [BuildingField.UPDATED]: string;
  [BuildingField.LAT]: number;
  [BuildingField.LNG]: number;
}

export type ChangedBuilding = Partial<NewBuilding> & Entity;

export const BUILDING_IDS: Record<BuildingField, string> = {
  [BuildingField.ID]: "BuildingId",
  [BuildingField.NAME]: "BuildingName",
  [BuildingField.ROOMS]: "BuildingRooms",
  [BuildingField.PERSON]: "BuildingPerson",
  [BuildingField.CITY]: "BuildingCity",
  [BuildingField.ADDRESS]: "BuildingAddress",
  [BuildingField.CREATED]: "BuildingCreated",
  [BuildingField.UPDATED]: "BuildingUpdated",
  [BuildingField.LAT]: "BuildingLat",
  [BuildingField.LNG]: "BuildingLng",
};

export interface ChangeBuildingRoom {
  id: number;
  room: number;
}

export interface ChangedBuildingRoom {
  id: number;
  rooms: number[];
}
