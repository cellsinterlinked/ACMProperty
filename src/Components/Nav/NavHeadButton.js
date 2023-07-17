import React from "react";
import "./NavHeadButton.css";
import { Link } from "react-router-dom";

const NavHeadButton = ({ destination, children }) => {
  return (
    <Link to={destination} className="nav_head-button">
      {children}
    </Link>
  );
};

export default NavHeadButton;
