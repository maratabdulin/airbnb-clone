import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ColumnComponent } from "./column.component";

@NgModule({
  imports: [CommonModule],
  exports: [ColumnComponent],
  declarations: [ColumnComponent],
})
export class ColumnModule {}
