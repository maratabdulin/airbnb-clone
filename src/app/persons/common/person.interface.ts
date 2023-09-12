import { Entity } from "@app/core/common";
export interface PersonDto {
  readonly id: number;
  readonly firstName: string;
  readonly lastName: string;
  readonly middleName: string | null;
  readonly phone: string;
  readonly buildings: number[];
  readonly avatar?: string;
  readonly created: string;
  readonly updated: string;
}

export interface PersonEntity {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string | null;
  phone: string;
  buildings: number[];
  avatar?: string;
  created: string;
  updated: string;

  personRemoveRun: boolean;
  personRemoveError: Record<string, any> | null;
  personChangeRun: boolean;
  personChangeError: Record<string, any> | null;
  personBuildingRemoveRun: boolean;
  personBuildingRemoveError: Record<string, any> | null;
  personBuildingAddRun: boolean;
  personBuildingAddError: Record<string, any> | null;
}

export interface Person extends PersonEntity {}

export enum PersonField {
  ID = "id",
  FIRST_NAME = "firstName",
  LAST_NAME = "lastName",
  MIDDLE_NAME = "middleName",
  PHONE = "phone",
  BUILDINGS = "buildings",
  AVATAR = "avatar",
  CREATED = "created",
  UPDATED = "updated",
}

export interface NewPerson {
  [PersonField.FIRST_NAME]: string;
  [PersonField.LAST_NAME]: string;
  [PersonField.MIDDLE_NAME]: string | null;
  [PersonField.PHONE]: string;
  [PersonField.BUILDINGS]: number[];
  [PersonField.AVATAR]: string;
}

export type ChangedPerson = Partial<NewPerson> & Entity;

export const PERSON_IDS: Record<PersonField, string> = {
  [PersonField.ID]: "PersonId",
  [PersonField.FIRST_NAME]: "PersonPerson",
  [PersonField.LAST_NAME]: "PersonBuilding",
  [PersonField.MIDDLE_NAME]: "PersonGuest",
  [PersonField.PHONE]: "PersonPhone",
  [PersonField.BUILDINGS]: "PersonBuildings",
  [PersonField.AVATAR]: "PersonAvatar",
  [PersonField.CREATED]: "PersonCreated",
  [PersonField.UPDATED]: "PersonUpdated",
};

export interface ChangePersonBuilding {
  id: number;
  building: number;
}

export interface ChangedPersonBuilding {
  id: number;
  buildings: number[];
}
