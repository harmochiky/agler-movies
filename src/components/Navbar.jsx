import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/img/aglet_logo.png";

export default function Navbar() {
  const authData = useSelector((state) => state.aglet.authData);
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
          <div>
            <ul>
              {authData.authenticated ? (
                <li>
                  <div>Logout</div>
                </li>
              ) : (
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
