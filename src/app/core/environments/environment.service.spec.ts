import { EnvironmentService } from "./environment.service";
import { Environments } from "./environment.interface";

describe("EnvironmentsService", () => {
  let service: EnvironmentService;

  const environmentsStub: Environments = {
    production: true,
    localStorageSync: true,
  };

  beforeEach(() => {
    service = new EnvironmentService(environmentsStub);
  });

  it("should create", () => {
    expect(service).toBeTruthy();
  });

  it("should return getEnvironments", () => {
    expect(service.getEnvironments()).toEqual(environmentsStub);
  });
});
