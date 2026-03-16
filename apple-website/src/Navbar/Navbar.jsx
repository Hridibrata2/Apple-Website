import React from "react";
import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { PiBagSimpleLight } from "react-icons/pi";
import "./Navbar.css";


const Navbar = () => {
  return (
    <div className="navbar">
      <FaApple size={17} className="apple"/>
      <h4>Store</h4>
      <h4>Mac</h4>
      <h4>iPad</h4>
      <h4>iPhone</h4>
      <h4>Watch</h4>
      <h4>AirPods</h4>
      <h4>TV & Home</h4>
      <h4>Entertainment</h4>
      <h4>Accessories</h4>
      <h4>Support</h4>
      <CiSearch size={17} strokeWidth={1.1} className="search"/>
      <PiBagSimpleLight size={18} strokeWidth={5} className="bag"/>
    </div>
  );
};

export default Navbar;
