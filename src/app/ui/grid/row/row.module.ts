import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RowComponent } from "./row.component";

@NgModule({
  imports: [CommonModule],
  declarations: [RowComponent],
  exports: [RowComponent],
})
export class RowModule {}
