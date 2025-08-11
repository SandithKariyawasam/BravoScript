import React from 'react'
import './Footer.css'
import logo from '../assets/logo.png'
import facebook from '../assets/Facebook.png'
import instagram from '../assets/Instagram.png'
import x from '../assets/X.png'

const Footer = () => {
    return (
        <>
            <div className="Footer-contain">
                <hr style={{ border: "1px solid black", margin: "40px 0" }} />
                <div className='Footer'>

                    <div className="Foo-col-one">
                        <div className="Foot-logo">
                            <img src={logo} alt='' />
                        </div>

                        <div className="Foo-btn">
                            <button class="hero-btn">
                                <span>
                                    Go to top
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="Foo-col-two">
                        <div className="Foot-p">
                            At our agency, we believe that every client is unique—just like a snowflake or a unicorn—but with fewer rainbows and absolutely no melting. Whether you need a dazzling website, a digital marketing campaign that actually works, stellar graphic design, or content that sings, we've got you covered.
                        </div>

                        <div className="Foot-social">
                            <img src={facebook} alt='' />
                            <img src={instagram} alt='' />
                            <img src={x} alt='' />
                        </div>
                    </div>
                </div>
                <hr style={{ border: "1px solid black", margin: "0px 0" }} />
            </div>            
        </>
    )
}

export default Footer
