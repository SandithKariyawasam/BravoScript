import React, { useState } from 'react';
import text from '../assets/Text-8.png';
import './Contact.css';

const Contact = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Website Development');

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  return (
    <div className="Con-container">
      <hr style={{ border: "1px solid black", margin: "20px 0" }} />

      <div className="Con-contain">
        <div className="Con-text">
          <img src={text} alt="" />
          <h1>Contact us for your queries</h1>
          <p>Have a question or just want to say hi? We'd love to hear from you! Reach out and let's create some digital magic together.</p>
        </div>

        <div className="Con-form">
          <h3>Send a Message</h3>
          <div className="Con-row-one">
            <input type="text" placeholder="Full Name" name="text" className="input" />
            <input type="text" placeholder="Email Address" name="text" className="input" />
          </div>
        <div className="drop">
          <div className="dropdown">
            <div className={`select ${dropdownOpen ? 'select-clicked' : ''}`} onClick={toggleDropdown}>
              <span className="selected">{selectedOption}</span>
              <div className={`caret ${dropdownOpen ? 'caret-rotate' : ''}`}></div>
            </div>
            {dropdownOpen && (
              <ul className="menu menu-open">
                {['Digital Marketing', 'Graphic Design', 'Customer Handling', 'Website Development'].map((option, index) => (
                  <li
                    key={index}
                    className={selectedOption === option ? 'active' : ''}
                    onClick={() => selectOption(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
          </div>

          <div className="Con-row-two">
            <textarea placeholder="Write your message here..." />
          </div>
          <div className="Con-row-four">
            <input type="checkbox" />I accept the Privacy Policy Terms
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
