import React from "react";
import neo from "../assets/neo_img.png";
import "./Neo.css";

const Neo = () => {
  return (
    <div className="neo">
      <div className="headers">
        <h1 className="heading">MacBook Neo</h1>
        <p className="quote">Amazing Mac. Surprising price.</p>
      </div>
      <div className="buttons">
        <button className="learn">Learn more</button>
        <button className="buy">Buy</button>
      </div>
      <div className="neo_image">
        <img src={neo} alt="apple_img" />
      </div>
    </div>
  );
};

export default Neo;
