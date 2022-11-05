const express = require("express");
const {
  addMovie,
  getFavs,
  deleteFav,
} = require("../controllers/movieControllers");
const { useMiddleware } = require("../middleware/useAuth");
const app = express.Router();

app.get("/favourites", useMiddleware, getFavs);

app.post("/add/favourite", useMiddleware, addMovie);

app.delete("/favourite/:id", useMiddleware, deleteFav);

module.exports = app;
