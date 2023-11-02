import { Pipe, PipeTransform } from "@angular/core";
import { NavigationService } from "@app/core/navigation/service";
import { NavigationPath } from "@app/core/navigation/common";

@Pipe({
  name: "navPath",
})
export class NavPathPipe implements PipeTransform {
  constructor(private readonly navigationService: NavigationService) {}

  transform(
    path: NavigationPath,
    params?: Record<string, string | number | undefined>,
  ): (string | number)[] {
    return this.navigationService.getRoute(path, params);
  }
}
