import * as PersonAction from "./person.action";
import * as PersonSelectors from "./person.selectors";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import {
  ChangedPerson,
  ChangePersonBuilding,
  NewPerson,
  Person,
} from "@app/persons/common";
import { PersonState } from "src/app/persons/state/person.reducer";
import { Action, select, Store } from "@ngrx/store";
import { Actions, ofType } from "@ngrx/effects";
import { Entity } from "@app/core/common";

@Injectable()
export class PersonFacade {
  persons$: Observable<Person[]> = this.store.pipe(
    select(PersonSelectors.selectPersons),
  );
  personsLoadError$ = this.store.pipe(
    select(PersonSelectors.selectPersonsLoadError),
  );
  personsLoadRun$ = this.store.pipe(
    select(PersonSelectors.selectPersonsLoadRun),
  );
  personAdded$: Observable<Person> = this.actions.pipe(
    ofType(PersonAction.addPersonSuccess),
    map((action) => action.payload),
  );
  personChanged$: Observable<ChangedPerson> = this.actions.pipe(
    ofType(PersonAction.changePersonSuccess),
    map((action) => action.payload),
  );
  person$ = (id: number): Observable<Person | null> =>
    this.store.pipe(select(PersonSelectors.selectPerson({ id })));

  constructor(
    private readonly store: Store<PersonState>,
    private readonly actions: Actions,
  ) {}

  clear(): void {
    this.dispatch(PersonAction.clearPersonsBuildings());
  }

  load(): void {
    this.dispatch(PersonAction.loadPersons());
  }

  removePerson(payload: Entity): void {
    this.dispatch(PersonAction.removePerson({ payload }));
  }

  removePersonBuilding(payload: ChangePersonBuilding): void {
    this.dispatch(PersonAction.removePersonBuilding({ payload }));
  }

  addPersonBuilding(payload: ChangePersonBuilding): void {
    this.dispatch(PersonAction.addPersonBuilding({ payload }));
  }

  addPerson(payload: NewPerson): void {
    this.dispatch(PersonAction.addPerson({ payload }));
  }

  changePerson(payload: ChangedPerson): void {
    this.dispatch(PersonAction.changePerson({ payload }));
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
