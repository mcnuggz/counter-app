import React, { Component } from "react";

// stateless functional component

const Navbar = ({ totalCount }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary m-2">
          {totalCount}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
