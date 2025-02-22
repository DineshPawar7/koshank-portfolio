import React from 'react';
import '../benefits/Benefits.css';
import { Link } from "react-scroll";  // Import Link from react-scroll
import { AiOutlineRobot } from 'react-icons/ai';
import { FaBriefcase, FaChartLine, FaUsers,FaHandsHelping, FaLifeRing, FaCommentDots, FaShieldAlt, FaAward } from 'react-icons/fa';

const benefitsData = [
  { icon: <AiOutlineRobot />, heading: "Using Latest Technology", description: "Leveraging cutting-edge technology to drive innovation and future solutions." },
  { icon: <FaBriefcase />, heading: "Industry Experience", description: "Expertise gained through years of hands-on work in various industries." },
  { icon: <FaHandsHelping  />, heading: "Dedicated Team", description: "A committed team focused on achieving goals with passion and precision." },
  { icon: <FaChartLine />, heading: "ROI Focused", description: "Prioritizing strategies that maximize return on investment and business growth." },
  { icon: <FaUsers />, heading: "Expert Team", description: "A skilled and dedicated team driving success through specialized expertise." },
  { icon: <FaLifeRing />, heading: "End-to-End Support", description: "Providing comprehensive assistance from start to finish for seamless solutions." },
  { icon: <FaCommentDots />, heading: "Free Consultations", description: "Offering expert advice at no cost to guide your decision-making process." },
  { icon: <FaShieldAlt />, heading: "Trusted company", description: "A reliable and reputable company known for quality and integrity." },
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
          <Link 
          to="pricing-section"  
          smooth={true} 
          duration={500} 
          className="pricing-btn-button">
          Check Pricing
        </Link>
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
