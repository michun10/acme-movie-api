const { expect } = require("chai");
const { add } = require("../utilities");

describe("add function", () => {
  it("adds two numbers", () => {
    expect(add(2, 3)).to.equal(5);
  });
});
