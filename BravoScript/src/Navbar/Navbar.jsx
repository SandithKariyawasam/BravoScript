import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [bump, setBump] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 5;
      setIsScrolled(scrolled);

      if (scrolled && !bump) {
        setBump(true); // Trigger bump animation
        setTimeout(() => setBump(false), 1000); // Remove bump effect after animation
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [bump]);

  return (
    <>
      <div className={`navbar ${isScrolled ? 'scrolled' : ''} ${bump ? 'bump' : ''}`}>
        <img src={logo} alt="" className="logo" />

        <ul>
          <li>Services</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Team</li>
        </ul>

        <div className="nav-btn">
          <button className="ui-btn">
            <span>Let's Connect</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;


