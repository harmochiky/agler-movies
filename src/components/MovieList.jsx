import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
  return (
    <div className="container mt-3 mb-5">
      <div className="movie-wrapper">
        {movies.length === 0 && (
          <div className="d-flex w-100 justify-content-center text-center text-secondary my-5">
            No movies to show here
          </div>
        )}
        {movies.map((x, index) => (
          <MovieCard movie={x} key={index + x.id} />
        ))}
      </div>
    </div>
  );
}
