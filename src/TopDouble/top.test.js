
const topDouble = require("./top");

describe("topDouble", () => {
    it("should determine the top double of 1 less than 5", () => {
        expect(topDouble(1, 5)).toBe(4);
    });
  it("should determine the top double of 2 less than 100", () => {
    expect(topDouble(2, 100)).toBe(64);
  });
});
