import {
  Building,
  BuildingField,
  ChangedBuilding,
  NewBuilding,
} from "@app/buildings/common";
import { Entity } from "@app/core/common";

export const BUILDING_STUB: Building = {
  id: 1,
  person: 1,
  rooms: [1, 2, 3],
  name: "Some Hotel",
  city: "Girona",
  lat: 41.97927,
  lng: 2.818075,
  address: "Plaça Espanya, 1",
  created: "2021-05-11T01:14:42.988Z",
  updated: "2021-05-11T01:14:42.988Z",
  buildingChangeRun: false,
  buildingChangeError: null,
  buildingRoomAddRun: false,
  buildingRoomAddError: null,
  buildingRoomRemoveRun: false,
  buildingRoomRemoveError: null,
  buildingRemoveRun: false,
  buildingRemoveError: null,
};

export const BUILDINGS_STUB: Building[] = [BUILDING_STUB];

export const BUILDINGS_LOAD_ERROR = {
  code: 0,
  message: "Failure load message",
};

export const ENTITY_STUB: Entity = {
  id: 1,
};

export const NEW_BUILDING_STUB: NewBuilding = {
  [BuildingField.NAME]: "Some Name",
  [BuildingField.ROOMS]: [1, 2, 3],
  [BuildingField.PERSON]: 1,
  [BuildingField.CITY]: "Some City",
  [BuildingField.ADDRESS]: "Some Address",
  [BuildingField.UPDATED]: "2023-09-30",
  [BuildingField.CREATED]: "2023-09-30",
  [BuildingField.LNG]: 41.01,
  [BuildingField.LAT]: 2.45,
};

export const CHANGED_BUILDING_STUB: ChangedBuilding = {
  [BuildingField.ID]: 1,
  [BuildingField.NAME]: "Some Name",
  [BuildingField.ROOMS]: [1, 2, 3],
  [BuildingField.PERSON]: 1,
  [BuildingField.CITY]: "Some City",
  [BuildingField.ADDRESS]: "Some Address",
  [BuildingField.UPDATED]: "2023-09-30",
  [BuildingField.CREATED]: "2023-09-30",
  [BuildingField.LNG]: 41.01,
  [BuildingField.LAT]: 2.45,
};
