import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MainComponent } from "src/app/ui/theme/layout/modules/main/components/main.component";

@NgModule({
  imports: [RouterModule],
  declarations: [MainComponent],
  exports: [MainComponent],
})
export class MainModule {}
