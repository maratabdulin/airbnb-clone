import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";

import { PersonEntity } from "@app/persons/common";

import * as PersonActions from "./person.action";

export const PERSON_FEATURE_KEY = "persons";

export interface PersonState extends EntityState<PersonEntity> {
  personsLoadError: Record<string, any> | null;
  personsLoadRun: boolean;
  personCreateError: Record<string, any> | null;
  personCreateRun: boolean;
  personBuildingsClearError: Record<string, any> | null;
  personBuildingsClearRun: boolean;
}

export interface PersonPartialState {
  readonly [PERSON_FEATURE_KEY]: PersonState;
}

export const personAdapter: EntityAdapter<PersonEntity> =
  createEntityAdapter<PersonEntity>();

export const personInitialState: PersonState = personAdapter.getInitialState({
  personsLoadRun: false,
  personsLoadError: null,
  personCreateRun: false,
  personCreateError: null,
  personBuildingsClearRun: false,
  personBuildingsClearError: null,
});

export const reducer = createReducer(
  personInitialState,
  on(PersonActions.loadPersons, (state) => ({
    ...state,
    personsLoadError: null,
    personsLoadRun: true,
  })),
  on(PersonActions.loadPersonsSuccess, (state, { payload }) =>
    personAdapter.setAll(payload, {
      ...state,
      personsLoadRun: false,
    }),
  ),
  on(PersonActions.loadPersonsFailure, (state, { payload }) => ({
    ...state,
    personsLoadError: payload,
    personsLoadRun: false,
  })),
  on(PersonActions.clearPersons, (state) =>
    personAdapter.removeAll({
      ...state,
    }),
  ),
  on(PersonActions.removePerson, (state, { payload }) =>
    personAdapter.updateOne(
      {
        id: payload["id"],
        changes: {
          personRemoveRun: true,
        },
      },
      state,
    ),
  ),
  on(PersonActions.removePersonSuccess, (state, { payload }) =>
    personAdapter.removeOne(payload.id, state),
  ),
  on(PersonActions.removePersonFailure, (state, { payload }) =>
    personAdapter.updateOne(
      {
        id: payload["id"],
        changes: {
          personRemoveRun: false,
          personRemoveError: payload,
        },
      },
      state,
    ),
  ),
  on(PersonActions.addPerson, (state) => ({
    ...state,
    personCreateError: null,
    personCreateRun: true,
  })),
  on(PersonActions.addPersonSuccess, (state, { payload }) =>
    personAdapter.addOne(payload, { ...state, personCreateRun: false }),
  ),
  on(PersonActions.addPersonFailure, (state, { payload }) => ({
    ...state,
    personCreateError: payload,
    personCreateRun: false,
  })),
  on(PersonActions.changePerson, (state, { payload }) =>
    personAdapter.updateOne(
      {
        id: payload["id"],
        changes: {
          personChangeRun: true,
        },
      },
      state,
    ),
  ),
  on(PersonActions.changePersonSuccess, (state, { payload }) =>
    personAdapter.updateOne(
      {
        id: payload["id"],
        changes: {
          ...payload,
          personChangeRun: false,
          updated: new Date().toISOString(),
        },
      },
      state,
    ),
  ),
  on(PersonActions.changePersonFailure, (state, { payload }) =>
    personAdapter.updateOne(
      {
        id: payload["id"],
        changes: {
          personChangeRun: false,
          personChangeError: payload,
        },
      },
      state,
    ),
  ),
  on(PersonActions.removePersonBuilding, (state, { payload }) =>
    personAdapter.updateOne(
      {
        id: payload["id"],
        changes: {
          personBuildingRemoveRun: true,
        },
      },
      state,
    ),
  ),
  on(PersonActions.removePersonBuildingSuccess, (state, { payload }) =>
    personAdapter.updateOne(
      {
        id: payload["id"],
        changes: {
          personBuildingRemoveRun: false,
          buildings: payload.buildings,
        },
      },
      state,
    ),
  ),
  on(PersonActions.removePersonBuildingFailure, (state, { payload }) =>
    personAdapter.updateOne(
      {
        id: payload["id"],
        changes: {
          personBuildingRemoveRun: false,
          personBuildingRemoveError: payload,
        },
      },
      state,
    ),
  ),
  on(PersonActions.clearPersonsBuildings, (state) => ({
    ...state,
    personBuildingsClearRun: true,
    personBuildingsClearError: null,
  })),
  on(PersonActions.clearPersonsBuildingsSuccess, (state, { payload }) =>
    personAdapter.setAll(payload, { ...state, personBuildingsClearRun: false }),
  ),
  on(PersonActions.clearPersonsBuildingsFailure, (state, { payload }) => ({
    ...state,
    personBuildingsClearError: payload,
    personBuildingsClearRun: false,
  })),
  on(PersonActions.addPersonBuilding, (state, { payload }) =>
    personAdapter.updateOne(
      {
        id: payload["id"],
        changes: {
          personBuildingAddRun: true,
        },
      },
      state,
    ),
  ),
  on(PersonActions.addPersonBuildingSuccess, (state, { payload }) =>
    personAdapter.updateOne(
      {
        id: payload["id"],
        changes: {
          ...payload,
          personBuildingAddRun: false,
        },
      },
      state,
    ),
  ),
  on(PersonActions.addPersonBuildingFailure, (state, { payload }) =>
    personAdapter.updateOne(
      {
        id: payload["id"],
        changes: {
          personBuildingAddRun: false,
          personBuildingAddError: payload,
        },
      },
      state,
    ),
  ),
);
