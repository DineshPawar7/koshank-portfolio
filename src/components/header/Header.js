// Header.js
import React, { useState } from 'react';
import './Header.css';
import { TiThMenu } from "react-icons/ti";
import koshankImage from '../../assets/KoshankNew.png';
import { Link } from "react-scroll";  // Import Link from react-scroll


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
          
          <li>
            <Link 
                      to="footer-section"
                      smooth={true} 
                      duration={500} 
                      className="header-get-started">
                      Contact Us
                    </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;