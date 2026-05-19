import React from 'react'
import './IpadList.css'

const IpadList = () => {
  return (
    <div className='ipad_List'>
      <div className='tab'>
        <p>Explore iPad</p>
        <h3>Explore All iPad</h3>
        <h3>iPad Pro</h3>
        <h3>iPad Air</h3>
        <h3>iPad</h3>
        <h3>iPad mini</h3>
        <h3>Apple Pencil</h3>
        <h3>Keyboard</h3>
        <p className='compare'>Compare iPad</p>
      </div>
      <div className='perchase'>
        <p>Shop iPad</p>
        <h2>Shop iPad</h2>
        <h2>iPhone Accessories</h2>
        <h2>Ways to Buy</h2>
        <h2>Personal Setup</h2>
      </div>
      <div className='lantern'>
        <p>More from iPad</p>
        <h2>iPad Support</h2>
        <h2>Apple Care</h2>
        <h2>iPadOS 26</h2>
        <h2>Apple Care</h2>
        <h2>Apps by Apple</h2>
        <h2>Apple Creator Studio</h2>
        <h2>iCloud+</h2>
        <h2>Education</h2>
      </div>
    </div>
  )
}

export default IpadList