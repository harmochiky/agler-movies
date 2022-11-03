const express = require("express");
const {
  addMovie,
  getFavs,
  deleteFav,
} = require("../controllers/movieControllers");
const app = express.Router();

app.get("/favourites", getFavs);

app.post("/add/favourite", addMovie);

app.delete("/favourite/:id", deleteFav);

module.exports = app;
