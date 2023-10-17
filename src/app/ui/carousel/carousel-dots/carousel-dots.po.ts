import { PageObject } from "@app/core/testing";
import { DebugElement } from "@angular/core";

import { WrapperComponent } from "./carousel-dots.component.spec";

enum CarouselDotsAutomation {
  CarouselDots = "carousel-dots",
  CarouselDotsItem = "carousel-dots-item",
}

export class CarouselComponentPo extends PageObject<WrapperComponent> {
  get carouselDots(): DebugElement | null {
    return this.getByAutomationId(CarouselDotsAutomation.CarouselDots);
  }

  get carouselDotsItem(): DebugElement[] {
    return this.getAllByAutomationId(CarouselDotsAutomation.CarouselDotsItem);
  }

  triggerCarouselDotsFirstClick(): void {
    this.triggerEventHandler(this.carouselDotsItem[0], "click");
  }
}
