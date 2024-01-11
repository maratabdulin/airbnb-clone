import { FormControl, FormGroup, Validators } from "@angular/forms";

import { BookingField } from "@app/booking/common";

export function getRoomBookingForm(): FormGroup {
  return new FormGroup({
    [BookingField.PERIOD]: new FormGroup({
      [BookingField.PERIOD_START]: new FormControl(null, [Validators.required]),
      [BookingField.PERIOD_END]: new FormControl(null, [Validators.required]),
    }),
    [BookingField.GUESTS]: new FormControl(null, [
      Validators.required,
      Validators.min(1),
    ]),
  });
}
