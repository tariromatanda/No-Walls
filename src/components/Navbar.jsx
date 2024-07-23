import React from 'react'



const Navbar = ({logo}) => {
  return (
    <div className='navBar'>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul className="nav-links">
        <li>Services</li>
        <li>Subscribe</li>
        <li>Contact Us</li>
      </ul>
    </div>
  )
}

export default Navbar
