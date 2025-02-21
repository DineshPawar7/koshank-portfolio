import React from "react";
import './TrustedBrands.css';
import Shivkumar from '../../assets/Pandit Shivkumar Shri-Logo (1).png';
import Puruhomes from '../../assets/Puru Home Logo.png';
import Mirklee from '../../assets/mirklee.jpg';
import BBW from '../../assets/BBW Logo-1.jpg';
import Aalasi from '../../assets/Aalasi Engineer-Logo.png';

const brands = [
  { name: "Pandit Shivkumar Shree", img: Shivkumar },
  { name: "Puru Home", img: Puruhomes },
  { name: "Mirklee", img: Mirklee },
  { name: "BBW", img: BBW },
  { name: "Aalasi Engineer", img: Aalasi },
];

const TrustedBrands = () => {
  return (
    <div className="trusted-brands">
      <div className="title-container">
        <div className="line"></div>
        <h2>TRUSTED BY AMAZING BRANDS</h2>
        <div className="line"></div>
      </div>

      <div className="brands-list">
        {brands.map((brand, index) => (
          <div className="brand-card" key={index}>
            <img src={brand.img} alt={brand.name} />
            <span>{brand.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedBrands;
