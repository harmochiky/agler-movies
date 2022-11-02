import React from "react";
import { IoSearch } from "react-icons/io5";

export default function SearchBox() {
  return (
    <form action="/" className="home-search-container px-3 py-3 mt-5">
      <IoSearch className="search-icon" />
      <input placeholder="Search movies" className="search" />
      <button className="search-btn">Search</button>
    </form>
  );
}
