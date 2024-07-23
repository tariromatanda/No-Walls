import React from 'react'
import image1 from "../assets/images/hero1.png"
import image2 from "../assets/images/hero2.png"
import image3 from  '../assets/images/hero3.png'
import image4 from '../assets/images/hero4.png'
import image5 from '../assets/images/hero5.png'

const Hero = () => {
  return (
    <div className='heroSection'>
        <h1>Innovative. Unorthodox.</h1>
      <h5>we're <span>Nowalls</span> Pan Africa.</h5>
      <p><span>_______</span> Main Website coming soon</p>
      <div className="images">
        <div className="firstTwo">
<img src={image1} alt="" />
<img src={image2} alt="" />
        </div>
        <img src={image3} alt="" />
        <img src={image4} alt="" />
        <img src={image5} alt="" />
      </div>
    </div>
  )
}

export default Hero
