import React from 'react';
import FadeOnScroll from "../animation/FadeOnScroll";
import Marquee from "../animation/magicui/Marquee";
import TitleDark from "../ui/TitleDark";
import "../testimonial/Testimonial.css";

const reviews = [
  { name: "Cindy Carmella", username: "@cindyCarmella", body: "Great experience!", img: "https://img.freepik.com/free-photo/young-beautiful-woman.jpg" },
  { name: "Soraya Ali", username: "@sorayaAli", body: "Exceeds expectations!", img: "https://images.unsplash.com/photo-1664575602554" },
  { name: "John Sargis", username: "@johnSargis", body: "Highly recommend!", img: "https://images.unsplash.com/photo-1522529599102" },
  { name: "Michael Johnson", username: "@michaelJ", body: "Attention to detail is unmatched.", img: "https://images.unsplash.com/photo-1507003211169" },
  { name: "Jenny Parker", username: "@jennyParker", body: "Above and beyond.", img: "https://plus.unsplash.com/premium_photo-1661778906556" },
  { name: "James Brown", username: "@jamesBrown", body: "A pleasure to work with.", img: "https://images.unsplash.com/photo-1614890107637" },
  { name: "Anna Lee", username: "@annaLee", body: "Fantastic service!", img: "https://images.unsplash.com/photo-1664575602554" },
  { name: "Alexis Cole", username: "@alexisCole", body: "Outstanding results.", img: "https://images.unsplash.com/photo-1614890107637" },
  { name: "Chris Day", username: "@chrisDay", body: "Couldn't be happier!", img: "https://images.unsplash.com/photo-1522529599102" },
  { name: "Ella Green", username: "@ellaGreen", body: "Professional and friendly.", img: "https://images.unsplash.com/photo-1507003211169" },
  { name: "Tina Black", username: "@tinaBlack", body: "Superb quality.", img: "https://plus.unsplash.com/premium_photo-1661778906556" },
  { name: "Roger Moore", username: "@rogerMoore", body: "Top-notch team!", img: "https://images.unsplash.com/photo-1614890107637" },
];

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <div className="marquee-card">
      <img src={img} alt={name} className="rounded-full w-24 h-24 object-cover mx-auto" />
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
          title="Customer is Our Top Priority"
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

      <div className="mt-16">
        <Marquee pauseOnHover>
          <div className="marquee-wrapper-bottom">
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
