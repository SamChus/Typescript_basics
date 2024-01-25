const assert = require("assert");
const sum = require("./app");


describe("sum", () => {
  it("the sum of the numbers is 45", () => {
    assert.equal(sum, 45);
  });
});



