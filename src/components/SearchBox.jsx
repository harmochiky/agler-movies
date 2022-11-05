import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

export default function SearchBox() {
  const [focusIndex, setFocusIndex] = useState(-1);
  const [results, setResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleKeyDown = (e) => {
    let index = focusIndex;

    if (e.key === "ArrowUp") {
      index--;
      setFocusIndex(index);
      handle_active(e, index);
    }
    if (e.key === "ArrowDown") {
      index++;
      setFocusIndex(index);
      handle_active(e, index);
    }
  };

  const handle_submit = (e) => {
    let text = document.getElementById("searchInput").value;
    if (!text || text === "") {
      e.preventDefault();
    }
    if (focusIndex >= 0) {
      let title = "";
      title = results[focusIndex]?.title;
      e.preventDefault();
      window.location.href = `/search?q=${title}`;
    }
  };

  const handle_active = (e, index) => {
    let title = "";
    title = results[index]?.title;
    if (e.key === "Enter") {
      window.location.href = `/search?q=${title}`;
      // document.getElementById("searchInput").value = title;
    }
  };

  const findMovies = (wordToMatch) => {
    if (wordToMatch === searchText) return;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=263e31d1ad0c4defa8822787e614e716&language=en-US&query=${wordToMatch}&page=1&include_adult=false`;
    axios.get(url).then((data) => {
      let resp = data.data.results;
      setResults(resp.slice(0, 7));
      setSearchText(wordToMatch);
      setFocusIndex(-1);
    });
  };

  const handleKeyUp = () => {
    let value = document.getElementById("searchInput").value;
    if (value === "") {
      setResults([]);
    } else {
      findMovies(value);
    }
  };

  console.log({ focusIndex });

  return (
    <div className="d-flex justify-content-center">
      <form
        autocomplete="off"
        action="/search"
        onSubmit={handle_submit}
        className="home-search-container px-3 py-3 mt-5"
      >
        <IoSearch className="search-icon" />
        <input
          id="searchInput"
          name="q"
          placeholder="Search movies"
          className="search"
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
        />
        {results.length > 0 ? (
          <div id="autocomplete-list" className="autocomplete-items">
            {results.map((x, index) => (
              <div
                key={x.id}
                className={`${
                  focusIndex === index ? "autocomplete-active" : ""
                }`}
              >
                {x.title}
                <input type="hidden" defaultValue="Ecuador" />
              </div>
            ))}
          </div>
        ) : null}

        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
    </div>
  );
}
