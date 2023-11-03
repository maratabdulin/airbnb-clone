import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { HttpClientModule } from "@angular/common/http";
import { MatIconModule } from "@angular/material/icon";

import { IconsModule } from "@app/ui/icons";

import { FooterComponent } from "src/app/ui/theme/layout/components/footer/footer.component";

@NgModule({
  imports: [IconsModule, MatButtonModule, HttpClientModule, MatIconModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule {}
