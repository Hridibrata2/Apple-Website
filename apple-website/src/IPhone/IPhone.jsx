import React from 'react'
import iphone from '../assets/iPhone_17_e.png'
import './IPhone.css'

const IPhone = () => {
  return (
    <div className='e'>
    <div className='headers'>
        <h1 className='name'>iPhone 17e</h1>
        <p className='quote'>Feature stacked. Value Packed.</p>
    </div>
    <div className='buttons'>
        <button className='learn'>Learn more</button>
        <button className='buy'>Buy</button>
    </div>
    <div className='iphoneE_img'>
        <img src={iphone} alt='iphoneE_img' />
    </div>
    </div>
  )
}

export default IPhone