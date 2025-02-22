
import React from 'react';
import { FaWhatsappSquare } from 'react-icons/fa';
import './Whatsapp.css';

const WhatsAppIcon = () => {
  const phoneNumber = '+919209231192';
  const message = 'Hello, I need assistance!';

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="whatsapp-icon">
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <FaWhatsappSquare className="whatsapp-icon__icon" />
      </a>
    </div>
  );
};

export default WhatsAppIcon;
