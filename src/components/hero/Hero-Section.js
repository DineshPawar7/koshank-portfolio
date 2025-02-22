// In Hero-Section.js
import React from "react";
import { Link } from "react-scroll";  // Import Link from react-scroll
import "./Hero-Section.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>
          <span className="hero-first-text">Bringing Your</span>
        </h1>
        <h1>
          <span className="hero-second-text">
            Dream Into <span className="hero-highlight-text">Reality</span>
          </span>
        </h1>
        <p className="hero-description">
          We increase revenue and ensure sustainable long-term growth for your
          <span className="hero-second-discription">
            business through powerful Webflow websites.
          </span>
        </p>

        {/* Add a Link component from react-scroll to scroll to Footer's Contact Us section */}
        <Link 
          to="footer-section"   // Points to the 'contact-us' ID in the Footer
          smooth={true} 
          duration={500} 
          className="hero-book-demo-btn">
          Book a Meeting
        </Link>
      </div>
      <div className="hero-hero-image">
        {/* This SVG represents a star icon, positioned to the right of the hero text. */}
        <svg
          className="hero-star-shape"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fill="rgba(255, 77, 0, 0.6)"
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
