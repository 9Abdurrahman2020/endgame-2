import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <div className="text-center bg-black mt-5 text-white p-3">
      <div className="social-icon">
        <i className="fab fa-youtube"></i>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-twitter"></i>
      </div>
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/all-doctors">Doctors</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About Us</Link>
      </div>
      <p>Copyrights &copy;2021 All rights are reserved by Abdur Rahman</p>
    </div>
  );
};

export default Footer;
