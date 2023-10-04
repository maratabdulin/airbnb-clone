import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BookingPageComponent } from "src/app/booking/page/booking-page.component";

describe("PageComponent", () => {
  let component: BookingPageComponent;
  let fixture: ComponentFixture<BookingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingPageComponent],
    });
    fixture = TestBed.createComponent(BookingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
