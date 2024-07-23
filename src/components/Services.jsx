import React from 'react'
import image1 from '../assets/images/serv1.png'
import image2 from '../assets/images/serv2.png'
import image from '../assets/images/serv3.png'

const Services = () => {
  return (
    <div className='Services'>
        <h1>Our Services To</h1>
        <h2>Deliver Amazing Products</h2>
<div className="wrapper">
    <div className="cards">
        <img src={image1} alt="" />
        <h1>Services1</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quis, perferendis delectus ratione eos, nesciunt officia corporis fugiat earum deserunt magni. At asperiores nesciunt eaque dicta vero dolores? Officiis sapiente necessitatibus saepe, omnis reiciendis earum!</p>
    </div>
    <div className="cards">
        <img src={image2} alt="" />
        <h1>Services2</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quis, perferendis delectus ratione eos, nesciunt officia corporis fugiat earum deserunt magni. At asperiores nesciunt eaque dicta vero dolores? Officiis sapiente necessitatibus saepe, omnis reiciendis earum!</p>
    </div>
    <div className="cards">
        <img src={image} alt="" />
        <h1>Services3</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quis, perferendis delectus ratione eos, nesciunt officia corporis fugiat earum deserunt magni. At asperiores nesciunt eaque dicta vero dolores? Officiis sapiente necessitatibus saepe, omnis reiciendis earum!</p>
    </div>
</div>
      
    </div>
  )
}

export default Services
