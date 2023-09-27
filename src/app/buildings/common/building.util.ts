import {
  BuildingEntity,
  BuildingField,
  NewBuilding,
} from "./building.interface";

export function createBuildingFromNewBuilding(
  buildings: BuildingEntity[],
  newBuilding: NewBuilding,
): BuildingEntity {
  let lastId = 1;
  buildings?.forEach((building) => {
    if (building.id > lastId) {
      lastId = building.id;
    }
  });
  const created = new Date().toISOString();

  return {
    ...newBuilding,
    id: lastId + 1,
    created,
    updated: created,
    rooms: newBuilding[BuildingField.ROOMS] ?? [],
    buildingRemoveRun: false,
    buildingRemoveError: null,
    buildingRoomAddRun: false,
    buildingRoomAddError: null,
    buildingRoomRemoveRun: false,
    buildingRoomRemoveError: null,
    buildingChangeRun: false,
    buildingChangeError: null,
  };
}
