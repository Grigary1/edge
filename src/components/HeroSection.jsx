import React, { useEffect, useState } from 'react';
import Logo from '../assets/logo.png';
import Overlay from '../assets/bgvideo.mp4';

const HeroSection = () => {
  const [height, setHeight] = useState(window.innerHeight);

  const handleScroll = (sectionId) => {
    console.log(`Attempting to scroll to section with id: ${sectionId}`);

    try {
      const section = document.getElementById(sectionId);
      console.log("section",section)
      if (section) {
        console.log(`Found section: ${sectionId}, scrolling to it...`);
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        console.error(`Error: Section with id "${sectionId}" not found!`);
      }
    } catch (error) {
      console.error("An error occurred during scroll:", error);
    }
  };


  useEffect(() => {
    const updateHeight = () => {
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);
  return (
    <div
      className="relative md:h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 p-4"
      style={{ height: `${height - 80}px` }}
    >

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
      >
        <source src={Overlay} type="video/mp4" />
        Your browser does not support the video tag.
      </video>




      <div className="relative z-20 text-center text-white px-4 max-w-4xl w-full">

        <h1 className="text-4xl sm:text-4xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 animate-text-glow break-words">
          ACM STUDENT CHAPTER FISAT
        </h1>
        <h2 className="text-lg sm:text-2xl md:text-4xl font-semibold mb-6 text-purple-200 animate-fade-in">
          PRESENTS
        </h2>


        <div className="flex justify-center mb-6">
          <div className="w-36 sm:w-40 md:w-56 h-auto transform transition-transform duration-500 hover:rotate-y-180">
            <img
              src={Logo}
              alt="Logo"
              className="rounded-lg shadow-2xl border-2 border-purple-500"
            />
          </div>
        </div>


        <p className="text-lg sm:text-sm md:text-xl max-w-xs sm:max-w-md md:max-w-2xl mx-auto mb-6 font-light text-purple-100 animate-typing overflow-hidden border-r-2 border-purple-500">
          Get ready to ignite your passion for technology at ACM STUDENT CHAPTER FISAT's flagship inter-college event on{' '}
          <span className="font-bold text-purple-300">21th-22th February, 2025</span>.
        </p>

        <button onClick={() => handleScroll("events-section")} className="relative inline-flex items-center justify-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 group text-xs sm:text-sm md:text-base">
          <span className="relative z-10 text-2xl sm:text-3xl">Register Now</span>
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></span>
          <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;