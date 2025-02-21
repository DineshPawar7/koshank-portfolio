import React from 'react'
import '../footer/Footer.css';
import Logo from '../../assets/koshank.png';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTimes } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    <div>
      <form action="https://formsubmit.co/dsp70458@gmail.com" method="POST">
     <input type="text" name="name" required/>
     <input type="email" name="email" required/>
     <input type="tel" name="phone" placeholder="Your Mobile Number" pattern="[0-9]{10}" required />
     <button type="submit">Send</button>
</form>
    </div>
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
</>
);
};

export default Footer;