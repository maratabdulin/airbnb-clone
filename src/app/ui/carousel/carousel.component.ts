import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";

@Component({
  selector: "app-carousel",
  templateUrl: "carousel.component.html",
  styleUrls: ["carousel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent {
  @Input() set images(images: string[]) {
    this.slides = images;
    this.active = 0;
  }
  @Output() selected = new EventEmitter<number>();

  active = 0;
  slides!: string[];

  onClick(index: number) {
    this.selected.emit(index);
  }

  onSelected(index: number) {
    this.active = index;
  }

  onPrev() {
    this.active = this.active === 0 ? this.slides.length - 1 : this.active - 1;
  }

  onNext() {
    this.active = this.active === this.slides.length - 1 ? 0 : this.active + 1;
  }
}
