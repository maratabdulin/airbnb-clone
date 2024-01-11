import {
  BookingDetails,
  BookingField,
  BookingPrice,
} from "@app/booking/common";
import { RoomExtended } from "@app/rooms/manager";
import { Injectable } from "@angular/core";

export interface RoomBookingCalc {
  bookingDetails: BookingDetails;
  roomExtended: RoomExtended;
}

@Injectable()
export class RoomBookingPriceService {
  calculate(payload: RoomBookingCalc): BookingPrice {
    const days = Math.floor(
      (Date.parse(
        payload.bookingDetails[BookingField.PERIOD][BookingField.PERIOD_END],
      ) -
        Date.parse(
          payload.bookingDetails[BookingField.PERIOD][
            BookingField.PERIOD_START
          ],
        )) /
        86400000,
    );
    const rent = days * payload.roomExtended.price;
    const fee = rent * 0.15;
    const cleaning = rent * 0.1;
    const total = rent + fee + cleaning;

    return { days, rent, fee, cleaning, total };
  }
}
