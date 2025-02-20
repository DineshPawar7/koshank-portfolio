import React from 'react';
import '../benefits/Benefits.css';
import { FaInfinity, FaBolt, FaWrench, FaClock, FaCalendarCheck, FaDollarSign, FaCogs, FaPalette, FaAward } from 'react-icons/fa'; // Icons import

const benefitsData = [
  { icon: <FaInfinity />, heading: "Unlimited Requests", description: "Submit as many design requests as you want, and we'll handle them one by one." },
  { icon: <FaBolt />, heading: "High Quality Designs", description: "Get top-notch designs from experienced professionals tailored to your needs." },
  { icon: <FaWrench />, heading: "Fully Customizable", description: "Every design is crafted uniquely for you, ensuring originality and creativity." },
  { icon: <FaClock />, heading: "Fast Turnaround", description: "Expect quick delivery within 2-3 days for most design requests." },
  { icon: <FaCalendarCheck />, heading: "Flexible Subscription", description: "Cancel or pause your subscription anytime without any hassle." },
  { icon: <FaDollarSign />, heading: "Cost Effective", description: "Get premium designs at a fraction of the cost of hiring a full-time designer." },
  { icon: <FaCogs />, heading: "Seamless Process", description: "A streamlined process ensures smooth collaboration and project execution." },
  { icon: <FaPalette />, heading: "Creative Excellence", description: "Our team delivers unique and artistic solutions for all your design needs." },
  { icon: <FaAward />, heading: "Expert Designers", description: "Work with a team that has 10+ years of industry experience." },
];

const Benefits = () => {
  return (
    <section className="how-we-work">
      <div className="how-we-work-content">
        {/* Left Section */}
        <div className="how-we-work-left">
          <h3 className="benefits-section-heading">BENEFITS</h3>
          <h3 className="benefits-bold-text">
            The design subscription that connects you to your dream team.
          </h3>
        </div>

        {/* Right Section */}
        <div className="how-we-work-right">
          <h4 className="benefits-simple-text">
            A subscription can alleviate the stress of staffing, managing expenses, or making design calls like a Creative Director. We partner with you to ensure that your design elevates your brand to new levels.
          </h4>
          <div className="benefits-pricing-btn">
            <button className="pricing-btn-button">Pricing</button>
          </div>
        </div>
      </div>

      {/* Benefits Grid Section */}
      <div className="benefits-grid-container">
        {benefitsData.map((benefit, index) => (
          <div className="benefit-box" key={index}>
            <div className="benefits-icon">{benefit.icon}</div>
            <h3 className="benefits-title">{benefit.heading}</h3>
            <p className="benefits-description">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
