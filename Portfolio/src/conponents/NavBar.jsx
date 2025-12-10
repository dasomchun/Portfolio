import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`navbar ${isHome ? "transparent" : "solid"} ${
        menuOpen ? "menu-open" : ""
      }`}
    >
      <div className="nav-container">
        <div className="hamburger" onClick={toggleMenu}>
          <span className={menuOpen ? "bar open" : "bar"}></span>
          <span className={menuOpen ? "bar open" : "bar"}></span>
          <span className={menuOpen ? "bar open" : "bar"}></span>
        </div>

        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/project1"
              className={location.pathname.includes("project") ? "active" : ""}
            >
              Project
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
