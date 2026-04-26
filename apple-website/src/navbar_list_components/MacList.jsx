import React from 'react'
import './MacList.css'
import App from './../App';


const MacList = () => {
  return (
    <div className='mac_list'>
        <div className='explore'>
            <p>Explore Mac</p>
            <h3>Explore All Mac</h3>
            <h3>Macbook Neo</h3> 
            <h3>Macbook Air</h3>
            <h3>Macbook Pro</h3>
            <h3>iMac</h3>
            <h3>Mac Mini</h3>
            <h3>Mac Studio</h3>
            <h3>Displays</h3>
            <p className='compare'>Compare Mac</p>
            <p className='switch'>Swich from PC to Mac</p>
        </div>
        <div className='shop'>
          <p>Shop Mac</p>
          <h2 className='pc'>Shop Mac</h2>
          <h2>Mac Accessories</h2>
          <h2>Ways to Buy</h2>
          <h2>Personal Setup</h2>
        </div>
        <div className='more'>
          <p>More from Mac</p>
          <h3>Mac Support</h3>
          <h3>AppleCare</h3>
          <h3>macOS Tahoe</h3>
          <h3>Apple Inteligence</h3>
          <h3>Apps by Apple</h3>
          <h3>Apple Creator Studio</h3>
          <h3>Better with iPhone</h3>
          <h3>iCloud+</h3>
          <h3>Mac for Business</h3>
          <h3>Education</h3>
        </div>
    </div>
  )
}

export default MacList