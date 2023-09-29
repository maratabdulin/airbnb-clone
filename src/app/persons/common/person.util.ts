import { NewPerson, PersonEntity } from "./person.interface";

export function createPersonFromNewPerson(
  rooms: PersonEntity[],
  newRoom: NewPerson,
): PersonEntity {
  let lastId = 1;
  rooms?.forEach((room) => {
    if (room.id > lastId) {
      lastId = room.id;
    }
  });
  const created = new Date().toISOString();

  return {
    ...newRoom,
    id: lastId + 1,
    created,
    updated: created,
    personRemoveRun: false,
    personRemoveError: null,
    personBuildingAddRun: false,
    personBuildingAddError: null,
    personChangeRun: false,
    personChangeError: null,
    personBuildingRemoveError: null,
    personBuildingRemoveRun: false,
  };
}
