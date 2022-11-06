import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/img/aglet_logo.png";
import { logoutUser } from "../store";
import { IoCloseSharp } from "react-icons/io5";

export default function Navbar() {
  const authData = useSelector((state) => state.aglet.authData);
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <nav className="nav-wrapper px-3">
        <div className="container nav-container">
          <Link to="/">
            <img src={Logo} alt="" className="img-fluid logo" />
          </Link>
          <div className="d-block d-md-none d-lg-none">
            <div>
              <ul>
                <li>
                  <Link
                    onClick={(e) => {
                      e.preventDefault();
                      setMenuOpen(true);
                    }}
                    to="/"
                    className="active"
                  >
                    Menu
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-none d-md-block d-lg-block">
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
                  <div onClick={() => dispatch(logoutUser())} className="bold">
                    Logout
                  </div>
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
      <div className={`mobile-menu p-4 ${menuOpen ? " open" : ""}`}>
        <div onClick={() => setMenuOpen(false)} className="close-item">
          <IoCloseSharp />
        </div>
        <div className="menu_list">
          <ul>
            <li>
              <Link onClick={() => setMenuOpen(false)} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={() => setMenuOpen(false)} to="/favourites">
                Favourites
              </Link>
            </li>
            <li>
              <Link onClick={() => setMenuOpen(false)} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
