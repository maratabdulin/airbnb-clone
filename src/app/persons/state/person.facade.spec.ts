import { of } from "rxjs";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { PersonStorage } from "@app/persons/storage";
import { TestBed } from "@angular/core/testing";
import { readFirst } from "@app/core/store/utils";

import { PERSON_FEATURE_KEY, reducer } from "./person.reducer";
import { PERSONS_STUB } from "./person.stub";
import { PersonFacade } from "./person.facade";
import { PersonEffects } from "./person.effects";

describe("PersonFacade", () => {
  let facade: PersonFacade;
  describe("used in NgModule", () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(PERSON_FEATURE_KEY, reducer),
          EffectsModule.forFeature([PersonEffects]),
        ],
        providers: [
          PersonFacade,
          {
            provide: PersonStorage,
            useValue: {
              get: jest.fn(() => of(PERSONS_STUB)),
            } as Partial<PersonStorage>,
          },
        ],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}

      TestBed.configureTestingModule({ imports: [RootModule] });
      facade = TestBed.inject(PersonFacade);
    });

    // @ts-ignore
    it("loadPersons() should load persons", async (done) => {
      facade.load();
      const building = await readFirst(facade.persons$);
      expect(building?.length).toBe(PERSONS_STUB.length);
      done();
    });
  });
});
