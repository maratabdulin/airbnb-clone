import {
  ChangedPerson,
  NewPerson,
  Person,
  PersonField,
} from "@app/persons/common";
import { Entity } from "@app/core/common";

export const PERSON_STUB: Person = {
  id: 1,
  lastName: "Smith",
  firstName: "Sam",
  middleName: "Preston",
  buildings: [2],
  phone: "55512345",
  avatar: "/assets/images/avatars/avatar-1.jpeg",
  created: "2023-09-28T02:15:34.000Z",
  updated: "2023-09-28T02:16:34.000Z",

  personChangeRun: false,
  personChangeError: null,
  personRemoveRun: false,
  personRemoveError: null,
  personBuildingRemoveRun: false,
  personBuildingRemoveError: null,
  personBuildingAddRun: false,
  personBuildingAddError: null,
};

export const PERSONS_STUB: Person[] = [PERSON_STUB];

export const PERSON_LOAD_ERROR = { code: 0, message: "Failure load persons" };

export const ENTITY_STUB: Entity = {
  id: PERSON_STUB.id,
};

export const NEW_PERSON_STUB: NewPerson = {
  [PersonField.FIRST_NAME]: "Piter",
  [PersonField.LAST_NAME]: "Parker",
  [PersonField.MIDDLE_NAME]: "Josh",
  [PersonField.PHONE]: "55587642",
  [PersonField.BUILDINGS]: [1, 2],
  [PersonField.AVATAR]: "avatar-2.jpeg",
};

export const CHANGED_PERSON_STUB: ChangedPerson = {
  [PersonField.ID]: 1,
  [PersonField.FIRST_NAME]: "Piter",
  [PersonField.FIRST_NAME]: "Piter",
  [PersonField.LAST_NAME]: "Parker",
  [PersonField.MIDDLE_NAME]: "Josh",
  [PersonField.PHONE]: "55587642",
  [PersonField.BUILDINGS]: [1, 2],
  [PersonField.AVATAR]: "avatar-2.jpeg",
};
