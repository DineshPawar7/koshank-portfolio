import React from 'react';
import '../footer/Footer.css';
import Logo from '../../assets/KoshankNew.png';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTimes } from 'react-icons/fa';

const Footer = () => {
  return (
    <div id="footer-section">
      <div className="footer-first-section">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</p>
        <form action="https://formsubmit.co/dsp70458@gmail.com" method="POST" className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="tel" name="phone" placeholder="Your Mobile Number" pattern="[0-9]{10}" required />
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
            <p><i className="mail-icon"></i> connect@koshank.com</p>
            <p><i className="phone-icon"></i> +91 920 923 1192</p>
            <div className="social-icons">
              <i><FaFacebookF /></i>
              <i><FaInstagram /></i>
              <i><FaLinkedinIn /></i>
              <i><FaTimes /></i>
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
          <p>&copy; 2025 Koshank. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
