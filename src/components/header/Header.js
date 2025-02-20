// Header.js
import React, { useState } from 'react';
import './Header.css';
import { TiThMenu } from "react-icons/ti";
import koshankImage from '../../assets/koshank.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-logo">
        <img src={koshankImage} alt="Koshank Logo" />
      </div>

      <button 
        className="header-hamburger" 
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <TiThMenu />
      </button>

      <nav className={`header-nav ${menuOpen ? 'header-active' : ''}`}>
        <ul className="header-nav-list">
          <li><a href="#process">Process</a></li>
          <li><a href="#benefit">Benefit</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#faqs">FAQs</a></li>
          <li>
            <button className="header-get-started">
              Get Started
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;