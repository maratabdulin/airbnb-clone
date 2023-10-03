import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { filter } from "rxjs/operators";

import { PersonFacade } from "@app/persons/state";
import { Person } from "@app/persons/common";

@Injectable()
export class PersonService {
  persons$: Observable<Person[]> = this.personFacade.persons$.pipe(
    filter<any>(Boolean),
  );
  person$ = (id: number): Observable<Person> =>
    this.personFacade.person$(id).pipe(filter<any>(Boolean));

  constructor(private readonly personFacade: PersonFacade) {}
}
