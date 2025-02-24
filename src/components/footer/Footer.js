import React from 'react';
import '../footer/Footer.css';
import Logo from '../../assets/logo.png';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTimes } from 'react-icons/fa';

const Footer = () => {
  return (
    <div id="footer-section">
      <div className="footer-first-section">
        <h1>CONTACT US</h1>
        <p>We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</p>
        <form action="https://formsubmit.co/koshank.com@gmail.com" method="POST" className="contact-form">
          <input type="text" name="name" placeholder='Enter your name' required />
          <input type="email" name="email" placeholder='Enter email' required />
          <input type="tel" name="mobile" placeholder='Enter mobile number' required />
          <textarea name="message" placeholder="Type Your Message Here" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>

      <div className="footer-main">
        <div className="footer-left">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <p>Koshank - the leading digital agency based in Pune, Maharashtra, working with top-tier clients, from start-ups to enterprises.</p>
        </div>

        <div className="footer-right">
          <div className="contact-info">
            <p><i className="mail-icon"></i> dineshpawarr07@gmail.com</p>
            <p><i className="phone-icon"></i> +91 920 923 1192</p>
            <div className="social-icons">
              <a href="https://www.facebook.com/koshank.in" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/koshank_official/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/koshank/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://x.com/koshank_in" target="_blank" rel="noopener noreferrer">
                <FaTimes />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="separator-line"></div>

      <div className="footer-links">
        <div className="footer-links-right">
          <p>&copy; 2025 Koshank. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
