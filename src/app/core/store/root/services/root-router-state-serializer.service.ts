import { Injectable } from "@angular/core";
import { RouterStateSerializer } from "@ngrx/router-store";
import { RouterUrlState } from "src/app/core/store/root/interfaces/router-url-state.interface";
import { RouterStateSnapshot } from "@angular/router";

@Injectable()
export class RootRouterStateSerializer
  implements RouterStateSerializer<RouterUrlState>
{
  serialize(routerState: RouterStateSnapshot): RouterUrlState {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: { queryParams },
    } = routerState;
    const { params, data } = route;
    return { url, params, queryParams, data };
  }
}
