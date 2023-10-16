import { Observable } from "rxjs";
import { provideMockActions } from "@ngrx/effects/testing";
import { provideMockStore } from "@ngrx/store/testing";
import { TestBed } from "@angular/core/testing";

import { BookingEffects } from "./booking.effects";
import { BOOKING_FEATURE_KEY, bookingInitialState } from "./booking.reducer";

describe("BookingEffects", () => {
  let actions$: Observable<any>;
  let effects: BookingEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BookingEffects,
        provideMockActions(() => actions$),
        provideMockStore({
          initialState: { [BOOKING_FEATURE_KEY]: bookingInitialState },
        }),
      ],
    });

    effects = TestBed.inject(BookingEffects);
  });

  it("should be created", () => {
    expect(effects).toBeTruthy();
  });
});
