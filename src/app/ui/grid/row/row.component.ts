import { Component, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

import { GridBreakpointName } from "@app/ui/theme/utils";

@Component({
  selector: "app-row",
  templateUrl: "row.component.html",
  styleUrls: ["row.component.scss"],
})
export class RowComponent implements OnInit {
  @Input() noPadding = false;
  @Input() set mode(mode: string | GridBreakpointName | null) {
    this.update(mode ?? GridBreakpointName.Xs);
  }

  private lastMode: string | GridBreakpointName | null = null;

  constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2,
  ) {}

  ngOnInit() {
    if (!this.lastMode) {
      this.update(GridBreakpointName.Xs);
    }
  }

  private update(mode: string | GridBreakpointName) {
    if (this.lastMode !== mode) {
      if (this.lastMode) {
        this.renderer.removeClass(this.elementRef.nativeElement, `row-${mode}`);
      }
      this.lastMode = mode;
      this.renderer.addClass(this.elementRef.nativeElement, `row-${mode}`);
    }
  }
}
