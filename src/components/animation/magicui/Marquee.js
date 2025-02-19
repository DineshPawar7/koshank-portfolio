import React from 'react';
import "../magicui/Marquee.css";

const Marquee = ({ children, pauseOnHover = false }) => {
  return (
    <div
      className={`marquee-container ${pauseOnHover ? 'pause-on-hover' : ''}`}
    >
      <div className="marquee-wrapper">
        {/* First set of cards */}
        {children}
        {/* Second set of cards for infinite loop */}
        {children}
      </div>
    </div>
  );
};

export default Marquee;
