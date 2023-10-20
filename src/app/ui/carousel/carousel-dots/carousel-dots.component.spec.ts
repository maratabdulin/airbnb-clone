import { Component } from "@angular/core";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { CarouselDotsComponentPo } from "./carousel-dots.po";
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
  let pageObject: CarouselDotsComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    void TestBed.configureTestingModule({
      declarations: [CarouselDotsComponent, WrapperComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new CarouselDotsComponentPo(fixtureWrapper);
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

  it("should call selected", () => {
    const selected = spyOn(
      pageObject.carouselDots?.componentInstance.selected,
      "emit",
    );
    fixtureWrapper.detectChanges();
    pageObject.triggerCarouselDotsFirstClick();
    expect(selected).toBeCalledWith(0);
  });
});
