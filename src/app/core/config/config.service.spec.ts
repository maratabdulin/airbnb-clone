import { ConfigService } from "./config.service";
import { Config } from "./config.interface";

describe("ConfigService", () => {
  let service: ConfigService;
  const configStub: Config = {
    googleMapKey: "",
  };

  beforeEach(() => {
    service = new ConfigService();
  });

  it("should create", () => {
    expect(service).toBeTruthy();
  });

  it("should return config", () => {
    expect(service.getConfig()).toEqual(configStub);
  });
});
