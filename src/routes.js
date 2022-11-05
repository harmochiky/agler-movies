import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import SearchPage from "./pages/SearchPage";

export default function routes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
}
