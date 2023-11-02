import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { ReplaySubject } from "rxjs";
import { mock, when } from "ts-mockito";
import { MockModule } from "ng-mocks";

import { BookingService } from "@app/booking/service";
import { providerOf } from "@app/core/testing";
import { BookingVariant } from "@app/booking/common";
import { BOOKING_VARIANT_STUB } from "@app/booking/state";

import { BookingListComponentPo } from "./booking-list.po";
import { BookingListComponent } from "./booking-list.component";
import { BookingPortletModule } from "../booking-portlet/booking-portlet.module";

describe("BookingListComponent", () => {
  let pageObject: BookingListComponentPo;
  let fixture: ComponentFixture<BookingListComponent>;
  let bookingServiceMock: BookingService;
  let bookingVariants$: ReplaySubject<BookingVariant[]>;

  beforeEach(() => {
    bookingServiceMock = mock(BookingService);
    bookingVariants$ = new ReplaySubject<BookingVariant[]>(1);
  });

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MockModule(BookingPortletModule)],
      declarations: [BookingListComponent],
      providers: [providerOf(BookingService, bookingServiceMock)],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingListComponent);
    pageObject = new BookingListComponentPo(fixture);
    when(bookingServiceMock.bookingVariants$).thenReturn(bookingVariants$);
  });

  it("should create", () => {
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it("should set portlets", () => {
    fixture.detectChanges();
    expect(pageObject.bookingListPortlets.length).toBe(0);
    bookingVariants$.next([BOOKING_VARIANT_STUB]);
    fixture.detectChanges();
    expect(pageObject.bookingListPortlets?.length).toBe(1);
  });

  it("should set empty text", () => {
    fixture.detectChanges();
    bookingVariants$.next([]);
    fixture.detectChanges();
    expect(pageObject.bookingListEmptyText).toBe(
      "There are no available hotels and apartments",
    );
  });
});
