const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieScema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    poster_path: {
      type: String,
      required: true,
    },
    genre_ids: {
      type: Array,
      required: true,
    },
    movie_id: {
      type: Number,
      required: true,
    },
    vote_average: {
      type: mongoose.Types.Decimal128,
      required: true,
    },
    release_date: {
      type: String,
      required: true,
    },
    overview: {
      type: String,
    },
    user_email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

movieScema.set("toJSON", {
  transform: (doc, ret) => {
    ret.vote_average = ret.vote_average.toString();
    return ret;
  },
});

module.exports = mongoose.model("FavMovie", movieScema);
