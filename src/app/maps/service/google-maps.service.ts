import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable, of, tap } from "rxjs";
import { catchError } from "rxjs/operators";

import { ConfigService } from "@app/core/config";
@Injectable()
export class GoogleMapsService {
  private loaded = false;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly configService: ConfigService,
  ) {}

  load(): Observable<boolean> {
    return !this.loaded
      ? this.httpClient
          .jsonp(
            `https://maps.googleapis.com/maps/api/js?key=${
              this.configService.getConfig().googleMapKey
            }`,
            "callback",
          )
          .pipe(
            tap(() => (this.loaded = true)),
            map(() => true),
            catchError(() => of(false)),
          )
      : of(this.loaded);
  }
}
