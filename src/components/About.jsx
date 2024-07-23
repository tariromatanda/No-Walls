import React from 'react'
import image from '../assets/images/abt-img.png'
const About = () => {
  return (
    <div className='aboutSection'>
     <div className="text">
        <h1>Driven by the passion of</h1>
        <h2>building your brand!</h2> 
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quas distinctio harum reprehenderit error blanditiis iusto facere totam commodi voluptate laudantium inventore dolore, est sapiente ab magnam recusandae vero. Accusamus delectus aliquam maxime fugit quasi deserunt aperiam possimus, incidunt cum ducimus in, praesentium nisi perferendis! Soluta neque incidunt qui quos, tempore ab minus odit rem deleniti iste quibusdam ad quis?</p> 
        </div> 
        <div className="img">
<img src={image}alt="" />
        </div>
    </div>
  )
}

export default About
