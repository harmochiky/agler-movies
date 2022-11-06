import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterSection from "../components/FilterSection";
import MovieList from "../components/MovieList";
import SearchBox from "../components/SearchBox";
import { API_KEY, BASE_URL } from "../utils/contants";

export default function SearchPage() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [movies, set_movies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get("q");
    if (searchQuery) {
      setSearchText(searchQuery);
      search_movies(searchQuery);
    } else {
      navigate("/");
    }
  }, []);

  const search_movies = async (search) => {
    setLoading(true);
    axios
      .get(
        `${BASE_URL}/search/movie?query=${search}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`,
      )
      .then((data) => {
        console.log(data.data);
        set_movies(data.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div className="pb-5 container px-lg-0 px-md-3 px-3">
      <div className="mb-4">
        <SearchBox />
      </div>
      <div className="text-center">
        <h3 className="t-primary">Showing results for "{searchText}"</h3>
        <p className="text-secondary">Results shown based on your search</p>
      </div>
      <FilterSection name="Result" />
      <MovieList loading={loading} movies={movies} />
    </div>
  );
}
