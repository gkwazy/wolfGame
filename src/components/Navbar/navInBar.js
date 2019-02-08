import React from "react";
import { NavLink } from "react-router-dom";

const NavInbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">
      Wolf Game
    </a>

    <div className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">
            Sign Up <span className="sr-only">(current)</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
);
export default NavInbar;
