import React from 'react'
// import image from '../assets/images/geintouch.png'

const Form = () => {
  return (
    <div className='formPage'>
        <div className="img">
            <img src='images/geintouch.png' alt="" />
        </div>
      <div className="form">
        <h1>Get In Touch With Us</h1>
        <p>Have an enquiry or some feedback from us?</p>
        <p>Fill out the form below to contact our team</p>
        <form method='post' action="/form-submit">
            <div className="forms">
                <input type="text" placeholder='your name' name='name' />
                <input type="text" placeholder='your age' name='age' />
                <input type="text" placeholder='your name' />
                <textarea name="message" id="" cols="30" rows="10" placeholder='your message'></textarea>
            </div>
            <div className="button">
                <button>Submit</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Form
