import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
  return (
    <div className="container mt-3 mb-5">
      <div className="movie-wrapper">
        {movies.map((x, index) => (
          <MovieCard movie={x} key={index + x.id} />
        ))}
      </div>
    </div>
  );
}
