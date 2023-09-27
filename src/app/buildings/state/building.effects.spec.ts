import { Observable } from "rxjs";
import { TestBed } from "@angular/core/testing";
import { provideMockActions } from "@ngrx/effects/testing";
import { provideMockStore } from "@ngrx/store/testing";
import { cold, hot } from "jasmine-marbles";

import { BuildingStorage } from "@app/buildings/storage";

import { BuildingEffects } from "./building.effects";
import * as BuildingsActions from "./building.actions";
import { BUILDING_FEATURE_KEY, buildingInitialState } from "./building.reducer";
import { BUILDINGS_LOAD_ERROR, BUILDINGS_STUB } from "./building.stub";

describe("BuildingEffects", () => {
  let actions$: Observable<any>;
  let effects: BuildingEffects;
  let storage: BuildingStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BuildingEffects,
        provideMockActions(() => actions$),
        provideMockStore({
          initialState: { [BUILDING_FEATURE_KEY]: buildingInitialState },
        }),
        {
          provide: BuildingStorage,
          useValue: {} as Partial<BuildingStorage>,
        },
      ],
    });

    effects = TestBed.inject(BuildingEffects);
    storage = TestBed.inject(BuildingStorage);
  });

  it("should be created", () => {
    expect(effects).toBeTruthy();
  });

  describe("loadBuildings$", () => {
    it("should return load buildings success", () => {
      const action = BuildingsActions.loadBuildings();
      const completion = BuildingsActions.loadBuildingsSuccess({
        payload: BUILDINGS_STUB,
      });

      actions$ = hot("-a-|", { a: action });
      const response = cold("-a-|", { a: BUILDINGS_STUB });
      storage.get = jest.fn(() => response);
      const expected = cold("--a-|", { a: completion });
      expect(effects.loadBuildings$).toBeObservable(expected);
    });

    it("should return load buildings failure", () => {
      const action = BuildingsActions.loadBuildings();
      const completion = BuildingsActions.loadBuildingsFailure({
        payload: BUILDINGS_LOAD_ERROR,
      });
      actions$ = hot("-a-|", { a: action });
      const response = cold("-#|", {}, BUILDINGS_LOAD_ERROR);
      const expected = cold("--a|", { a: completion });
      storage.get = jest.fn(() => response);
      expect(effects.loadBuildings$).toBeObservable(expected);
    });
  });
});
