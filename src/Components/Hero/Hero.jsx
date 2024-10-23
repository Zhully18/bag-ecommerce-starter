import React from 'react'
import hero_img from '../../assets/bag1.png'
import './Hero.css'
// import { FaShippingFast } from 'react-icons/fa'
// import { BiSupport } from 'react-icons/bi'
// import { MdPayment } from 'react-icons/md'

const Hero = () => {
  return (
    <div>
      <div className="hero">
      <div className="hero_content">
        <div className="hero_left">
          <h1>YBL Leather Quality Bag</h1>
          <p className='text'>Elevate your bag collection with a stylish leather handbag from YBL. This ladies handbag is the 
            perfect handbag to add to your series of collection of stylish bag.
          </p>
          <p className="price">$ 75.99</p>
          <button className="cta">BUY NOW</button>
        </div>
        <div className="hero_right">
          <img src={hero_img} alt="" />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Hero