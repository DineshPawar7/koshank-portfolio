import React, { useState, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import "./RecentProjects.css";
import Gera from "../../assets/assets2/gera1.png";
import Snacklorry from "../../assets/assets2/snack1.png";
import Dhaani from "../../assets/assets2/dhaani1.png";
import Puruhome from "../../assets/assets2/puruhome1.png";
import Gunjwan from "../../assets/assets2/gunjawan1.png";
import IITians from "../../assets/assets2/iitian1.png";
import Cinecraft from "../../assets/assets2/cinecraft1.png";
import Virasath from "../../assets/assets2/virasath1.png";
import Quality from "../../assets/assets2/quality1.png";
import Decoredes from "../../assets/assets2/decors1.png";
import Farzi from "../../assets/assets2/farzi1.png";
import Swadist from "../../assets/assets2/swadisht1.png";
import Cat from "../../assets/assets2/cat1.png";
import Carnival from "../../assets/assets2/carnival1.png";
import GIS from "../../assets/assets2/school1.png";
import Dream from "../../assets/assets2/dream1.png";
import Babies from "../../assets/assets2/babies1.png";
import Golden from "../../assets/assets2/golden1.png";
import Queen from "../../assets/assets2/queen1.png";
import Karagiri from "../../assets/assets2/karagiri1.png";
import Define from "../../assets/assets2/define1.png";
import Kesari from "../../assets/assets2/kasri1.png";
import Fintech from "../../assets/assets2/finetech1.png";
import Innsite from "../../assets/assets2/innsite1.png";
import TZP from "../../assets/assets2/tzp1.png";
import AART from "../../assets/assets2/aart1.png";
import Revti from "../../assets/assets2/revti1.png";
import Dentiste from "../../assets/assets2/dentist1.png";
import Dattatray from "../../assets/assets2/arch1.png";
import GH from "../../assets/assets2/gh1.png";




const RecentProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

  const projects = [
    {
      image: Gera,
      title: "Gera Properties",
      // subCategory: 'Web Dev',
      button: "https://www.gera.in/",
    },
    {
      image: Snacklorry,
      title: "Snacklorry",
      button: "https://snacklorry.com/",
    },
    {
      image: Dhaani,
      title: "Dhaani",
      button: "https://dhaani.co.in/",
    },
    {
      image: Puruhome,
      title: "Puru Home",
      button: "https://puruhome.in/",
    },
    {
      image: Gunjwan,
      title: "Gunjwan Farms",
      subCategory: "Web Dev",
      button: "https://gunjwanfarms.com/",
    },
    {
      image: IITians,
      title: "IITians Academy Pune",
      button: "https://iitiansacademypune.com/",
    },
    {
      image: Cinecraft,
      title: "Cinecraft Academy",
      subCategory: "Web Dev",
      button: "https://cinecraftacademy.com/",
    },
    {
      image: Queen,
      title: "The Queen Empire",
      button: "https://thequeenempires.com/",
    },
    {
      image: Virasath,
      title: "Virasath",
      subCategory: "Web Dev",
      button: "https://virasath.com/",
    },
    {
      image: Quality,
      title: "Quality Mushroom",
      button: "https://qualitymushroom.in/",
    },
    {
      image: Decoredes,
      title: "Decoredes",
      button: "https://decoreds.com/",
    },
    {
      image: Farzi,
      title: "Farzi Cafe",
      button: "https://farzicafe.com",
    },
    {
      image: Swadist,
      title: "Swadist Bite",
      button: "https://swadistbite.com",
    },
    {
      image: Cat,
      title: "Clumsy Cat Cosmetics",
      button: "https://clumsycatcosmetics.com",
    },
    {
      image: Carnival,
      title: "Carnival Pawna",
      button: "https://www.carnivalpawna.com/",
    },
    {
      image: GIS,
      title: "GIS Morochi",
      button: "https://gismorochi.in/home/",
    },
    {
      image: Dream,
      title: "Dream Key Realty",
      button: "https://www.dreamkeyrealty.com.au/",
    },
    {
      image: Babies,
      title: "Babies Basic",
      button: "https://babiesbasic.com/",
    },
    {
      image: Golden,
      title: "Golden Blings",
      button: "https://www.goldenblings.com/",
    },
    {
      image: Karagiri,
      title: "Karagiri",
      button: "https://www.karagiri.com/",
    },
    {
      image: Define,
      title: "Define Aesthetics",
      button: "https://defineaesthetics.com/",
    },
    {
      image: Kesari,
      title: "Kesari Advertising",
      button: "https://kesariadvertising.com/",
    },
    {
      image: Fintech,
      title: "Noble Fintech Advisory",
      button: "https://noblefintechadvisory.com/",
    },
    {
      image: Innsite,
      title: "Innsite Realtors",
      button: "https://innsiterealtors.com/",
    },
    {
      image: TZP,
      title: "TZP Placements Services",
      button: "https://tzpplacementsservices.com/",
    },
    {
      image: AART,
      title: "A.A.R.T Paramedical Institute",
      button: "https://aartparamedicalinstitute.com/",
    },
    {
      image: Revti,
      title: "Revti Construction",
      button: "https://revticonstruction.com/",
    },
    {
      image: Dentiste,
      title: "La Dentiste",
      button: "https://ladentiste.in/",
    },
    {
      image: Dattatray,
      title: "Dattatray Ghode",
      button: "https://dattatrayghode.com/",
    },
    {
      image: GH,
      title: "Studio GH",
      button: "https://studiogh.in/home/",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
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
      carouselRef.current.style.cursor = "grabbing";
    }
  };

  const handleMouseUp = () => {
    if (carouselRef.current) {
      setIsDragging(false);
      carouselRef.current.style.cursor = "grab"; // Reset cursor
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
      <h1 className="project-main-title">
        SEE OUR RECENT WEB DEVELOPMENT PROJECTS
      </h1>
      <div
        className="carousel"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        {...handlers} // swipeable handlers
      >
        <button className="prev-btn" onClick={handlePrev}>
          &#8592;
        </button>
        <div
          className="carousel-cards"
          style={{
            transform: `translateX(-${currentIndex * 33.33}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {projects.map((project, index) => (
            <div key={index} className="card-item">
              <img
                src={project.image}
                alt={project.title}
                className="card-image"
              />
              <div className="card-info">
                <h4 className="project-card-title">{project.title}</h4>
                <p className="card-subcategory">{"Our Web Creations"}</p>
              </div>
              {/* 'See Work' button now navigates to the dynamic link */}
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
