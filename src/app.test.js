const assert = require("assert");
const a = require("./app");

it("the variable a should store a string", () => {
  assert.equal(typeof a, "string");
});
