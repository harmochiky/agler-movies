import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import localizedFormat from "dayjs/plugin/localizedFormat";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { seeMore } from "../store";
dayjs.extend(localizedFormat);

const IMG_PATH = "https://image.tmdb.org/t/p/";

export default function MovieInfo() {
  const dispatch = useDispatch();
  const selectedMovie = useSelector(
    (state) => state.aglet.authData.selectedMovie,
  );
  //   if (!selectedMovie) {
  //     return null;
  //   }
  return (
    <div
      className={`movie-info-wrapper shadow-sm ${
        selectedMovie ? "active" : ""
      }`}
    >
      <div className="container py-5">
        <div className="d-flex w-75 align-items-center justify-content-betwee">
          <div className="movie-image">
            <img
              src={`${IMG_PATH}/w500/${selectedMovie?.poster_path}`}
              className=""
              alt=""
            />
          </div>
          <div className="align-self-end">
            <h2 className="bold">{selectedMovie?.title}</h2>
            <div className="mb-3 text-secondary">Date : 20-10-2000</div>
            <p className="t-primary">{selectedMovie?.overview}</p>
            <div>
              <button
                style={{
                  width: "fit-content",
                }}
                className="btn btn-green rp"
              >
                Add to favourites
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
