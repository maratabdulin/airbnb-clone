import { DebugElement } from "@angular/core";

import { PageObject } from "@app/core/testing";

import { WrapperComponent } from "./carousel.component.spec";
import { CarouselComponent } from "./carousel.component";

enum CarouselAutomation {
  Carousel = "carousel",
  CarouselSlide = "carousel-slide",
  CarouselDots = "carousel-dots",
  CarouselNavs = "carousel-navs",
}

export class CarouselComponentPo extends PageObject<WrapperComponent> {
  get carousel(): DebugElement | null {
    return this.getByAutomationId(CarouselAutomation.Carousel);
  }

  get carouselComponent(): CarouselComponent | null {
    return this.carousel?.componentInstance;
  }

  get carouselSlide(): DebugElement[] {
    return this.getAllByAutomationId(CarouselAutomation.CarouselSlide);
  }

  get carouselNavs(): DebugElement | null {
    return this.getByAutomationId(CarouselAutomation.CarouselNavs);
  }

  get carouselDots(): DebugElement | null {
    return this.getByAutomationId(CarouselAutomation.CarouselDots);
  }

  get carouselActiveSlideIndex(): number | null {
    return this.carouselComponent?.active ?? null;
  }

  triggerCarouselSlideFirstClick() {
    this.triggerEventHandler(this.carouselSlide[0], "click");
  }

  triggerCarouselDotsClick(eventObj: number) {
    this.triggerEventHandler(this.carouselDots, "selected", eventObj);
  }

  triggerCarouselNavsNextClick() {
    this.triggerEventHandler(this.carouselNavs, "next");
  }

  triggerCarouselNavsPrevClick() {
    this.triggerEventHandler(this.carouselNavs, "prev");
  }
}
