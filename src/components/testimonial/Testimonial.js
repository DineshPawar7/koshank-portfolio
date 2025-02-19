import React from 'react';
import FadeOnScroll from "../animation/FadeOnScroll";
import Marquee from "../animation/magicui/Marquee";
import TitleDark from "../ui/TitleDark";
import "../testimonial/Testimonial.css";

const reviews = [
  { name: "Komal Dange", username: "Founder & CEO", body: "Koshank Company is an excellent firm, always focusing on clients' needs with dedication and innovation.", img: "https://koshank.com/assets/team/komal.png" },
  { name: "Shankar Dange", username: "Co-Founder", body: "Koshank has always maintained a record—our clients have never been disappointed.", img: "https://koshank.com/assets/team/shankar.png" },
  { name: "Snack Lorry", username: "Client", body: "The designs created by Koshank are excellent, and they always provide great service.", img: "https://koshank.com/assets/images/client1.jpg" },
  { name: "Rockfold Fitness", username: "Client", body: "Thanks to Koshank, my gym sales have increased by 50%—this is truly exciting news!", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBe8fPzqfQxUfsPu1nrnBQ1nchSqa1IZe4sQ&s" },
  { name: "Gunjwan Farms", username: "Client", body: "Koshank built an excellent website for our business, and its SEO optimization is driving great traffic.", img: "https://i0.wp.com/gunjwanfarms.com/wp-content/uploads/2024/03/Gunjwan_Farms-removebg-preview-e1711863758834.png?fit=296%2C274&ssl=1" },
  { name: "Dinesh Pawar", username: "Full Stack Developer", body: "Koshank's team is very friendly, and the great company environment helps solve clients' problems efficiently.", img: "https://media.licdn.com/dms/image/v2/D4D35AQEPBYKEczhcZw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1727570541987?e=1740556800&v=beta&t=vVqMPTHPG0fuEaZjCkATLPUniSn7hhcBpLKGILMNNek" },
  { name: "Soham Kumthekar", username: "Performance Marketer", body: "In my two years with this company, I’ve seen clients grow rapidly with Koshank’s strategies.", img: "https://koshank.com/assets/team/soham.png" },
  { name: "iitians Academy Pune", username: "Client", body: "Koshank builds and maintains websites excellently, ensuring complete client satisfaction.", img: "https://iitiansacademypune.com/uploads/logo.jpeg" },
  // { name: "Chris Day", username: "@chrisDay", body: "Couldn't be happier!", img: "https://images.unsplash.com/photo-1522529599102" },
  // { name: "Ella Green", username: "@ellaGreen", body: "Professional and friendly.", img: "https://images.unsplash.com/photo-1507003211169" },
  // { name: "Tina Black", username: "@tinaBlack", body: "Superb quality.", img: "https://plus.unsplash.com/premium_photo-1661778906556" },
  // { name: "Roger Moore", username: "@rogerMoore", body: "Top-notch team!", img: "https://images.unsplash.com/photo-1614890107637" },
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
    </div>
  );
}
