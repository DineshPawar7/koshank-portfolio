import React from 'react';
import '../footer/Footer.css';
import Logo from '../../assets/koshank.png';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTimes } from 'react-icons/fa';




const Footer = () => {
  return (
    <div className='footer-main-section'>
      {/* First Section */}
      <div className="footer-first-section">
        <div className="footer-first-section-content">
          <h1>Become part of the</h1>
          <h1>design revolution</h1>
          <p>Jump on a membership and start requesting designs right away!</p>
          <button className="pricing-button">Pricing</button>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="footer-main">
        <div className="footer-left">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <p>Koshank - the leading digital agency based in the Pune Maharashtra, working with top-tier clients, from start-ups to enterprises.</p>
        </div>
        <div className="footer-right">
          <div className="contact-info">
            <p>
              <i className="mail-icon"></i> connect@koshank.com
            </p>
            <p>
              <i className="phone-icon"></i> +91 920 923 1192
            </p>
            <div className="social-icons">
              <i className="fab fa-facebook-f"><FaInstagram /></i>
              <i className="fab fa-instagram"><FaFacebookF /></i>
              <i className="fab fa-linkedin-in"><FaLinkedinIn /></i>
              <i className="fab fa-x"><FaTimes /></i>
            </div>
          </div>
        </div>
      </div>

      <div className="separator-line"></div>

      <div className="footer-links">
        <div className="footer-links-left">
          <ul>
            <li>Process</li>
            <li>Benefits</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="footer-links-right">
          <p>&copy; 2025 koshank. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
