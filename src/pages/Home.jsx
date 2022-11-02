import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterSection from "../components/FilterSection";
import MovieList from "../components/MovieList";
import Paginator from "../components/Paginator";
import SearchArea from "../components/SearchArea";
import { fetchMovies } from "../store";

export default function Home() {
  const dispatch = useDispatch();
  const popular = useSelector((state) => state.aglet.popular);

  useEffect(() => {
    get_movies();
  }, []);

  const get_movies = () => {
    dispatch(fetchMovies({ type: "popular", page: 1 }));
  };

  // console.log(popular);
  return (
    <div className="mb-5">
      <SearchArea />
      <FilterSection />
      <MovieList movies={popular.movies} />
      <Paginator />
    </div>
  );
}
