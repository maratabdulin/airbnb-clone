import { createAction } from "@ngrx/store";
import { payload } from "@app/core/store/utils";
import { BookingDetails, BookingVariant } from "@app/booking/common";

export const setBookingVariant = createAction(
  "[Booking] Set Booking Variant",
  payload<BookingVariant>(),
);

export const clearBookingVariant = createAction(
  "[Booking] Clear Booking Variant",
);

export const setBookingDetails = createAction(
  "[Booking] Set Booking Details",
  payload<BookingDetails>(),
);

export const clearBookingDetails = createAction(
  "[Booking] Clear Booking Details",
);
