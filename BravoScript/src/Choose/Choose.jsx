import React from 'react'
import './Choose.css'
import img from '../assets/Cho-img.png'
import text from '../assets/Text-3.png'

const Choose = () => {
  return (
    <div className='cho-container'>
        <hr style={{ border: "1px solid black", margin: "20px 0" }} />

        <div className="cho-contain">
          <div className="main-contain">
            <div className="img">
              <img src={img} alt='' />
            </div>
            <div className="text">
              <img src={text} alt=''/>
              <h1>We are a certified IT company</h1>
              <p>We have been helping businesses with their IT needs since 2010. We are provide fast, reliable, outsourced onsite and remote IT support services.<br/><br/>
              Every business, whether small or big, needs effective IT services and systems to increase productivity.</p>
              <button class="hero-btn">
                    <span>
                        See More
                    </span>
                </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Choose
