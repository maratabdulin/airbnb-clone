import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { RoomExtended } from "@app/rooms/manager";
import { NavigationService } from "@app/core/navigation/service";
import { NavigationPath } from "@app/core/navigation/common";

@Component({
  selector: "app-room-header",
  templateUrl: "./room-header.component.html",
  styleUrls: ["./room-header.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomHeaderComponent {
  @Input() room!: RoomExtended;

  constructor(private readonly navigationService: NavigationService) {}
  onBack() {
    void this.navigationService.navigateByUrl(NavigationPath.HOME);
  }
}
