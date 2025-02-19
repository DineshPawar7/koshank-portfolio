import React from "react";
import "./Hero-Section.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>
          <span className="first-text">Bringing Your</span>
        </h1>
        <h1>
          <span className="second-text">
            Dream Into <span className="highlight-text">Reality</span>
          </span>
        </h1>
        <p className="description">
          We increase revenue and ensure sustainable long-term growth for your
          <span className="second-discription">
          business through powerful Webflow websites.
          </span>
        </p>

        <button className="book-demo-btn">Book a Meeting</button>
      </div>
      <div className="hero-image">
      {/* This SVG represents a star icon, positioned to the right of the hero text. */}
        <svg
          className="star-shape"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fill="rgb(255, 77, 0)"
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
