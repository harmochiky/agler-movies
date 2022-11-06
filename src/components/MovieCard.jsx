import React, { useEffect, useState } from "react";
import dayjs from "dayjs";

import { FiHeart, FiTrash } from "react-icons/fi";
import { MdMoreHoriz } from "react-icons/md";

import localizedFormat from "dayjs/plugin/localizedFormat";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToFav, removeFromFav, seeMore } from "../store";
import isFavMovie from "../utils/isFavMovie";
dayjs.extend(localizedFormat);

const IMG_PATH = "https://image.tmdb.org/t/p/";

export default function MovieCard({ movie }) {
  const dispatch = useDispatch();
  const [saved, setSaved] = useState(false);

  const authenticated = useSelector(
    (state) => state.aglet.authData.authenticated,
  );
  const favourite_movies = useSelector(
    (state) => state.aglet.authData.favourite_movies,
  );

  useEffect(() => {
    setSaved(isFavMovie(favourite_movies, movie));
  }, []);

  const handle_favourites = () => {
    if (!authenticated) {
      return alert("Please sign in first to add movies to favourites");
    }
    if (!saved) {
      setSaved(true);
      dispatch(addToFav({ movie }));
    } else {
      setSaved(false);
      dispatch(removeFromFav({ movie }));
    }
  };

  const handle_view_more = () => {
    dispatch(seeMore({ movie }));
  };

  if (!movie.poster_path) return null;

  return (
    <div className="movie-card mb-3">
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
            {movie?.release_date ? (
              <>
                {dayjs(new Date(movie.release_date).toISOString()).format("LL")}
              </>
            ) : null}
          </span>
          <div className="d-flex align-items-center">
            <button
              title={saved ? "Remove from favourites" : "Add to favourites"}
              onClick={handle_favourites}
              className="movie-add-to-fav-btn mr-2"
            >
              {saved ? <FiTrash /> : <FiHeart />}
            </button>
            <button
              title="See more about this movie"
              onClick={handle_view_more}
              className="movie-add-to-fav-btn"
            >
              <MdMoreHoriz className="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
