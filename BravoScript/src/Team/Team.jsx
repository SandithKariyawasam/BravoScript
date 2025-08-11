import React from 'react'
import './Team.css'
import text from '../assets/Text-7.png'

import per1 from '../assets/Frame 15.png'
import per2 from '../assets/Frame 16.png'
import per3 from '../assets/Frame 17.png'
import per4 from '../assets/Frame 18.png'

import facebook from '../assets/Facebook.png'
import instagram from '../assets/Instagram.png'
import x from '../assets/X.png'

const Team = () => {
  return (
    <div className="Team-container">
      <hr style={{ border: "1px solid black", margin: "20px 0" }} />

      <div className="Team-contain">
        <div className="Team-text">
          <img className='head' src={text} alt="Team Heading" />
          <h1>The team behind BravoScript</h1>
          <p>
            We work to create the most attractive & meaningful for small businesses. Our team always ready to help you.
          </p>
        </div>

        <div className="Team-cards">
          <div className="Team-Details">
            <div class="card">
              <div class="background">
                <img className='member' src={per1} alt='' />
              </div>
              <a href="#"><div class="box box1"><span class="icon"><img className='svg' src={instagram}/></span></div></a>
              <a href="##"><div class="box box2"> <span class="icon"><img className='svg' src={facebook}/></span></div></a>

            </div>
            <h6>Sandith Kariyawasam</h6>
            <p>Founder & Chief Executive Officer</p>
          </div>

          <div className="Team-Details">
            <div class="card">
              <div class="background">
                <img className='member' src={per2} alt='' />
              </div>
              <a href="#"><div class="box box1"><span class="icon"><img className='svg' src={instagram}/></span></div></a>
              <a href="##"><div class="box box2"> <span class="icon"><img className='svg' src={facebook}/></span></div></a>

            </div>
            <h6>Mark Zuckerburge</h6>
            <p>Senior Vice President & Chief Technology Officer</p>
          </div>

          <div className="Team-Details">
            <div class="card">
              <div class="background">
                <img className='member' src={per3} alt='' />
              </div>
              <a href="#"><div class="box box1"><span class="icon"><img className='svg' src={instagram}/></span></div></a>
              <a href="##"><div class="box box2"> <span class="icon"><img className='svg' src={facebook}/></span></div></a>
            </div>
            <h6>Rose Paul</h6>
            <p>Senior Vice President & Chief Revenue Officer</p>
          </div>

          <div className="Team-Details">
            <div class="card">
              <div class="background">
                <img className='member' src={per4} alt='' />
              </div>
              <a href="#"><div class="box box1"><span class="icon"><img className='svg' src={instagram}/></span></div></a>
              <a href="##"><div class="box box2"> <span class="icon"><img className='svg' src={facebook}/></span></div></a>
            </div>
            <h6>Burnado Silva</h6>
            <p>Senior Vice President & Global Head of Sales</p>
          </div>
        </div>

        <div className="Pro-btn">
          <button className="hero-btn">
            <span>
              View All Members
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Team
