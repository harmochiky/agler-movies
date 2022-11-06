import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { IoCloseSharp } from "react-icons/io5";
import localizedFormat from "dayjs/plugin/localizedFormat";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { addToFav, removeFromFav, seeMore } from "../store";
import isFavMovie from "../utils/isFavMovie";
dayjs.extend(localizedFormat);

const IMG_PATH = "https://image.tmdb.org/t/p/";

export default function MovieInfo() {
  const compEl = useRef(null);
  const dispatch = useDispatch();
  const [saved, setSaved] = useState(false);

  const selectedMovie = useSelector(
    (state) => state.aglet.authData.selectedMovie,
  );
  const authenticated = useSelector(
    (state) => state.aglet.authData.authenticated,
  );
  const favourite_movies = useSelector(
    (state) => state.aglet.authData.favourite_movies,
  );

  const handle_fav = () => {
    if (!authenticated) {
      return alert("Please sign in first to add movies to favourites");
    }
    if (!saved) {
      setSaved(true);
      dispatch(addToFav({ movie: selectedMovie }));
    } else {
      setSaved(false);
      dispatch(removeFromFav({ movie: selectedMovie }));
    }
  };

  useEffect(() => {
    setSaved(isFavMovie(favourite_movies, selectedMovie));
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [favourite_movies, selectedMovie]);

  const handleClickOutside = (e) => {
    if (compEl && compEl.current) {
      const ref = compEl.current;
      if (!ref.contains(e.target)) {
        dispatch(seeMore({ post: null }));
      }
    }
  };

  return (
    <div
      ref={compEl}
      className={`movie-info-wrapper shadow-sm ${
        selectedMovie ? "active" : ""
      }`}
    >
      <div className="container py-5">
        <div className="d-flex w-75 align-items-center justify-content-betwee">
          <div className="movie-image">
            {selectedMovie ? (
              <img
                src={`${IMG_PATH}/w500/${selectedMovie?.poster_path}`}
                className=""
                alt=""
              />
            ) : null}
          </div>
          <div className="align-self-end">
            <h2 className="bold">{selectedMovie?.title}</h2>
            <div className="mb-3 text-secondary">Date : 20-10-2000</div>
            <p className="t-primary">{selectedMovie?.overview}</p>
            <div>
              <button
                onClick={handle_fav}
                style={{
                  width: "fit-content",
                }}
                className="btn btn-green rp"
              >
                {saved ? "Remove from favourites" : "Add to favourites"}
              </button>
            </div>
          </div>
        </div>
        <div className="close-btn-wrapper">
          <button onClick={() => dispatch(seeMore({ post: null }))}>
            <IoCloseSharp />
          </button>
        </div>
      </div>
    </div>
  );
}
