import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { filter } from "rxjs/operators";

import { Building } from "@app/buildings/common";
import { BuildingFacade } from "@app/buildings/state";

@Injectable()
export class BuildingService {
  buildings$: Observable<Building[]> = this.buildingFacade.buildings$.pipe(
    filter<any>(Boolean),
  );
  building$ = (id: number): Observable<Building> =>
    this.buildingFacade.building$(id).pipe(filter<any>(Boolean));

  buildingByPerson$ = (id: number): Observable<Building[]> =>
    this.buildingFacade.buildingByPerson$(id).pipe(filter<any>(Boolean));
  constructor(private readonly buildingFacade: BuildingFacade) {}

  clear() {
    this.buildingFacade.clear();
  }
}
