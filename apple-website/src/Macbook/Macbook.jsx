import React from 'react'
import macbook from '../assets/macbook pro_trasparent.png'
import './Macbook.css'

const Macbook = () => {
  return (
    <div className='macbook'>
      <div className='headings'>
        <h1 className='header'>Macbook Pro</h1>
        <p className='line'>Now with M5, M5 Pro and M5 Max.</p>
      </div>
      <div className='buttons'>
        <button className='learn'>Learn more</button>
        <button className='buy'>Buy</button>
      </div>
      <div className='macbook_img'>
        <img src={macbook} alt='macbook_img' />
      </div>
    </div>
  )
}

export default Macbook