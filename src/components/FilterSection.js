import React from "react";

export default function FilterSection({ name }) {
  return (
    <section className="container">
      <div className="filter-wrapper">
        <ul>
          <li className="active">{!name ? "Popular" : name} movies</li>
        </ul>
      </div>
    </section>
  );
}
