import React from "react";
import { FaApple } from "react-icons/fa6";
import watch from "../assets/apple_watch.png";
import change from "../assets/change.png";
import "./Slope.css";

const Slope = () => {
  return (
    <div className="slope">
      <div className="watch">
        
        <div className="top-content">
          <div className="logo">
            <div className="top">
              <FaApple size={40} className="steve"/>
              <h2>WATCH</h2>
            </div>
            <p>SERIES 11</p>
          </div>

          <div className="punch">
            <h3>The ultimate watch for a healthy life.</h3>
          </div>

          <div className="buttons">
            <button className="learn">Learn more</button>
            <button className="buy">Buy</button>
          </div>
        </div>
        <img src={watch} alt="watch" className="watch_img" />
      </div>

      <div className="trade">
        <div className="exchange">
          <FaApple size={35} className="pic"/>  
          <h2 className="words">Trade In</h2>
        </div>
        <div className="sentences">
          <p className="layers">Upgrade and save.</p>
          <p className="variables">It's that easy.</p>
        </div>
        <div className="buttons">
          <button className="estimate">Get your estimate</button>
        </div>
      <div className="change">
        <img src={change} alt="change" className="trading" />
      </div>
      </div>
    </div>
  );
};

export default Slope;