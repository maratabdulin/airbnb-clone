import { Building } from "@app/buildings/common";
import { RoomEntity } from "@app/rooms/common";

export interface BookingVariant extends Building {
  firstRoom: RoomEntity | null;
}

export enum BookingField {
  PERIOD = "period",
  PERIOD_START = "start",
  PERIOD_END = "end",
  GUESTS = "guests",
}

export interface BookingDetails {
  [BookingField.PERIOD]: {
    [BookingField.PERIOD_START]: string;
    [BookingField.PERIOD_END]: string;
  };
  [BookingField.GUESTS]: number;
}

export interface BookingPrice {
  days: number;
  rent: number;
  cleaning: number;
  fee: number;
  total: number;
}
