import { Component } from "@angular/core";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

import { SpinnerComponentPo } from "./spinner.po";
import { SpinnerComponent } from "./spinner.component";

@Component({
  template: `<app-spinner automation-id="spinner"></app-spinner>`,
})
export class WrapperComponent {}

describe("SpinnerComponent", () => {
  let pageObject: SpinnerComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatProgressSpinnerModule, NoopAnimationsModule],
      declarations: [SpinnerComponent, WrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new SpinnerComponentPo(fixtureWrapper);
  });

  it("should create", () => {
    fixtureWrapper.detectChanges();
    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it("should show new spinner", () => {
    fixtureWrapper.detectChanges();
    expect(pageObject.spinner).toBeTruthy();
  });
});
