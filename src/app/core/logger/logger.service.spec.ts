import { LoggerService } from "./logger.service";

describe("Logger Service", () => {
  let service: LoggerService;

  beforeEach(() => {
    service = new LoggerService();
  });

  it("should creat", () => {
    expect(service).toBeTruthy();
  });
});
