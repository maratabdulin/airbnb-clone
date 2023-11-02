import { TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { MockModule } from "ng-mocks";

import { ContainerModule } from "@app/ui/container";

import { BookingPageRoutingModule } from "./booking-page-routing.module";
import { BookingPageComponent } from "./booking-page.component";

describe("BookingPageRoutingModule", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingPageRoutingModule, MockModule(ContainerModule)],
      declarations: [BookingPageComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  it("should create", () => {
    expect(BookingPageRoutingModule).toBeTruthy();
  });
});
