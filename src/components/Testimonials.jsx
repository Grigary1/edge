import React, { useState, useEffect } from 'react';
import image1 from './../assets/download.jpeg';
import './global.css';

const testimonials = [
  {
    id: 1,
    text: "\"Edge+ was a game-changer for me. The coding competition pushed my limits, and the workshops were incredibly insightful. This event helped me level up in the tech world.\"",
    name: "Joel Bobby",
    image: image1,
  },
  {
    id: 2,
    text: "\"Edge+ was a fantastic learning opportunity. The technical knowledge gained through the workshops was priceless. I'm leaving this event with a renewed passion for technology.\"",
    name: "Aneeka Geo",
    image: image1,
  },
  {
    id: 3,
    text: "\"Edge+ was an enriching experience. The pro show was entertaining, and the networking opportunities were exceptional. I've made valuable connections and learned a lot.\"",
    name: "Naveen B Jacob",
    image: image1,
  },
  {
    id: 4,
    text: "\"Edge+ was a transformative event for me. The coding competition was intense, and the workshops broadened my horizons. I'm grateful for the skills and connections I gained.\"",
    name: "Joel Nickson",
    image: image1,
  },
];

const TestimonialsPage = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [abc,setabc]=useState(false)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);
    return () => clearInterval(interval);
  }, [abc]);

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <div className="testm">
      <div className="pt-44 container mx-auto p-1 sm:p-4 bg-[hsl(0,0%,4%)] text-white min-h-[10vh] sm:min-h-[40vh] md:h-screen lg:h-fit flex flex-col items-center justify-center overflow-hidden">

        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-pink-500 mb-8 text-center pt-36">
          What do our seniors say about EDGE+?
        </h1>

        <div className="flex flex-col lg:flex-row items-center justify-center mb-8 animate-scroll w-full lg:w-2/3">

          <div className="flex-1 text-center lg:text-left">
            <p className="text-base sm:text-xl md:text-xl text-white">{testimonials[currentTestimonialIndex].text}</p>
            <p className="text-xs sm:text-sm md:text-base font-semibold mt-2 text-pink-100 text-end">
              {currentTestimonial.name}
            </p>
          </div>

          <div className="mt-4 lg:mt-0 lg:ml-8">
            <img
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              className="rounded-full w-24 sm:w-20 md:w-36 lg:w-32 h-16 sm:h-20 md:h-24 lg:h-32 object-cover border-2 sm:border-4 border-yellow-500"
            />
          </div>
        </div>

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
            animation: scroll 10s ease-in-out infinite; /* Duration changed to 6 seconds */
          }
        `}</style>
      </div>
    </div>
  );
};

export default TestimonialsPage;