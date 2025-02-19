import React from 'react';
import './PricingSection.css';
import { FaStar } from "react-icons/fa";


const PricingSection = () => {
  return (
    <section className="pricing-section">
      <h3 className="pricing-title">Clear & Simple Pricing</h3>
      <h1 className="main-title">Simple pricing to level up your brand.</h1>
      <p className="pricing-description">
        Senior experts. On-demand requests. Fast turnarounds. Flat monthly fee. Cancel anytime.
      </p>

      <div className="pricing-cards">
        <div className="card-section">
          <h4 className="card-title">Basic Plane</h4>
          <p className="card-description">Get started with everything you need for small projects.</p>
          <div className="pricing-separator"></div>
          <div className="card-price">$49 / month</div>
          <p className="price-description">Affordable for small businesses</p>
          <div className="separator"></div>

          <div className="pricing-features">
            <div className="pricing-feature">
              <span className="pricing-icon"><FaStar /></span> 1x active task at a time
            </div>
            <div className="pricing-feature">
              <span className="pricing-icon"><FaStar /></span> Unlimited revisions
            </div>
            <div className="pricing-feature">
              <span className="pricing-icon"><FaStar /></span> Dedicated project manager
            </div>
            <div className="pricing-feature">
              <span className="pricing-icon"><FaStar /></span> Daily comms through Slack
            </div>
            <div className="pricing-feature">
              <span className="pricing-icon"><FaStar /></span> Work with senior designers
            </div>
            <div className="pricing-feature">
              <span className="pricing-icon"><FaStar /></span> 2-3 days turn around time
            </div>
            <div className="pricing-feature">
              <span className="pricing-icon"><FaStar /></span> Top tier design
            </div>
          </div>

          <div className="pricing-buttons">
            <button className="pricing-book-call">Book a Call</button>
            <button className="pricing-click-to-buy">Click to Buy</button>
          </div>
        </div>

        <div className="card-section">
          <h4 className="card-title">Pro Plan</h4>
          <p className="card-description">Advanced features for growing businesses.</p>
          <div className="pricing-separator"></div>
          <div className="card-price">$99 / month</div>
          <p className="price-description">Get more tools to accelerate your growth</p>
          <div className="pricing-separator"></div>

          <div className="pricing-features">
            <div className="pricing-feature">
              <span className="pricing-icon"><FaStar /></span> 3x active task at a time
            </div>
            <div className="pricing-feature">
              <span className="pricing-icon"><FaStar /></span> Unlimited revisions
            </div>
            <div className="pricing-feature">
              <span className="pricing-icon"><FaStar /></span> Dedicated project manager
            </div>
            <div className="pricing-feature">
              <span className="pricing-icon"><FaStar /></span> Daily comms through Slack
            </div>
            <div className="pricing-feature">
              <span className="pricing-icon"><FaStar /></span> Work with senior designers
            </div>
            <div className="pricing-feature">
              <span className="pricing-icon"><FaStar /></span> 2-3 days turn around time
            </div>
            <div className="pricing-feature">
              <span className="pricing-icon"><FaStar /></span> Top tier design
            </div>
          </div>

          <div className="pricing-buttons">
            <button className="pricing-book-call">Book a Call</button>
            <button className="pricing-click-to-buy">Click to Buy</button>
          </div>
        </div>

        <div className="card-section">
          <h4 className="card-title">Enterprise Plan</h4>
          <p className="card-description">Tailored solutions for larger teams and enterprises.</p>
          <div className="pricing-separator"></div>
          <div className="card-price">$199 / month</div>
          <p className="price-description">For enterprises looking for scalable solutions</p>
          <div className="pricing-separator"></div>

          <div className="pricing-features">
            <div className="pricing-feature">
              <span className="pricing-icon"><FaStar /></span> Unlimited active tasks
            </div>
            <div className="pricing-feature">
              <span className="pricing-icon"><FaStar /></span> Unlimited revisions
            </div>
            <div className="pricing-feature">
              <span className="pricing-icon"><FaStar /></span> Dedicated project manager
            </div>
            <div className="pricing-feature">
              <span className="pricing-icon"><FaStar /></span> Daily comms through Slack
            </div>
            <div className="pricing-feature">
              <span className="pricing-icon"><FaStar /></span> Work with senior designers
            </div>
            <div className="pricing-feature">
              <span className="pricing-icon"><FaStar /></span> 2-3 days turn around time
            </div>
            <div className="pricing-feature">
              <span className="pricing-icon"><FaStar /></span> Top tier design
            </div>
          </div>

          <div className="pricing-buttons">
            <button className="pricing-book-call">Book a Call</button>
            <button className="pricing-click-to-buy">Click to Buy</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
