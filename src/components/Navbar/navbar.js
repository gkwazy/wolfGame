import React from "react";
import { NavLink } from "react-router-dom";
import NavOutBar from "./navOutBar";
import NavInBar from "./navInBar";

const Navbar = () => {
  return (
    <div>
      <NavInBar />
      <NavOutBar />
    </div>
  );
};
export default Navbar;
