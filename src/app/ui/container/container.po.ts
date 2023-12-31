import { PageObject } from "@app/core/testing";
import { DebugElement } from "@angular/core";

import { WrapperComponent } from "./container.component.spec";

enum ContainerAutomation {
  Container = "container",
}

export class ContainerComponentPo extends PageObject<WrapperComponent> {
  get container(): DebugElement | null {
    return this.getByAutomationId(ContainerAutomation.Container);
  }

  hasContainerClass(className: string): boolean {
    return this.container?.classes[className] ?? false;
  }

  setMode(mode: "flex" | "flex-row" | "fluid") {
    if (this.container?.componentInstance) {
      this.container.componentInstance.mode = mode;
    }
  }

  setHeight(height: "max-height") {
    if (this.container?.componentInstance) {
      this.container.componentInstance.height = height;
    }
  }
}
