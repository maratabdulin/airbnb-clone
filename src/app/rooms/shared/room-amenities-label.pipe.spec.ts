import { ROOM_AMENITIES_LABELS, RoomAmenities } from "@app/rooms/common";

import { RoomAmenitiesLabelPipe } from "./room-amenities-label.pipe";

describe("RoomAmenitiesLabelPipe", () => {
  let pipe: RoomAmenitiesLabelPipe;

  beforeEach(() => {
    pipe = new RoomAmenitiesLabelPipe();
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should return label", () => {
    expect(pipe.transform(RoomAmenities.HANGERS)).toBe(
      ROOM_AMENITIES_LABELS[RoomAmenities.HANGERS],
    );
  });

  it("should return unknown property", () => {
    const value = "some" as any;
    expect(pipe.transform(value)).toBe(value);
  });
});
