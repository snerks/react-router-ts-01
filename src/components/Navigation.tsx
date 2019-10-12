import React from "react";
import { NavLink } from "react-router-dom";

var divStyle = {
  padding: "30px"
};

var navLinkStyle = {
  padding: "30px"
};

const Navigation = () => {
  return (
    <div style={divStyle}>
      <NavLink style={navLinkStyle} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyle} to="/about">
        About
      </NavLink>
      <NavLink style={navLinkStyle} to="/contact">
        Contact
      </NavLink>
    </div>
  );
};

export default Navigation;
