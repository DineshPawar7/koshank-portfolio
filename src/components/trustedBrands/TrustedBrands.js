import React from "react";
import './TrustedBrands.css';
import Finearn from '../../assets/finearn.png';
import Dhaani from '../../assets/Dhaani-Logo.png';
import Cinecraft from '../../assets/Cinecraft Logo-1.jpg';
import BBW from '../../assets/BBW Logo-1.jpg';
import Aalasi from '../../assets/Aalasi Engineer-Logo.png';

const brands = [
  { name: "Finearn", img: Finearn },
  { name: "Dhaani", img: Dhaani },
  { name: "Cinecraft", img: Cinecraft },
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
