import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/Notfound.css";

const NotFound = () => {
  return (
    <section className="error">
      <div className="not-found">
        <h1>Oops!</h1>
        <p>404- Page Not Found!! </p>
      </div>

      <Link to="/">
        <FaHome size={"30px"} />
      </Link>
    </section>
  );
};

export default NotFound;
