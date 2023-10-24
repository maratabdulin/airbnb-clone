import { NgModule } from "@angular/core";

import { ColumnModule } from "./column/column.module";
import { ColumnComponent } from "./column/column.component";

@NgModule({
  imports: [ColumnModule],
  exports: [ColumnComponent],
})
export class GridModule {}
