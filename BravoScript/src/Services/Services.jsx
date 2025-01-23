import React from 'react'
import './Services.css'
import title from '../assets/Text-2.png'
import serimgone from '../assets/Ser-img-1.png'
import serimgtwo from '../assets/Ser-img-2.png'
import serimgthree from '../assets/Ser-img-3.png'

const Services = () => {
  return (
    <div className='ser-container'>
        <hr style={{ border: "1px solid black", margin: "20px 0" }} />
      <div className="ser-contain">

        
          <div className="ser-text">
              <img src={title} alt=' ' className='title'/>
              <h1 className='ser-head'>We provide prominent IT solutions for you</h1>
          </div>
        
          <div class="card-container">
            <div class="card">
              <div class="card-image">
                <img src={serimgone} alt="Card 1"/>
              </div>
            </div>

            <div class="card">
              <div class="card-image">
                <img src={serimgtwo} alt="Card 2"/>
              </div>
            </div>

            <div class="card">
              <div class="card-image">
                <img src={serimgthree} alt="Card 3"/>
              </div>
            </div>
          </div>
      </div>


      </div>
  )
}

export default Services
