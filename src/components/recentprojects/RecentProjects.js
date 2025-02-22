import React, { useState, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import './RecentProjects.css';
import Gera from "../../assets/Gera Properties-Logo.png";
import Snacklorry from "../../assets/Snacklorry-Logo.png";
import Dhaani from "../../assets/Dhaani-Logo.png";
import Puruhome from "../../assets/Puru Home Logo.png";
import Gunjwan from "../../assets/Gunjwan Farms-Logo.png";
import IITians from "../../assets/IITians Logo.png";
import Cinecraft from "../../assets/Cinecraft Logo-1.jpg";
import Queen from "../../assets/The Queen Empire-New Logo.png";
import Virasath from "../../assets/Virasath Logo.jpg";
import Quality from "../../assets/Quality Mushroom-Logo.png";
import Radhika from "../../assets/Radhika Real Estate Logo.png";
import Decoredes from "../../assets/Decoredes Logo.jpeg";

const RecentProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

  const projects = [
    {
      image: Gera,
      title: 'Gera Properties',
      subCategory: 'Web Dev',
      button: 'https://www.gera.in/'
    },
    {
      image: Snacklorry,
      title: 'Snacklorry',
      subCategory: 'Web Dev',
      button: 'https://snacklorry.com/'
    },
    {
      image: Dhaani,
      title: 'Dhaani',
      subCategory: 'Web Dev',
      button: 'https://dhaani.co.in/'
    },
    {
      image: Puruhome,
      title: 'Puru Home',
      subCategory: 'Web Dev',
      button: 'https://puruhome.in/'
    },
    {
      image: Gunjwan,
      title: 'Gunjwan Farms',
      subCategory: 'Web Dev',
      button: 'https://gunjwanfarms.com/'
    },
    {
      image: IITians,
      title: 'IITians Academy Pune',
      subCategory: 'Web Dev',
      button: 'https://iitiansacademypune.com/'
    },
    {
      image: Cinecraft,
      title: 'Cinecraft Academy',
      subCategory: 'Web Dev',
      button: 'https://cinecraftacademy.com/'
    },
    {
      image: Queen,
      title: 'The Queen Empire',
      subCategory: 'Web Dev',
      button: 'https://thequeenempires.com/'
    },
    {
      image: Virasath,
      title: 'Virasath',
      subCategory: 'Web Dev',
      button: 'https://virasath.com/'
    },
    {
      image: Quality,
      title: 'Quality Mushroom',
      subCategory: 'Web Dev',
      button: 'https://qualitymushroom.in/'
    },
    {
      image: Radhika,
      title: 'Radhika Real Estate',
      subCategory: 'Web Dev',
      button: 'https://radhikarealestate.com/'
    },
    {
      image: Decoredes,
      title: 'Decoredes',
      subCategory: 'Web Dev',
      button: 'https://decoreds.com/'
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
    <section id="recent-projects">
      <h3 className="project-section-title">OUR PORTFOLIO</h3>
      <h1 className="project-main-title">SEE OUR RECENT WEB DEVELOPMENT PROJECTS</h1>
      <div
        className="carousel"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        {...handlers}  // swipeable handlers
      >
        <button className="prev-btn" onClick={handlePrev}>
          &#8592;
        </button>
        <div
          className="carousel-cards"
          style={{
            transform: `translateX(-${currentIndex * 33.33}%)`,
            transition: 'transform 0.5s ease',
          }}
        >
          {projects.map((project, index) => (
            <div key={index} className="card-item">
              <img src={project.image} alt={project.title} className="card-image" />
              <div className="card-info">
                <h4 className="project-card-title">{project.title}</h4>
                <p className="card-subcategory">{project.subCategory}</p>
              </div>
              {/* 'See Work' button now navigates to the dynamic link */}
              <a href={project.button} target="_blank" rel="noopener noreferrer" className="see-work-btn">
                See Work
              </a>
            </div>
          ))}
        </div>
        <button className="next-btn" onClick={handleNext}>
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default RecentProjects;
