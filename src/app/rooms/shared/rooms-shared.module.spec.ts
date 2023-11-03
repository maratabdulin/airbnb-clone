import { TestBed } from "@angular/core/testing";

import { RoomsSharedModule } from "./rooms-shared.module";

describe("RoomsSharedModule", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomsSharedModule],
    }).compileComponents();
  });

  it("should create", () => {
    expect(RoomsSharedModule).toBeTruthy();
  });
});
