import React from 'react'
import './Hero.css'
import textone from '../assets/Text-1.png'

const Hero = () => {
  return (
    <>
        
        <div className='container'>
            
            <div className="hero-container">
                <img src={textone} alt='' className='text-one'/>
                <h1 className='heading'>IT experts for<br/>fast growing IT world</h1>
                <p>Missing out on potential customers without a website? Click below to launch<br/>your free website today and start reaching more people.</p>

                <button class="hero-btn">
                    <span>
                        Book Your Free Strategy Session
                    </span>
                </button>


            </div>
            
        </div>
    </>
  )
}

export default Hero
