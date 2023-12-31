import { Component } from "@angular/core";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { GridBreakpointName } from "@app/ui/theme/utils";

import { RowComponentPo } from "./row.po";
import { RowComponent } from "./row.component";

@Component({
  template: `<app-row automation-id="row" [mode]="mode"></app-row>`,
})
export class WrapperComponent {
  mode = GridBreakpointName.Xs;
}

describe("RowComponent", () => {
  let pageObject: RowComponentPo;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    void TestBed.configureTestingModule({
      declarations: [RowComponent, WrapperComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    pageObject = new RowComponentPo(fixture);
  });

  it("should create", () => {
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it("should set classes", () => {
    fixture.detectChanges();
    expect(pageObject.hasRowClass(`row-${GridBreakpointName.Xs}`)).toBeTruthy();
  });
});
