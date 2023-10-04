import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { RoomFacade } from "@app/rooms/state";
import { RoomService } from "@app/rooms/service";
import { Room } from "@app/rooms/common";

@Component({
  selector: "app-booking-page",
  templateUrl: "./booking-page.component.html",
  styleUrls: ["./booking-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingPageComponent implements OnInit {
  rooms$!: Observable<Room[]>;
  constructor(
    private readonly roomFacade: RoomFacade,
    private readonly roomService: RoomService,
  ) {}

  ngOnInit() {
    this.roomFacade.load();
    this.rooms$ = this.roomService.rooms$;
  }
}
