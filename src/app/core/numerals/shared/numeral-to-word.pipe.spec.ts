import { NumeralToWordPipe } from "./numeral-to-word.pipe";

describe("NumeralToWordPipe", () => {
  it("create an instance", () => {
    const pipe = new NumeralToWordPipe();
    expect(pipe).toBeTruthy();
  });
});
