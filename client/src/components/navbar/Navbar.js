import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";
function Navbar() {
  const [dataVisible, setDataVisible] = useState(false);
  return (
    <header className="header ">
      <div className="brand-name container">
        <Link to="">SAT MATH</Link>
      </div>
      <button
        aria-expanded="false"
        className="navbar-toggle flex justify-center items-center"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className="container" data-visible="true">
        <ul className="navbar">
          <li className="nav-item">
            <NavLink to="" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="courses" className="nav-link">
              Courses
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="contact" className="nav-link">
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="about" className="nav-link">
              About Me
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
