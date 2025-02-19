import React, { useState } from 'react';
import './Header.css';
import { TiThMenu } from "react-icons/ti";
import koshankImage from '../../assets/koshank.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-logo">
        <img src={koshankImage} alt="header-Logo" />
      </div>

      {/* Toggle the menu open/close */}
      <button className="header-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <TiThMenu />
      </button>

      {/* Conditional class based on menuOpen */}
      <nav className={`header-nav ${menuOpen ? 'header-active' : ''}`}>
        <ul className="header-nav-list">
          <li><a href="#process">Process</a></li>
          <li><a href="#benefit">Benefit</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#faqs">FAQs</a></li>
          <li><button className="header-get-started">Get Started</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
