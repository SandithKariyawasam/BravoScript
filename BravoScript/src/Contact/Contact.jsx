import React from 'react'
import text from '../assets/Text-8.png'
import './Contact.css'

const Contact = () => {
  return (
    <div className='Con-container'>
            <hr style={{ border: "1px solid black", margin: "20px 0" }} />
        
      <div className="Con-contain">
        <div className="Con-text">
          <img src={text} alt=''/>
          <h1>Contact us for your queries</h1>
          <p>Have a question or just want to say hi? We'd love to hear from you! Reach out and let's create some digital magic together.</p>
        </div>

        <div className="Con-form">
          <h3>Send a Message</h3>
          <div className="Con-row-one">
            <input type="text" placeholder="Full Name" name="text" class="input"/>
            <input type="text" placeholder="Email Address" name="text" class="input"/>
          </div>
          
          <div className="dropdown">
            <div className="select">
              <span className='selected'>Website Development</span>
              <div className="caret"></div>
            </div>
            <ul className='menu'>
              <li>Digital Marketing</li>
              <li>Graphic Design</li>
              <li>Customer Handling</li>
              <li className='active'>Website Development</li>
            </ul>
          </div>

          <div className="Con-row-two">
            <textarea/>
          </div>
          <div className="Con-row-four">
            <input type='checkbox'/>I accept the Privacy Policy Terms
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact
