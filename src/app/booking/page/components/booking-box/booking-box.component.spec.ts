import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { anything, deepEqual, mock, verify, when } from "ts-mockito";
import { ReplaySubject } from "rxjs";

import { BookingService } from "@app/booking/service";
import { BookingVariant } from "@app/booking/common";
import { BookingSharedModule } from "@app/booking/shared";
import { BOOKING_VARIANT_STUB } from "@app/booking/state";
import { NavigationService } from "@app/core/navigation/service";
import { providerOf } from "@app/core/testing";
import { SharedModule } from "@app/ui/shared";

import { BookingBoxComponentPo } from "./booking-box.po";
import { BookingBoxComponent } from "./booking-box.component";
import { NavigationPath } from "@app/core/navigation/common";

describe("BookingBoxComponent", () => {
  let pageObject: BookingBoxComponentPo;
  let fixture: ComponentFixture<BookingBoxComponent>;
  let bookingServiceMock: BookingService;
  let navigationServiceMock: NavigationService;
  let bookingVariant$: ReplaySubject<BookingVariant>;

  beforeEach(() => {
    bookingServiceMock = mock(BookingService);
    navigationServiceMock = mock(NavigationService);
    bookingVariant$ = new ReplaySubject<BookingVariant>(1);
  });

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BookingSharedModule, SharedModule],
      declarations: [BookingBoxComponent],
      providers: [
        providerOf(BookingService, bookingServiceMock),
        providerOf(NavigationService, navigationServiceMock),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingBoxComponent);
    pageObject = new BookingBoxComponentPo(fixture);
    when(bookingServiceMock.bookingVariant$).thenReturn(bookingVariant$);
    when(
      navigationServiceMock.navigateByUrl(anything(), anything(), anything()),
    ).thenReturn();
  });

  it("should create", () => {
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it("should set background image for component", () => {
    fixture.detectChanges();
    expect(pageObject.bookingBoxImagesStyles).toBeNull();
    bookingVariant$.next(BOOKING_VARIANT_STUB);
    fixture.detectChanges();
    expect(pageObject.bookingBoxImagesStyles?.["backgroundImage"]).toEqual(
      `url(${BOOKING_VARIANT_STUB.firstRoom?.photos[0]})`,
    );
  });

  it("should det description for component", () => {
    fixture.detectChanges();
    expect(pageObject.bookingBoxDescription).toBeNull();
    bookingVariant$.next(BOOKING_VARIANT_STUB);
    fixture.detectChanges();
    expect(pageObject.bookingBoxDescription).toBe(
      `${BOOKING_VARIANT_STUB.address}: ${BOOKING_VARIANT_STUB.firstRoom?.price}`,
    );
  });

  it("should call method navigate", () => {
    bookingVariant$.next(BOOKING_VARIANT_STUB);
    fixture.detectChanges();
    pageObject.triggerBookingBox();
    fixture.detectChanges();
    verify(
      navigationServiceMock.navigateByUrl(
        NavigationPath.ROOM_PAGE,
        deepEqual({ id: BOOKING_VARIANT_STUB.firstRoom?.id }),
      ),
    ).once();
  });
});
