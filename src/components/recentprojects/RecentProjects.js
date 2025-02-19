import React, { useState, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import './RecentProjects.css';

const RecentProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

  const projects = [
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS36xsmM2n3kOTy6gaVeJu1v4t2Wcf7dY_gfg&s',
      title: 'Project One',
      subCategory: 'Web Design',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS36xsmM2n3kOTy6gaVeJu1v4t2Wcf7dY_gfg&s',
      title: 'Project Two',
      subCategory: 'Mobile App',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS36xsmM2n3kOTy6gaVeJu1v4t2Wcf7dY_gfg&s',
      title: 'Project Three',
      subCategory: 'SEO Optimization',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS36xsmM2n3kOTy6gaVeJu1v4t2Wcf7dY_gfg&s',
      title: 'Project Four',
      subCategory: 'App Development',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS36xsmM2n3kOTy6gaVeJu1v4t2Wcf7dY_gfg&s',
      title: 'Project Five',
      subCategory: 'Consulting',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS36xsmM2n3kOTy6gaVeJu1v4t2Wcf7dY_gfg&s',
      title: 'Project Six',
      subCategory: 'Branding',
    },
  ];

  const handleNext = () => {
    // Infinite loop:
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    // Infinite loop:
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  // Swipe handling using react-swipeable
  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // Mouse events for dragging
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
      carouselRef.current.style.cursor = 'grab';  // Reset cursor
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !carouselRef.current) return;
    const x = e.clientX - startX;
    carouselRef.current.scrollLeft = scrollLeft - x;
  };

  return (
    <section className="recent-projects">
      <h3 className="project-section-title">OUR PORTFOLIO</h3>
      <h1 className="project-main-title">See Our Recent Projects</h1>
      <div
        className="carousel"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        {...handlers}  // Applying swipeable handlers here
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
