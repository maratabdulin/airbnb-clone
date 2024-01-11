import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { BookingField } from "@app/booking/common";
import { Subject, takeUntil, tap } from "rxjs";
import { BreakpointObserver } from "@angular/cdk/layout";
import { GridBreakpointType, mediaBreakpointUp } from "@app/ui/theme/utils";

@Component({
  selector: "app-room-booking-date",
  templateUrl: "./room-booking-date.component.html",
  styleUrls: ["./room-booking-date.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomBookingDateComponent implements OnInit, OnDestroy {
  @Input() control!: FormGroup | null;

  BookingField = BookingField;
  maxDate!: Date;
  minDate!: Date;
  isDesktopScreen = false;
  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly breakpointObserver: BreakpointObserver,
  ) {}

  ngOnInit() {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() + 1);
    this.breakpointObserver
      .observe(mediaBreakpointUp(GridBreakpointType.Md))
      .pipe(
        tap((breakpoints) => {
          // @ts-ignore
          this.isDesktopScreen = breakpoints.matches;
          this.changeDetectorRef.markForCheck();
        }),
        takeUntil(this.destroy$),
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
