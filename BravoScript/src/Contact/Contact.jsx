import React, { useState, useEffect, useRef } from 'react';
import text from '../assets/Text-8.png';
import './Contact.css';

const Contact = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Website Development');
  const [message, setMessage] = useState('');
  const textareaRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [message]);

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

          <div className="wrapper">
            <textarea
              ref={textareaRef}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              spellCheck="false"
              placeholder="Type something here..."
              required
            ></textarea>
          </div>

          
          <div class="checkbox-wrapper">
            <input id="terms-checkbox-37" name="checkbox" type="checkbox"/>
            <label class="terms-label" for="terms-checkbox-37">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 200 200" class="checkbox-svg">
                <mask fill="white" id="path-1-inside-1_476_5-37">
                  <rect height="200" width="200"></rect>
                </mask>
                <rect mask="url(#path-1-inside-1_476_5-37)" stroke-width="40" class="checkbox-box" height="200" width="200"></rect>
                <path stroke-width="15" d="M52 111.018L76.9867 136L149 64" class="checkbox-tick"></path>
              </svg>
              <span class="label-text">I accept the Privacy Policy Terms</span>
            </label>
          </div>


          <div className="Pro-btn">
                <button class="hero-btn">
                    <span>
                        Submit
                    </span>
                </button>
            </div>  


            
        </div>
      </div>
    </div>
  );
};

export default Contact;
