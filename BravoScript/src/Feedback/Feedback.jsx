import React, { useState, useEffect } from "react";
import "./Feedback.css";
import text from "../assets/Text-6.png";
import profile1 from "../assets/Feed-logo.png";
import profile2 from "../assets/profile-image-2.png";
import profile3 from "../assets/profile-image-3.png";
import profile4 from "../assets/profile-image-4.png";

const testimonials = [
  {
    name: "Mr Nazim Saleem",
    job: "Founder of RocketMobile.lk",
    image: profile1,
    testimonial:
      "Very happy with the website bro,really amazing work.You have been supportive and communicating throughout the entire process.great job team.",
  },
  {
    name: "Katey Topaz",
    job: "Developer, TechCrew",
    image: profile2,
    testimonial:
      "Elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla",
  },
  {
    name: "Jae Robin",
    job: "UI Designer, Affinity Agency",
    image: profile3,
    testimonial:
      "Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis",
  },
  {
    name: "Nicola Blakely",
    job: "CEO, Zeal Wheels",
    image: profile4,
    testimonial:
      "Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
  },
];

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const { name, job, image, testimonial } = testimonials[currentIndex];

  return (
    <div className="Fee-container">
      <hr style={{ border: "1px solid black", margin: "20px 0" }} />
      <div className="Fee-contain">
        <div className="Fee-text">
          <img src={text} alt="Feedback Heading" />
          <h1>Hear from Happy Customers.</h1>
          <p>
            Explore the echoes of success in our client testimonials, each a
            testament to our dedication and expertise.
          </p>
        </div>

        <div className="wrapper">
          <div className="testimonial-container">
            <p>{testimonial}</p>
            <img src={image} alt={`${name}'s profile`} />
            <h3>{name}</h3>
            <h6>{job}</h6>
          </div>
          <button id="prev" onClick={handlePrev}>
            &lt;
          </button>
          <button id="next" onClick={handleNext}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;

