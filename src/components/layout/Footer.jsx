import React from "react";
import "../../styles/Footer.css";

const Footer = () => {
  const footerYear = new Date().getFullYear();

  return <footer className="footer">Copyright &copy; {footerYear}</footer>;
};

export default Footer;
