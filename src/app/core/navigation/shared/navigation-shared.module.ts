import { NgModule } from "@angular/core";

import { NavPathPipe } from "./nav-path.pipe";

@NgModule({
  declarations: [NavPathPipe],
  exports: [NavPathPipe],
})
export class NavigationSharedModule {}
