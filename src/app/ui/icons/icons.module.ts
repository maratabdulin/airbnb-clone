import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

export interface IconConfig {
  name: string;
  path: string;
}

const icons: IconConfig[] = [
  {
    name: "appFacebook",
    path: "assets/images/social/facebook.svg",
  },
  {
    name: "appInstagram",
    path: "assets/images/social/instagram.svg",
  },
  {
    name: "appTelegram",
    path: "assets/images/social/telegram.svg",
  },
  {
    name: "appTwitter",
    path: "assets/images/social/twitter.svg",
  },
  {
    name: "appYoutube",
    path: "assets/images/social/youtube.svg",
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, MatIconModule, HttpClientModule],
  exports: [MatIconModule],
})
export class IconsModule {
  constructor(
    private readonly matIconRegistry: MatIconRegistry,
    private readonly domSanitizer: DomSanitizer,
  ) {
    icons.forEach((icon) => this.add(icon));
  }

  private add(config: IconConfig) {
    this.matIconRegistry.addSvgIcon(
      config.name,
      this.domSanitizer.bypassSecurityTrustResourceUrl(config.path),
    );
  }
}
