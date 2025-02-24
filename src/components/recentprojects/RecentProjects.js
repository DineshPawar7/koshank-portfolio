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
      // subCategory: 'Web Dev',
      button: 'https://www.gera.in/'
    },
    {
      image: Snacklorry,
      title: 'Snacklorry',
      button: 'https://snacklorry.com/'
    },
    {
      image: Dhaani,
      title: 'Dhaani',
      button: 'https://dhaani.co.in/'
    },
    {
      image: Puruhome,
      title: 'Puru Home',
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
      button: 'https://qualitymushroom.in/'
    },
    {
      image: Radhika,
      title: 'Radhika Real Estate',
      button: 'https://radhikarealestate.com/home/'
    },
    {
      image: Decoredes,
      title: 'Decoredes',
      button: 'https://decoreds.com/'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm1x48jnV2SkDPv-9SvquAqXYinCr0FAkKLg&s',
      title: 'Farzi Cafe',
      button: 'https://farzicafe.com'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Vmjkd610Li-n1Vdmgc7SqtafefUf-e1rRw&s',
      title: 'Swadist Bite',
      button: 'https://swadistbite.com'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA0h2V_xQdGeplcLFkJ59-W4tYRegv-WEf1Q&s',
      title: 'Clumsy Cat Cosmetics',
      button: 'https://clumsycatcosmetics.com'
    },
    {
      image: 'https://www.carnivalpawna.com/wp-content/uploads/2023/04/pawna-lake-camping-2.png',
      title: 'Carnival Pawna',
      button: 'https://www.carnivalpawna.com/'
    },
    {
      image: 'https://gismorochi.in/wp-content/uploads/2024/03/cropped-WhatsApp-Image-2024-03-23-at-4.45.33-PM.jpeg',
      title: 'GIS Morochi',
      button: 'https://gismorochi.in/home/'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm6mKgyLN4meR3jQ9vikmAKNqPGRChCfwy6g&s',
      title: 'Dream Key Realty',
      button: 'https://www.dreamkeyrealty.com.au/'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSObA1pXcErYOMYr5XZv9HDSoRZqfS1dSHcOw&s',
      title: 'Babies Basic',
      button: 'https://babiesbasic.com/'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEKJAKwMLFv2u9gnKcC0rnLqF0a4szA6RDcQ&s',
      title: 'Golden Blings',
      button: 'https://www.goldenblings.com/'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTtdmQR0VGIkFni3j1uOGlNDzsBmEBAaqbEQ&s',
      title: 'Karagiri',
      button: 'https://www.karagiri.com/'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjDEUO1d_tXZZL9BfiuJOgqzdniUMlMf42mQ&s',
      title: 'Define Aesthetics',
      button: 'https://defineaesthetics.com/'
    },
    {
      image: 'https://kesariadvertising.com/wp-content/uploads/2025/01/01-Kesari-Logo-PNG-min-150x150.png',
      title: 'Kesari Advertising',
      button: 'https://kesariadvertising.com/'
    },
    {
      image: 'https://media.licdn.com/dms/image/v2/D4D0BAQEio5CFvigDaA/company-logo_200_200/company-logo_200_200/0/1708067535367/noble_fintech_advisory_logo?e=2147483647&v=beta&t=Pzw8SYriiT4QHT0ym2bfVjYzGHJq3b8CLUTMe669ZaI',
      title: 'Noble Fintech Advisory',
      button: 'https://noblefintechadvisory.com/'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-P1rqqzWhsbehZhaay0v942pkLxR0n9C5EQ&s',
      title: 'Innsite Realtors',
      button: 'https://innsiterealtors.com/'
    },
    {
      image: 'https://tzpplacementsservices.com/wp-content/uploads/2024/06/TZP-LOGO-NEW-RBG.webp',
      title: 'TZP Placements Services',
      button: 'https://tzpplacementsservices.com/'
    },
    {
      image: 'https://aartparamedicalinstitute.com/wp-content/uploads/2024/07/AART-Paramedical-Institute.png',
      title: 'A.A.R.T Paramedical Institute',
      button: 'https://aartparamedicalinstitute.com/'
    },
    {
      image: 'https://revticonstruction.com/wp-content/uploads/2024/08/Revti-Construction-Logo-scaled-2048x2048.webp',
      title: 'Revti Construction',
      button: 'https://revticonstruction.com/'
    },
    {
      image: 'https://ladentiste.in/wp-content/uploads/2024/10/cropped-La-Dentist-Logo-BG.png',
      title: 'La Dentiste',
      button: 'https://ladentiste.in/'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgqJ0ogsN9cOzDX6NX1YMkNQ1qHV_E7k8wYg&s',
      title: 'Dattatray Ghode',
      button: 'https://dattatrayghode.com/'
    },
    {
      image: 'https://studiogh.in/wp-content/uploads/2024/12/std-logo-e1738126877116.jpg',
      title: 'Studio GH',
      button: 'https://studiogh.in/home/',

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
                <p className="card-subcategory">{"Our Web Creations"}</p>
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
