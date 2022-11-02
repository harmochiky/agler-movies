import React from "react";
import SearchBox from "./SearchBox";

export default function SearchArea() {
  return (
    <div className="container py-5">
      <div className="text-center mt-3">
        <h1 className="home-big-text">Easily discover popular movies</h1>
      </div>
      <div className="d-flex justify-content-center">
        <SearchBox />
      </div>
    </div>
  );
}
