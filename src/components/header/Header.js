import React, { useState } from 'react';
import './Header.css';
import Logo from '../../assets/koshank-logo.png';
import { TiThMenu } from "react-icons/ti";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-logo">
        <img src={Logo} alt="header-Logo"/>
      </div>

    {/* The button triggers the menu to open/close in mobile and responsive views based on the current state (menuOpen). */}
      <button className="header-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <TiThMenu />
      </button>

      {/* Conditionally applies the 'header-active' class to the navigation menu when the menu is open (menuOpen is true). */}
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
