import React from 'react';
import './HowWeWork.css';
import { FaPenNib, FaClipboardCheck } from 'react-icons/fa';
import { Link } from "react-scroll";  // Import Link from react-scroll
import { FaBrain } from 'react-icons/fa';



const HowWeWork = () => {
  return (
    <section className="how-we-work">
      <div className="how-we-work-content">
        {/* Left Section */}
        <div className="how-we-work-left">
          <h3 className="section-heading">HOW WE WORK</h3>
          <h3 className="bold-text">
          Koshank a team of skilled professionals, we deliver creative solutions that align with your business goals.
          </h3>
        </div>

        {/* Right Section */}
        <div className="how-we-work-right">
          <h4 className="simple-text">
          Koshank is a team of skilled professionals dedicated to delivering creative digital solutions that align with your business goals. From performance-driven marketing to innovative design, we ensure every strategy enhances your brand’s growth. Partner with us for impactful, results-oriented digital marketing solutions.
          </h4>
          {/* Pricing Button below right text */}
          <div className="pricing-btn">
          <Link 
          to="pricing-btn-button"   // Points to the 'contact-us' ID in the Footer
          smooth={true} 
          duration={500} 
          className="pricing-btn-button">
          Get in Touch
        </Link>
          </div>
        </div>
      </div>

      <div className="hww-icon-container-main">
  <div className="hww-icon-container">
    {/* First Icon */}
    <div className="hww-icon-wrapper">
      <div className="hww-icon left"><FaBrain /></div>
      <h1>Understand Problem</h1>
    </div>

    {/* Arrow between first and second icon */}
    <svg className="svg-arrow" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="150px" height="150px">
  <path 
    d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
    fill="#fe5000"   // Apply fill to make the arrow yellow
    stroke="yellow"  // Apply stroke color for visibility
    strokeWidth="1"   // Make stroke thicker for better visibility
  />
</svg>



    {/* Second Icon */}
    <div className="hww-icon-wrapper">
      <div className="hww-icon middle"><FaPenNib /></div>
      <h1>Make Strategies</h1>
    </div>

    {/* Arrow between second and third icon */}
    <svg className="svg-arrow" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="150px" height="150px">
  <path 
    d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
    fill="#fe5000"   // Apply fill to make the arrow yellow
    stroke="yellow"  // Apply stroke color for visibility
    strokeWidth="1"   // Make stroke thicker for better visibility
  />
</svg>






    {/* Third Icon */}
    <div className="hww-icon-wrapper">
      <div className="hww-icon right"><FaClipboardCheck /></div>
      <h1>Implement & Optimize</h1>
    </div>
  </div>
</div>

    </section>
  );
};

export default HowWeWork;
