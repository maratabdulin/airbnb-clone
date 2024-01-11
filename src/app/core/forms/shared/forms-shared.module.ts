import { NgModule } from "@angular/core";

import { ExtractFormGroupPipe } from "./extract-form-group.pipe";
import { ExtractFormControlPipe } from "./extract-form-control.pipe";

@NgModule({
  declarations: [ExtractFormGroupPipe, ExtractFormControlPipe],
  exports: [ExtractFormGroupPipe, ExtractFormControlPipe],
})
export class FormsSharedModule {}
