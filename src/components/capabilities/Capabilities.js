import React from 'react';
import '../capabilities/Capabilities.css';

const Capabilities = () => {
  return (
    <div className="capabilities-container">
      <h3 className="capabilities-title">OUR CAPABILITIES</h3>
      <h1 className="capabilities-subtitle">WE CAN HELP YOU WITH...</h1>
      <div className="buttons-container">
        <div className="button-row">
          <button className="capability-btn">Website design</button>
          <button className="capability-btn">Social Media marketing</button>
          <button className="capability-btn">Performance Marketing</button>
          <button className="capability-btn">E-Commerce Development</button>
        </div>
        <div className="button-row">
          <button className="capability-btn">Search Engine Optimization (SEO)</button>
          <button className="capability-btn">Pay Per Click Marketing (PPC)</button>
          <button className="capability-btn">Conversion Rate Optimization</button>
          <button className="capability-btn">Praphic designing</button>
          <button className="capability-btn">Video Editing</button>
        </div>
        <div className="button-row">
          <button className="capability-btn">Content Marketing</button>
          <button className="capability-btn">Landing Page Development</button>
          <button className="capability-btn">Digital ads</button>
          <button className="capability-btn">Logo Designing</button>
        </div>
      </div>
    </div>
  );
}

export default Capabilities;
