import React from 'react'
import image from '../assets/images/contact.png'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact1">
        <h1>NoWalls Pan Africa, Dare To Differ</h1>
        <div className="con1">
            <div className="location">
                <p> 67 Heritage House</p>
                <p>Samora Machael</p>
                <p>Harare</p>
                </div>
                <div className="phone">
                    <p>+263 771 780 670</p>
                </div>
            
        </div>
      </div>
      <div className="image">
        <img src={image} alt="" />
      </div>
    </div>
  )
}

export default Contact
