import React from 'react';
import './HowWeWork.css'; // Assuming you'll add the styles in this CSS file

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

      {/* Icons Section */}
      <div className="how-we-work-icons">
        {/* upcomming code */}
      </div>
    </section>
  );
};

export default HowWeWork;
