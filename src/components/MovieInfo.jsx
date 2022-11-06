import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import localizedFormat from "dayjs/plugin/localizedFormat";
import axios from "axios";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
dayjs.extend(localizedFormat);

const IMG_PATH = "https://image.tmdb.org/t/p/";

export default function MovieInfo() {
  return null;
  return (
    <div className="movie-info-wrapper shadow-sm">
      <div className="container py-5">
        <div className="d-flex w-75 align-items-center justify-content-betwee">
          <div className="movie-image">
            <img
              src={`${IMG_PATH}/w500/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg`}
              className=""
              alt=""
            />
          </div>
          <div className="align-self-end">
            <h2 className="bold">Black Adam</h2>
            <div className="mb-3 text-secondary">Date : 20-10-2000</div>
            <p className="t-primary">
              After being resurrected by a sinister entity, Art the Clown
              returns to Miles County where he must hunt down and destroy a
              teenage girl and her younger brother on Halloween night. As the
              body count rises, the siblings fight to stay alive while
              uncovering the true nature of Art's evil intent.
            </p>
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
          <button>
            <IoCloseSharp />
          </button>
        </div>
      </div>
    </div>
  );
}
