import React, { useState, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import './OtherProjects.css';
import BBW from "../../assets/BBW Logo-1.jpg";
import Virasath from "../../assets/Virasath Logo.jpg";
import Vastu from "../../assets/Vastu Umbartha Logo.jpg";
import Studio from "../../assets/Studio GH-Logo.png";
import Sparkle from "../../assets/Sparkle Education Logo.png";
import Shishu from "../../assets/Shishu New Logo Update-1.png";
import Ems from "../../assets/ems-Logo png.png";
import Code from "../../assets/Code World Infotech Logo.png";
import Kumar from "../../assets/Kumar Comuters-Logo.png";
import GIS from "../../assets/GIS Morochi-Logo.png";
import Nest from "../../assets/Nest Realty-Logo.png";
import Decoredes from "../../assets/Decoredes Logo.jpeg";

const OtherProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

  const projects = [
    {
      image: BBW,
      title: 'BBW',
      subCategory: 'Designing/Marketing',
      button: 'https://www.instagram.com/bestbelgianwaffle/'
    },
    {
      image: Virasath,
      title: 'Virasath',
      subCategory: 'Designing/Marketing',
      button: 'https://www.instagram.com/virasath_/'
    },
    {
      image: Vastu,
      title: 'Vastu Umbartha',
      subCategory: 'Designing',
      button: '#'
    },
    {
      image: Studio,
      title: 'Studio GH',
      subCategory: 'Designing',
      button: 'https://www.instagram.com/studiogh.in/'
    },
    {
      image: Sparkle,
      title: 'Sparkle Education',
      subCategory: 'Designing',
      button: '#'
    },
    {
      image: Shishu,
      title: 'Shishu',
      subCategory: 'Branding',
      button: '#'
    },
    {
      image: Ems,
      title: 'EMS Share Market',
      subCategory: 'Branding',
      button: 'https://www.instagram.com/emssharemarketclasses/'
    },
    {
      image: Code,
      title: 'Code World Infotech',
      subCategory: 'Branding',
      button: '#'
    },
    {
      image: Kumar,
      title: 'Kumar Comuters',
      subCategory: 'Branding',
      button: 'https://kumarcomputers.com'
    },
    {
      image: GIS,
      title: 'GIS',
      subCategory: 'Branding',
      button: 'https://gis.com'
    },
    {
      image: Nest,
      title: 'Nest Realty',
      subCategory: 'Branding',
      button: '#'
    },
    {
      image: Decoredes,
      title: 'Decoredes',
      subCategory: 'Branding',
      button: '#'
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const handleMouseDown = (e) => {
    if (carouselRef.current) {
      setIsDragging(true);
      setStartX(e.clientX);
      setScrollLeft(carouselRef.current.scrollLeft);
      carouselRef.current.style.cursor = 'grabbing';
    }
  };

  const handleMouseUp = () => {
    if (carouselRef.current) {
      setIsDragging(false);
      carouselRef.current.style.cursor = 'grab'; // Reset cursor
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !carouselRef.current) return;
    const x = e.clientX - startX;
    carouselRef.current.scrollLeft = scrollLeft - x;
  };

  return (
    <section id="other-projects">
      <h1 className="other-project-main-title">OTHER PROJECTS</h1>
      <div
        className="other-carousel"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        {...handlers}  // swipeable handlers
      >
        <button className="other-prev-btn" onClick={handlePrev}>
          &#8592;
        </button>
        <div
          className="other-carousel-cards"
          style={{
            transform: `translateX(-${currentIndex * 33.33}%)`,
            transition: 'transform 0.5s ease',
          }}
        >
          {projects.map((project, index) => (
            <div key={index} className="other-card-item">
              <img src={project.image} alt={project.title} className="other-card-image" />
              <div className="other-card-info">
                <h4 className="other-project-card-title">{project.title}</h4>
                <p className="other-card-subcategory">{project.subCategory}</p>
              </div>
              {/* 'See Work' button now navigates to the dynamic link */}
              <a href={project.button} target="_blank" rel="noopener noreferrer" className="other-see-work-btn">
                See Work
              </a>
            </div>
          ))}
        </div>
        <button className="other-next-btn" onClick={handleNext}>
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default OtherProjects;
