import { Component } from "@angular/core";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { anything, deepEqual, mock, verify, when } from "ts-mockito";
import { RouterTestingModule } from "@angular/router/testing";
import { MatButtonModule } from "@angular/material/button";
import { MockModule } from "ng-mocks";

import { BOOKING_VARIANT_STUB } from "@app/booking/state";
import { NavigationService } from "@app/core/navigation/service";
import { NavigationSharedModule } from "@app/core/navigation/shared";
import { BookingSharedModule } from "@app/booking/shared";
import { GridModule } from "@app/ui/grid";
import { CarouselModule } from "@app/ui/carousel";
import { providerOf } from "@app/core/testing";
import { NavigationPath } from "@app/core/navigation/common";

import { BookingPortletComponent } from "./booking-portlet.component";
import { BookingPortletComponentPo } from "./booking-portlet.po";

@Component({
  template: `<app-booking-portlet
    automation-id="booking-portlet"
    [bookingVariant]="bookingVariant"
  ></app-booking-portlet>`,
})
class WrapperComponent {
  bookingVariant = BOOKING_VARIANT_STUB;
}

describe("BookingPortletComponent", () => {
  let pageObject: BookingPortletComponentPo<WrapperComponent>;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;
  let navigationServiceMock: NavigationService;

  beforeEach(() => {
    navigationServiceMock = mock(NavigationService);
  });

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatButtonModule,
        NavigationSharedModule,
        MockModule(BookingSharedModule),
        MockModule(GridModule),
        MockModule(CarouselModule),
      ],
      declarations: [BookingPortletComponent, WrapperComponent],
      providers: [providerOf(NavigationService, navigationServiceMock)],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new BookingPortletComponentPo(fixtureWrapper);
    when(
      navigationServiceMock.navigateByUrl(anything(), anything(), anything()),
    ).thenReturn();
    when(navigationServiceMock.getRoute(anything(), anything())).thenReturn([
      "rooms",
      BOOKING_VARIANT_STUB.firstRoom?.id ?? 1,
    ]);
  });

  it("should create", () => {
    fixtureWrapper.detectChanges();
    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it("should set carousel", () => {
    fixtureWrapper.detectChanges();
    expect(pageObject.bookingPortletCarousel).toBeTruthy();
  });

  it("should set title", () => {
    fixtureWrapper.detectChanges();
    expect(pageObject.bookingPortletPriceTitle).toBe(BOOKING_VARIANT_STUB.name);
  });

  it("should set address", () => {
    fixtureWrapper.detectChanges();
    expect(pageObject.bookingPortletAddressText).toBe(
      `Address: ${BOOKING_VARIANT_STUB.address}`,
    );
  });

  it("should set price", () => {
    fixtureWrapper.detectChanges();
    expect(pageObject.bookingPortletPriceText).toBe(
      `Price per night: ${BOOKING_VARIANT_STUB.firstRoom?.price} €`,
    );
  });

  // it("should set action path", () => {
  //   fixtureWrapper.detectChanges();
  //   expect(pageObject.bookingPortletActionHref).toBe("/rooms/1");
  // });

  it("should set call method navigate", () => {
    fixtureWrapper.detectChanges();
    pageObject.triggerBookingPortletSelected();
    fixtureWrapper.detectChanges();
    verify(
      navigationServiceMock.navigateByUrl(
        NavigationPath.ROOM_PAGE,
        deepEqual({ id: BOOKING_VARIANT_STUB.firstRoom?.id }),
      ),
    ).once();
  });
});
