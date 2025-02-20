import React from 'react';
import '../capabilities/Capabilities.css';

const Capabilities = () => {
  return (
    <div className="capabilities-container">
      <h3 className="capabilities-title">OUR CAPABILITIES</h3>
      <h1 className="capabilities-subtitle">We can help you with...</h1>
      <div className="buttons-container">
        <div className="button-row">
          <button className="capability-btn">Web design & UI</button>
          <button className="capability-btn">Social media visuals</button>
          <button className="capability-btn">Infographics</button>
          <button className="capability-btn">Design system</button>
        </div>
        <div className="button-row">
          <button className="capability-btn">Email design</button>
          <button className="capability-btn">Stationery</button>
          <button className="capability-btn">Icons</button>
          <button className="capability-btn">Packaging & merch</button>
          <button className="capability-btn">Signage</button>
        </div>
        <div className="button-row">
          <button className="capability-btn">Brochures</button>
          <button className="capability-btn">Logos & branding</button>
          <button className="capability-btn">Digital ads</button>
          <button className="capability-btn">Wireframes</button>
        </div>
      </div>
    </div>
  );
}

export default Capabilities;
