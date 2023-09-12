import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./components/footer.component";
import { IconsModule } from "@app/ui/icons";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  imports: [RouterModule, IconsModule, MatButtonModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule {}
