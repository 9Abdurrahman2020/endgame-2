import React from "react";
import { Link } from "react-router-dom";
import "./banner.css";
const Banner = () => {
  return (
    <div className="banner-container">
      <div className="info container">
        <div>
          <h1 className="text-white">
            <span className="big-text">THE BEST HOSPITAL</span>
            <br />
            <span className="below-big-text">
              Get the best professional medical help
              <br />
              from our modern hospital.
            </span>
          </h1>
          <Link to="/">
            <button className="btn btn-success">Explore</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
