const express = require("express");
const app = express();

app.get("/api/movies", async (req, res, next) => {
  await res.sendStatus(200);
});

module.exports = app;
