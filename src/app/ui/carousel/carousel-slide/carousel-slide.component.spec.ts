import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SharedModule } from "@app/ui/shared";

import { CarouselSlideComponentPo } from "./carousel-slide.po";
import { CarouselSlideComponent } from "./carousel-slide.component";

@Component({
  template: `<app-carousel-slide
    automation-id="carousel-slide"
    [image]="image"
  ></app-carousel-slide>`,
})
export class WrapperComponent {
  image = "/1.jpg";
}

describe("CarouselSlideComponent", () => {
  let pageObject: CarouselSlideComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [CarouselSlideComponent, WrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new CarouselSlideComponentPo(fixtureWrapper);
  });

  it("should create", () => {
    fixtureWrapper.detectChanges();
    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it("should set background image", () => {
    fixtureWrapper.detectChanges();
    expect(pageObject.carouselSlideImageStyles?.["backgroundImage"]).toEqual(
      "url(/1.jpg)",
    );
  });
});
