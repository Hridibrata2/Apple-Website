import React from "react";
import years from "../assets/50_years.png";
import headphone from "../assets/headphones.png";
import "./Extra.css";

const Extra = () => {
  return (
    <div className="extra">
     <div className="left">
      <img src={years} alt="50 years" className="years" />
      <button className="button">Read the letter from Tim</button>
     </div>
     <div className="right">
      <img src={headphone} alt="headphone" className="headphone" />
      <h1 className="headphone_text">AirPods Max 2</h1>
      <h3 className="quotes">Listening. Remastered.</h3>
      <p className="line2">Order from 25 March</p>
      <p className="line3">Available early next month</p>
      <div className="buttons">
        <button className="button1">Learn more</button>
        <button className="button2">View pricing</button>
      </div>
     </div>
     <div></div>
    </div>
  );
};

export default Extra;
