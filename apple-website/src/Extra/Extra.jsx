import React from "react";
import years from "../assets/50_years.png";
import air from "../assets/macbook_air.png";
import "./Extra.css";

const Extra = () => {
  return (
    <div className="extra">
      <div className="left">
        <div className="anni_img">
          <img src={years} alt="50 years of innovation" />
        </div>
        <div className="button">
          <button className="letter">Read the letter from Tim</button>
        </div>
      </div>
      <div className="right">
        <h1>Macbook Air</h1>
        <p>Now supercharged by M5.</p>
        <div className="buttons">
          <button className="learn">Learn more</button>
          <button className="buy">Buy</button>
        </div>
        <div className="air_img">
          <img src={air} alt="air_img" />
        </div>
      </div>
    </div>
  );
};

export default Extra;
