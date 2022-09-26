import React from "react";
import { BiLoader } from "react-icons/bi";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="load">
      <BiLoader size={"40px"} className="loader" />
    </div>
  );
};

export default Loader;
