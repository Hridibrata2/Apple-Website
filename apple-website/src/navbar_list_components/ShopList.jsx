import React from 'react';
import "./ShopList.css";

const ShopList = () => {
  return (
    <div className='shop_list'>
      <div className='leads'>
            <p>Shop</p>
            <h3>Shop the Latest</h3>
            <h3>Mac</h3>
            <h3>iPad</h3>
            <h3>iPhone</h3>
            <h3>Apple Watch</h3>
            <h3>Apple Watch</h3>
            <h3>Accessories</h3>
      </div>
      <div className='links'>
        <p>Quick Links</p>
        <h2>Find a Store</h2>
        <h2>Order Status</h2>
        <h2>Apple Trade In</h2>
        <h2>Ways To Buy</h2>
        <h2>Personal Setup</h2>
      </div>
      <div className='stores'>
        <p>Shop Special Stores</p>
        <h2>Education</h2>
        <h2>Business</h2>
      </div>
    </div>
  );
};

export default ShopList;