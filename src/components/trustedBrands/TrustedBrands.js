import React from "react";
import './TrustedBrands.css';
import Finearn from '../../assets/finearn.png';
import Aglobe from '../../assets/aglobe-Logo.png';
import Mirklee from '../../assets/mirklee.jpg';
import Virasath from '../../assets/Virasath Logo.jpg';
import Snack from '../../assets/Snacklorry-Logo.png'

const brands = [
  { name: "Finearn", img: Finearn },
  { name: "Aglobe", img: Aglobe },
  { name: "Mirklee", img: Mirklee },
  { name: "Virasath", img: Virasath },
  { name: "Snack Lorry", img: Snack },
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
