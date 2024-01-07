import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
import { Link } from 'react-router-dom'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>summer</p>
                    {/* <img src={hand_icon} alt="" /> */}
                </div>
                <p>collection</p>
            </div>
            <div className="hero-latest-btn">
                <Link className='hero-latest' to='/womens'><div>Latest Collection</div></Link>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>
    </div>
  )
}
