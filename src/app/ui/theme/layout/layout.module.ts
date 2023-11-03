import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterOutlet } from "@angular/router";

import { LayoutComponent } from "./components/layout.component";
import { FooterModule } from "./components/footer/footer.module";
import { HeaderModule } from "./components/header/header.module";
import { MainModule } from "./components/main/main.module";

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    HeaderModule,
    MainModule,
    FooterModule,
    CommonModule,
    RouterOutlet,
    RouterLink,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
