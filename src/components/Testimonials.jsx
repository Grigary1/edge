import React, { useState, useEffect } from 'react';
import image1 from './../assets/download.jpeg';
import './global.css';

const testimonials = [
  {
    id: 1,
    text: "EDGE+ helped me hone my skills and network with industry leaders. It was an incredible journey!",
    name: "Gautham Prasanth",
    image: image1,
  },
  {
    id: 2,
    text: "EDGE+ helped me hone my skills and network with industry leaders.",
    name: "Gautham Prasanth",
    image: image1,
  },
  {
    id: 3,
    text: "EDGE+ helped me hone my skills and network with industry leaders.",
    name: "Gautham Prasanth",
    image: image1,
  },
];

const TestimonialsPage = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <div className="testm">
      <div className="pt-14 container mx-auto p-1 sm:p-4 bg-[hsl(0,0%,4%)] text-white min-h-[10vh] sm:min-h-[40vh] md:h-screen lg:h-fit flex flex-col items-center justify-center overflow-hidden">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-500 mb-8 text-center">
          What do seniors say about EDGE+?
        </h1>

        {/* Testimonial Content */}
        <div className="flex flex-col lg:flex-row items-center justify-center mb-8 animate-scroll w-full lg:w-2/3">
          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-sm sm:text-base md:text-lg text-yellow-500">{currentTestimonial.text}</p>
            <p className="text-xs sm:text-sm md:text-base font-semibold mt-2 text-pink-500">
              {currentTestimonial.name}
            </p>
          </div>

          {/* Image Section */}
          <div className="mt-4 lg:mt-0 lg:ml-8">
            <img
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              className="rounded-full w-16 sm:w-20 md:w-24 lg:w-32 h-16 sm:h-20 md:h-24 lg:h-32 object-cover border-2 sm:border-4 border-yellow-500"
            />
          </div>
        </div>

        {/* Custom Animation for Smooth Transition */}
        <style jsx>{`
          @keyframes scroll {
            0%, 100% {
              opacity: 0;
              transform: translateX(50%);
            }
            25%, 75% {
              opacity: 1;
              transform: translateX(0%);
            }
          }
          .animate-scroll {
            animation: scroll 6s ease-in-out infinite; /* Duration changed to 6 seconds */
          }
        `}</style>
      </div>
    </div>
  );
};

export default TestimonialsPage;