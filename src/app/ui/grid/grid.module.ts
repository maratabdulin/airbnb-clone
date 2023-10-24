import { NgModule } from "@angular/core";

import { ColumnModule } from "./column/column.module";
import { ColumnComponent } from "./column/column.component";
import { RowModule } from "./row/row.module";
import { RowComponent } from "./row/row.component";

@NgModule({
  imports: [ColumnModule, RowModule],
  exports: [ColumnComponent, RowComponent],
})
export class GridModule {}
