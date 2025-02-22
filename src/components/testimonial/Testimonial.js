import React from 'react';
import FadeOnScroll from "../animation/FadeOnScroll";
import Marquee from "../animation/magicui/Marquee";
import TitleDark from "../ui/TitleDark";
import "../testimonial/Testimonial.css";
import Engineer from '../../assets//Aalasi Engineer-Logo.png';
import AART from '../../assets/AART Paramedical Institute 2.jpg';
import Aglobe from '../../assets/aglobe-Logo.png';
import ArchAngels from '../../assets/ArchAngels Logo.png';
import Askone from '../../assets/Askone Logo.jpeg';
import BBW from '../../assets/BBW Logo-1.jpg';
import Bhagwan from '../../assets/Bhagwan Developers Logo-Final (1).png';
import Business from '../../assets/Business-Registro-Logo---Final.jpg';
import Cine from '../../assets/Cine Fashion India-Logo.png';
import Cinecraft from '../../assets/Cinecraft Logo-1.jpg';
import Codeworld from '../../assets/Code World Infotech Logo.png';
import Decoredes from '../../assets/Decoredes Logo.jpeg';
import Dhaani from '../../assets/Dhaani-Logo.png';
import EMS from '../../assets/ems-Logo png.png';
import Exaam from '../../assets/Exaam Guru Logo.png';
import Finearn from '../../assets/finearn.png';
import Gera from '../../assets/Gera Properties-Logo.png';
import GIS from '../../assets/GIS Morochi-Logo.png';
import GlobalReach from '../../assets/Global Reach Logo.png';
import Gunjwan from '../../assets/Gunjwan Farms-Logo.png';
import Gandharv from '../../assets/hotel gandharv logo.png';
import IBS from '../../assets/iBs Logo.png';
import Iitians from '../../assets/IITians Logo.png';
import Kidzee from '../../assets/Kidzee Bibwewadi Logo.png';
import Kumar from '../../assets/Kumar Comuters-Logo.png';


const reviews = [
  { name: "Kumar Computers", username: "Client", body: "Their logo design transformed our brand's image. Highly creative and professional service!", img: Kumar },
  { name: "Kidzee Bibwewadi", username: "Client", body: "Excellent web development skills! Our website is faster, more engaging, and user-friendly.", img: Kidzee },
  { name: "IITians Academy Pune", username: "Client", body: "The digital marketing strategies they implemented boosted our sales significantly. Highly recommend!", img: Iitians },
  { name: "IBS", username: "Client", body: "Great experience working with them. They truly understand business marketing and results-driven strategies.", img: IBS },
  { name: "Hotel Gandharv ", username: "Client", body: "Fantastic team! They rebranded our business with a perfect logo and website design.", img: Gandharv },
  { name: "Gunjwan", username: "Client", body: "Koshank's team is very friendly, and the great company environment helps solve clients' problems efficiently.", img: Gunjwan },
  { name: "GlobalReach", username: "Client", body: "Their marketing services helped us increase our online presence and attract more customers.", img: GlobalReach },
  { name: "GIS Morochi", username: "Client", body: "Amazing digital marketing strategies! We’ve seen great ROI from their campaigns.", img: GIS },
  { name: "Gera Properties", username: "Client", body: "They helped us with business marketing that really connected us with our target audience.", img: Gera },
  { name: "Finearn", username: "Client", body: "Creative and reliable web developers. Our site looks amazing, and it’s running smoothly!", img: Finearn },
  { name: "Exaam Guru", username: "Client", body: "Incredible logo designs and branding. It helped us stand out in a crowded market.", img: Exaam },
  { name: "EMS", username: "Client", body: "We saw an immediate boost in traffic and engagement after implementing their digital strategies.", img: EMS },
  { name: "Dhaani", username: "Client", body: "Thanks to their marketing expertise, we’ve gained more leads and grown our business.", img: Dhaani },
  { name: "Decoredes", username: "Client", body: "Their professionalism and commitment to our business needs made them a great partner.", img: Decoredes },
  { name: "Code World Infotech", username: "Client", body: "Excellent web development! Our site is optimized, easy to navigate, and aesthetically pleasing.", img: Codeworld },
  { name: "Cinecraft", username: "Client", body: "The digital marketing team has been outstanding. Our sales have doubled since we started working with them.", img: Cinecraft },
  { name: "Cine Fashion India", username: "Client", body: "They’ve helped us refine our brand identity and enhanced our digital presence significantly.", img: Cine },
  { name: "Business Registro", username: "Client", body: "Highly skilled professionals. Their work in digital marketing has grown our client base tremendously.", img: Business },
  { name: "Bhagwan Developers", username: "Client", body: "Our website redesign looks incredible! The team is responsive and understands our needs perfectly.", img: Bhagwan },
  { name: "Askone", username: "Client", body: "Their business marketing strategies are spot on and have increased our customer engagement.", img: Askone },
  { name: "ArchAngels", username: "Client", body: "We’ve received excellent results from their SEO and social media marketing campaigns.", img: ArchAngels },
  { name: "BBW", username: "Client", body: "Their team delivered outstanding results with our website development, bringing in more conversions.", img: BBW },
  { name: "Aglobe", username: "Client", body: "They provided expert advice on marketing strategies that helped us expand our reach.", img: Aglobe },
  { name: "AART Paramedical Institute", username: 'Client', body: "Highly recommend their digital marketing services! They know how to deliver results.", img: AART },
  { name: "Aalasi Engineer", username: "Client", body: "Thanks to their marketing team, we’ve seen steady growth in both leads and revenue.", img: Engineer },
];

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <div className="marquee-card">
      <img src={img} alt={name} className="rounded-full" />
      <h3 className="text-lg font-semibold mt-3">{name}</h3>
      <p className="text-sm text-gray-400">{username}</p>
      <p className="mt-2">{body}</p>
    </div>
  );
};

export default function Testimonial() {
  return (
    <div className="pb-28 text-center">
      <FadeOnScroll>
        <TitleDark
          category="TESTIMONIAL"
          title="CUSTOMER IS OUR TOP PRIORITY"
          description="We survey all of our clients, the results of which go directly to our CEO."
        />
      </FadeOnScroll>

      <div className="mt-16">
        <Marquee pauseOnHover>
          <div className="marquee-wrapper">
            {reviews.map((review, idx) => (
              <ReviewCard key={idx} {...review} />
            ))}
            {reviews.map((review, idx) => (
              <ReviewCard key={idx + reviews.length} {...review} />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}
