import React from 'react';
import './HowWeWork.css'; // Assuming you'll add the styles in this CSS file
import { IoRocket } from "react-icons/io5";
import { FaPenNib } from 'react-icons/fa';
import { FaArrowsRotate } from "react-icons/fa6";


const HowWeWork = () => {
  return (
    <section className="how-we-work">
      <div className="how-we-work-content">
        {/* Left Section */}
        <div className="how-we-work-left">
          <h3 className="section-heading">HOW WE WORK</h3>
          <h3 className="bold-text">
            Get a dedicated design team at a fraction of the cost.
          </h3>
        </div>

        {/* Right Section */}
        <div className="how-we-work-right">
          <h4 className="simple-text">
            Grow your brand with high-quality design for a flat monthly fee.
            Work with senior designers. Subscribe and make as many requests as you
            need - no limits.
          </h4>
          {/* Pricing Button below right text */}
          <div className="pricing-btn">
            <button className="pricing-btn-button">Pricing</button>
          </div>
        </div>
      </div>

      <div className="hww-icon-container-main">
      <div className="hww-icon-container">
        <div className="hww-icon-wrapper">
          <div className="hww-icon left"><IoRocket /></div>
          <h1>Subscribe & get started</h1>
          <p>Submit as many design tasks as you need without worrying about individual project fees.</p>
        </div>
       {/* <svg className="svg-arrow">
     <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
  </svg> */}
        <div className="hww-icon-wrapper">
          <div className="hww-icon middle"><FaPenNib /></div>
          <h1>Polished designs - on time</h1>
          <p>Our designers get to work to deliver your request. Receive your design within a few days.</p>
        </div>
       {/* <svg className="svg-arrow">
     <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
  </svg> */}
        <div className="hww-icon-wrapper">
          <div className="hww-icon right"><FaArrowsRotate /></div>
          <h1>Revisions made simple</h1>
          <p>Custom designs, prompt replies and as many revisions as you need.</p>
        </div>
        
      </div>
      
    </div>
    </section>
  );
};

export default HowWeWork;
