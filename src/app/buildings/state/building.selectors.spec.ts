import { createEntityState, createStore } from "@app/core/store/utils";

import * as BuildingSelectors from "./building.selectors";
import {
  BUILDING_FEATURE_KEY,
  buildingInitialState,
  BuildingPartialState,
  BuildingState,
} from "./building.reducer";
import {
  BUILDING_STUB,
  BUILDINGS_LOAD_ERROR,
  BUILDINGS_STUB,
} from "./building.stub";

describe("Building Selectors", () => {
  const getState = (payload: Partial<BuildingState>): BuildingPartialState =>
    createStore(BUILDING_FEATURE_KEY, buildingInitialState, payload);

  it("selectBuildings() should return buildings", () => {
    const state = getState({ ...createEntityState(BUILDINGS_STUB) });
    const result = BuildingSelectors.selectBuildings(state);
    expect(result?.length).toBe(BUILDINGS_STUB.length);
  });

  it("selectBuildingsLoadRun() should return buildingsLoadRun", () => {
    const state = getState({ buildingsLoadRun: true });
    const result = BuildingSelectors.selectBuildingsLoadRun(state);
    expect(result).toBeTruthy();
  });

  it("selectBuildingsLoadError() should return buildingsLoadError", () => {
    const state = getState({ buildingsLoadError: BUILDINGS_LOAD_ERROR });
    const result = BuildingSelectors.selectBuildingsLoadError(state);
    expect(result).toEqual(BUILDINGS_LOAD_ERROR);
  });

  it("selectBuildingCreateError() should return buildingCreateError", () => {
    const state = getState({ buildingCreateError: BUILDINGS_LOAD_ERROR });
    const result = BuildingSelectors.selectBuildingCreateError(state);
    expect(result).toEqual(BUILDINGS_LOAD_ERROR);
  });

  it("selectBuildingsCreateRun() should return buildingsLoadRun", () => {
    const state = getState({ buildingCreateRun: true });
    const result = BuildingSelectors.selectBuildingCreateRun(state);
    expect(result).toBeTruthy();
  });

  it("selectBuilding() should return building by id", () => {
    const state = getState({ ...createEntityState(BUILDINGS_STUB) });
    const result = BuildingSelectors.selectBuilding(BUILDING_STUB)(state);
    expect(result).toEqual(BUILDING_STUB);
  });
});
