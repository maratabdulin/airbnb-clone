import { Component } from "@angular/core";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { CarouselComponentPo } from "./carousel-dots.po";
import { CarouselDotsComponent } from "./carousel-dots.component";
import spyOn = jest.spyOn;

@Component({
  template: `<app-carousel-dot
    automation-id="carousel-dots"
    [counts]="counts"
  ></app-carousel-dot>`,
})
export class WrapperComponent {
  counts = 3;
}

describe("CarouselDotsComponent", () => {
  let pageObject: CarouselComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    void TestBed.configureTestingModule({
      declarations: [CarouselDotsComponent, WrapperComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new CarouselComponentPo(fixtureWrapper);
  });

  it("should create", () => {
    fixtureWrapper.detectChanges();
    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it("should set dots", () => {
    fixtureWrapper.detectChanges();
    expect(pageObject.carouselDotsItem.length).toBe(
      fixtureWrapper.componentInstance.counts,
    );
  });
});
