import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo-bar">
        <FaGithub size={"40px"} className="github" />
        <Link to="/" className="title">
          <h3>Github</h3>
        </Link>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
