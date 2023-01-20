const { expect } = require("chai");
const { add } = require("../utilities");
const server = require("supertest")(require("../app"));

describe("add function", () => {
  it("adds two numbers", () => {
    expect(add(2, 3)).to.equal(5);
  });
});

describe("GET /", () => {
  it("returns 200 OK", async () => {
    res = await server.get("/api/movies");
    expect(res.status).to.equal(200);
  });
});
