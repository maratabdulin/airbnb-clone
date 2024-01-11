import { PlatformService } from "./platform.service";

export const PLATFORM_BROWSER_ID = "browser";
export const PLATFORM_SERVER_ID = "server";

describe("PlatformService", () => {
  it("should be browser", () => {
    const service = new PlatformService(PLATFORM_BROWSER_ID);
    expect(service.isBrowser).toBeTruthy();
  });
  it("should be server", () => {
    const service = new PlatformService(PLATFORM_SERVER_ID);
    expect(service.isServer).toBeTruthy();
  });
});
