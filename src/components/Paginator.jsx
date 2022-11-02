import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../store";

const TOTAL_MOVIES_TO_LOAD = 45;

export default function Paginator() {
  const popular = useSelector((state) => state.aglet.popular);
  const dispatch = useDispatch();
  const amount_exceeded = popular.movies.length >= TOTAL_MOVIES_TO_LOAD;
  return (
    <div className="">
      {amount_exceeded ? (
        <div className="text-center mb-3 text-secondary">
          Reached the end whilst showing {popular.movies.length} movies !
        </div>
      ) : (
        <div className="text-center mb-3 text-secondary">
          Showing {popular.movies.length} movies
        </div>
      )}

      <div className="d-flex justify-content-center">
        <button
          disabled={popular.movies.length >= TOTAL_MOVIES_TO_LOAD}
          onClick={() =>
            dispatch(fetchMovies({ type: "popular", page: popular.page + 1 }))
          }
          className="btn btn-green px-5"
        >
          See more
        </button>
      </div>
    </div>
  );
}
