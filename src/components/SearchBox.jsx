import React from "react";
import { IoSearch } from "react-icons/io5";

export default function SearchBox() {
  return (
    <div className="d-flex justify-content-center">
      <form action="/search" className="home-search-container px-3 py-3 mt-5">
        <IoSearch className="search-icon" />
        <input name="q" placeholder="Search movies" className="search" />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
    </div>
  );
}
