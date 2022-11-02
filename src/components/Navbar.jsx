import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/img/aglet_logo.png";

export default function Navbar() {
  return (
    <header>
      <nav className="nav-wrapper px-3">
        <div className="container nav-container">
          <img src={Logo} alt="" className="img-fluid logo" />
          <div>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/favourites">Favourites</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div>Login</div>
        </div>
      </nav>
    </header>
  );
}
