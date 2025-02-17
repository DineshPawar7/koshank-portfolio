import React, { useState } from 'react';
import './Header.css';
import Logo from '../../assets/koshank-logo.png';
import { TiThMenu } from "react-icons/ti";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Left: Responsive Logo */}
      <div className="header-logo">
        <img src={Logo} alt="header-Logo"/>
      </div>

      {/* Right: Hamburger Icon */}
      <button className="header-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <TiThMenu />
      </button>

      {/* Navigation Menu */}
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
