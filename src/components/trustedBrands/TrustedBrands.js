import React from "react";
import './TrustedBrands.css';

const brands = [
  { name: "Someting Cat", img: "https://www.koshank.com/assets/images/client4.jpg" },
  { name: "Binary Updates", img: "https://www.koshank.com/assets/images/client7.jpg" },
  { name: "CineCraft", img: "https://www.koshank.com/assets/images/client2.jpg" },
  { name: "The Sustainable", img: "https://www.koshank.com/assets/images/client8.jpg" },
  { name: "Snack Lorry", img: "https://www.koshank.com/assets/images/client1.jpg" },
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
