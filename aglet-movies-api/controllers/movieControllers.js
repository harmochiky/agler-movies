const FavMovie = require("../models/favouriteMovieModel");

//get all workouts
exports.getFavs = async (req, res) => {
  const movies = await FavMovie.find({ user_email: req.user.email }).sort({
    createdAt: -1,
  });
  let movies_ = [];

  movies.forEach((x) => {
    movies_.push({
      id: x.movie_id,
      title: x.title,
      genre_ids: x.genre_ids,
      release_date: x.release_date,
      overview: x.overview,
      vote_average: x.vote_average.toString(),
      poster_path: x.poster_path,
    });
  });

  res.status(200).json(movies_);
};

//create workout
exports.addMovie = async (req, res) => {
  let {
    title,
    genre_ids,
    id,
    release_date,
    overview,
    vote_average,
    poster_path,
  } = req.body;

  try {
    const movies = await FavMovie.find({ movie_id: id });
    if (movies.length <= 0) {
      const movie = await FavMovie.create({
        title,
        genre_ids,
        movie_id: id,
        release_date,
        overview,
        vote_average,
        poster_path,
        user_email: req.user.email,
      });
      res.status(200).json(movie);
    } else {
      res.status(400).json({ error: "movie exists" });
    }
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

//delete workout
exports.deleteFav = async (req, res) => {
  const id = req.params.id;

  const movie = await FavMovie.findOneAndDelete({
    movie_id: id,
    user_email: req.user.email,
  });

  if (movie) {
    return res.status(200).json({ success: "deleted" });
  } else {
    return res.status(400).json({ success: "movie not found" });
  }
};
