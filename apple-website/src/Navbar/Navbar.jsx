import React, { useState } from "react";
import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { PiBagSimpleLight } from "react-icons/pi";
import "./Navbar.css";
import ShopList from "../navbar_list_components/ShopList";
import MacList from "../navbar_list_components/MacList";

const Navbar = () => {
  const [menu, setMenu] = useState("");

  return (
    <div className="navbar">
      <FaApple size={17} className="apple" />
      <div
        className="nav-item"
        onMouseEnter={() => setMenu("shop")}
        onMouseLeave={() => setMenu("")}
      >
        <h4>Store</h4>
        {menu === "shop" && <ShopList />}
      </div>
      <div className="nav-item"
        onMouseEnter={() => setMenu("mac")}
        onMouseLeave={() => setMenu("")}
        >
      <h4>Mac</h4>
      {menu === "mac" && <MacList />}
      </div>
      <div className="nav-item"
      onMouseEnter={() => setMenu("ipad")}
      onMouseLeave={() => setMenu("")}
      >
      <h4>iPad</h4>
      {menu === "ipad" && <iPadist />}
      </div>
      <h4>iPhone</h4>
      <h4>Watch</h4>
      <h4>AirPods</h4>
      <h4>TV & Home</h4>
      <h4>Entertainment</h4>
      <h4>Accessories</h4>
      <h4>Support</h4>

      <CiSearch size={17} className="search" />
      <PiBagSimpleLight size={18} className="bag" />
    </div>
  );
};

export default Navbar;
