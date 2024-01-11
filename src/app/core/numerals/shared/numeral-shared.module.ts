import { NgModule } from "@angular/core";

import { NumeralToWordPipe } from "./numeral-to-word.pipe";

@NgModule({
  declarations: [NumeralToWordPipe],
  exports: [NumeralToWordPipe],
})
export class NumeralSharedModule {}
