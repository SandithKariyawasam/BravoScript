import React from 'react'
import './Footer.css'
import logo from '../assets/logo.png'
import facebook from '../assets/Facebook.png'
import instagram from '../assets/Instagram.png'
import x from '../assets/X.png'

const Footer = () => {
  return (
    <div className='Footer'>

        <div className="col-one">
            <div className="Foot-logo">
                <img src={logo} alt=''/>
            </div>

            <div className="Foot-btn">

            </div>
        </div>
        
        <div className="col-two">
            <div className="Foot-p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, quam? Odit quasi autem recusandae sapiente! Facilis voluptas quasi, nihil dolorum voluptatum exercitationem corporis quisquam nostrum adipisci dolor esse repudiandae veritatis.
            </div>
            
            <div className="Foot-social">
                <img src={facebook} alt=''/>
                <img src={instagram} alt=''/>
                <img src={x} alt=''/> 
            </div>
        </div>
      
    </div>
  )
}

export default Footer
