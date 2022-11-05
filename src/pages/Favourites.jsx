import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FilterSection from "../components/FilterSection";
import MovieList from "../components/MovieList";
import { fetchFavMovies } from "../store";

export default function Favourites() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.aglet.authData.favourite_movies);
  const authenticated = useSelector(
    (state) => state.aglet.authData.authenticated,
  );

  useEffect(() => {
    if (authenticated) {
      get_favourites();
    }
  }, [authenticated]);

  const get_favourites = () => {
    dispatch(fetchFavMovies({ authenticated }));
  };

  console.log({ movies });

  if (!authenticated) {
    return (
      <div className="py-5 container">
        <div className="text-center">
          <h1 className="t-primary">Favourite movies</h1>
          <p className="text-secondary">Please login to see your favourites</p>
          <Link to="/login" className="btn mt-3 btn-green">
            Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-5 container">
      <div className="text-center">
        <h1 className="t-primary">Your Favourite movies</h1>
        <p className="text-secondary">Showing your favourite movies</p>
      </div>
      <FilterSection name="Favourite" />
      <MovieList movies={movies} />
    </div>
  );
}
