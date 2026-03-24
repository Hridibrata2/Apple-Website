import React from "react";
import pro from "../assets/iPad_Pro.png";
import font from "../assets/air_font.png";
import ipad from "../assets/ipad_air.png";
import "./Air.css";

const Air = () => {
  return (
    <div className="air">
      <div className="left_div">
        <h1 className="ipad_heading">iPad Pro</h1>
        <h3 className="ipad_text">Advanced AI performance</h3>
        <h3 className="ipad_text">and game-changing capabalities</h3>
        <div className="ipad_buttons">
          <button className="ipad_button3">Learn more</button>
          <button className="ipad_button4">Buy</button>
        </div>
        <div className="line">
          <img src={pro} alt="pro" className="pro" />
        </div>
      </div>
      <div className="right_div">
        <div className="ipad_air_headings">
          <h1 className="ipad_air_heading">iPad</h1>
          <img src={font} alt="font" className="font"/>
        </div>
        <div className="lines">
          <p className="dialogue">Now supercharged by M4.</p>
        </div>
        <div className="tabs">
          <button className="button5">Learn more</button>
          <button className="button6">Buy</button>
        </div>
        <div className="ipad_air_img">
          <img src={ipad} alt="ipad" className="ipad" />
        </div>
      </div>
    </div>
  );
};

export default Air;
