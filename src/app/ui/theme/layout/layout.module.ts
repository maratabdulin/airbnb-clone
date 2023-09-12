import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutComponent } from "src/app/ui/theme/layout/components/layout.component";
import { RouterLink, RouterOutlet } from "@angular/router";
import { FooterModule } from "src/app/ui/theme/layout/modules/footer/footer.module";
import { HeaderModule } from "src/app/ui/theme/layout/modules/header/header.module";
import { MainModule } from "src/app/ui/theme/layout/modules/main/main.module";

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
