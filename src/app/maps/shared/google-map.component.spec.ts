import { Component } from "@angular/core";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { MockModule } from "ng-mocks";
import { ReplaySubject } from "rxjs";
import { GoogleMapsModule } from "@angular/google-maps";
import { mock, when } from "ts-mockito";

import { BOOKING_VARIANT_STUB } from "@app/booking/state";
import { castMapMarkerConfigs } from "@app/booking/service";
import { providerOf } from "@app/core/testing";
import { GoogleMapsService } from "@app/maps/service";

import { GoogleMapComponentsPo } from "./google-maps-shared.po";
import { GoogleMapComponent } from "./google-map.component";

@Component({
  template: `<app-google-map
    automaion-id="google-map"
    [markers]="markers"
  ></app-google-map>`,
})
export class WrapperComponent {
  options = {
    center: {
      lat: 59.0,
      lng: 30.0,
    },
    zoom: 14,
  };
  markers = castMapMarkerConfigs([BOOKING_VARIANT_STUB]);
}

describe("GoogleMapComponent", () => {
  let pageObject: GoogleMapComponentsPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;
  let googleMapsServiceMock: GoogleMapsService;
  let loaded$: ReplaySubject<boolean>;

  beforeEach(() => {
    googleMapsServiceMock = mock(GoogleMapsService);
    loaded$ = new ReplaySubject<boolean>(1);
  });

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MockModule(GoogleMapsModule)],
      declarations: [GoogleMapComponent, WrapperComponent],
      providers: [providerOf(GoogleMapsService, googleMapsServiceMock)],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new GoogleMapComponentsPo(fixtureWrapper);
    when(googleMapsServiceMock.load()).thenReturn(loaded$);
  });

  it("should create", () => {
    fixtureWrapper.detectChanges();
    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it("should show markers", () => {
    fixtureWrapper.detectChanges();
    loaded$.next(true);
    fixtureWrapper.detectChanges();
    expect(pageObject.googleMapMarkers.length).toBe(1);
  });
});
