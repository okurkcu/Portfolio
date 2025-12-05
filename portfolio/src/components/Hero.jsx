import React, { useState } from 'react'
import '../css/Hero.css'

const Hero = () => {
  
  return (
    <div className='hero'>
        <div className='hero-right'>
          
        </div>
        <div className='hero-left'>
          <div className='hero-text'>
            <h1 className='hero-header'><span className='fancy-text'>OK</span> is more than fine... It's Designed.</h1>
            <div className="seperator"></div>
            <p className="hero-exp">Building <span className='fancy-text-small'>elegant</span> solutions with clean design and clear purpose.</p>
          </div>
        </div>
    </div>
  )
}

export default Hero