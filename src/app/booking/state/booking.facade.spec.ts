import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { TestBed } from "@angular/core/testing";

import { readFirst } from "@app/core/store/utils";

import { BOOKING_FEATURE_KEY, reducer } from "./booking.reducer";
import { BOOKING_DETAILS_STUB, BOOKING_VARIANT_STUB } from "./booking.stub";
import { BookingFacade } from "./booking.facade";
import { BookingEffects } from "./booking.effects";

describe("BookingFacade", () => {
  let facade: BookingFacade;

  describe("used in NgModule", () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(BOOKING_FEATURE_KEY, reducer),
          EffectsModule.forFeature([BookingEffects]),
        ],
        providers: [BookingFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}

      TestBed.configureTestingModule({ imports: [RootModule] });

      facade = TestBed.inject(BookingFacade);
    });

    // @ts-ignore
    it("setBookingVariant() should set bookingVariant", async (done) => {
      try {
        facade.setBookingVariant(BOOKING_VARIANT_STUB);
        const bookingVariant = await readFirst(facade.bookingVariant$);
        expect(bookingVariant).toEqual(BOOKING_VARIANT_STUB);
        done();
      } catch (error) {
        // @ts-ignore
        done.fail(error);
      }
    });

    // @ts-ignore
    it("setBookingDetails() should set bookingDetails", async (done) => {
      try {
        facade.setBookingDetails(BOOKING_DETAILS_STUB);
        const bookingDetails = await readFirst(facade.bookingDetails$);
        expect(bookingDetails).toEqual(BOOKING_DETAILS_STUB);
        done();
      } catch (error) {
        // @ts-ignore
        done.fail(error);
      }
    });
  });
});
