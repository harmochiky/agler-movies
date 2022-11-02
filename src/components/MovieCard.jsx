import React from "react";
import dayjs from "dayjs";

import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(localizedFormat);

const IMG_PATH = "https://image.tmdb.org/t/p/";

export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <div className="movie-rating">{movie.vote_average}</div>
      <div className="movie-image">
        <img
          src={`${IMG_PATH}/w500/${movie.poster_path}`}
          alt=""
          className="img-fluid"
        />
      </div>
      <div className="mt-2">
        <div className="movie-title">
          <span>{movie.title}</span>
        </div>
        <div className="mt-2 d-flex justify-content-between align-items-center">
          <span className="release-date">
            {dayjs(new Date(movie.release_date).toISOString()).format("LL")}
          </span>
          <button className="movie-add-to-fav-btn">
            <FiHeart />
          </button>
        </div>
      </div>
    </div>
  );
}