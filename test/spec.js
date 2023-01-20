const { expect } = require("chai");
const { add } = require("../utilities");
const server = require("supertest")(require("../app"));
const {
  syncAndSeed,
  models: { Actor, Movie, Role },
} = require("../db");
const sequelize = require("sequelize");

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

describe("models", () => {
  beforeEach(async () => {
    await syncAndSeed();
  });

  describe("movies", () => {
    it("has 4 movies", async () => {
      const movies = await Movie.findAll();
      expect(movies.length).to.equal(4);
    });
  });
});
