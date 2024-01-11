import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser, isPlatformServer } from "@angular/common";

@Injectable({
  providedIn: "root",
})
export class PlatformService {
  readonly isBrowser: boolean;
  readonly isServer: boolean;

  constructor(@Inject(PLATFORM_ID) private readonly platformId: any) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.isServer = isPlatformServer(this.platformId);
  }
}
