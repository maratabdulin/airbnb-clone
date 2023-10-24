import { TestBed } from "@angular/core/testing";

import { ColumnModule } from "@app/ui/grid";

describe("ColumnModule", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnModule],
    }).compileComponents();
  });

  it("should create", () => {
    expect(ColumnModule).toBeTruthy();
  });
});
