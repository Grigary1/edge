import React, { useEffect, useState } from "react";
import './workshops.scss';
import { images } from "../assets/assets";
import { NavLink } from "react-router-dom";

const CardAnimations = () => {
  const [stacksTransition, setStacksTransition] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  // Detect screen size changes
  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Trigger animations after page load
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setStacksTransition(true);
    }, 1000);
  }, []);

  // Array of card data
  const cardsData = [
    { id: 1, title: "1", stack: "Stack 1", image: images.edgerev },
    { id: 2, title: "2", stack: "Stack 1", image: images.edgerev },
    { id: 3, title: "3", stack: "Stack 1", image: images.proshow },
    { id: 4, title: "4", stack: "Stack 2", image: images.edgerev },
    { id: 5, title: "5", stack: "Stack 2", image: images.edgerev },
    { id: 6, title: "6", stack: "Stack 2", image: images.edgerev },
    { id: 7, title: "7", stack: "Stack 3", image: images.edgerev },
    { id: 8, title: "8", stack: "Stack 3", image: images.edgerev },
    { id: 9, title: "9", stack: "Stack 3", image: images.edgerev },
  ];

  if (isSmallScreen) {
    // Small Screen Layout
    return (
      <>
        {/* Hero Section */}
        <div
          className="h-[650px] flex justify-center items-center bg-black bg-cover bg-center relative"
          style={{ backgroundImage: `url(${images.background})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <p id="shadowLarger" className="h-48 mx-auto mb-8">
        <span id="glow">REGIS</span>
        <span id="blink">TER</span>
      </p>
        </div>

        {/* Card Section for Small Screens */}
        <div className="min-h-screen bg-[hsl(0,0%,4%)] font-sans pt-1">
          <section className="max-w-6xl mx-auto px-4">
            <ul className="space-y-8">
              {cardsData.map((card, index) => (
                <li
                  key={card.id}
                  className={`bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-transform duration-1000 ease-in-out ${
                    stacksTransition ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{card.title}</h3>
                    <p className="text-sm text-gray-400">{card.stack}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </>
    );
  }

  // Large Screen Layout
  return (
    <>
      {/* Hero Section */}
      <div
        className="h-[650px] flex justify-center items-center bg-black bg-cover bg-center relative"
        style={{ backgroundImage: `url(${images.background})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <p id="shadowLarger" className="h-48 mx-auto mb-8 flex ">
        <span id="glow">WORK</span>
        <span id="blink">SHOP</span>
      </p>  
      </div>

      {/* Card Section for Larger Screens */}
      <div className="min-h-screen bg-[hsl(0,0%,4%)] font-sans pt-1 ">
        <section className="max-w-6xl mx-auto my-10">
          <ul className="relative h-[700px] cursor-pointer">
            {[0, 320, 640].map((offset, stackIndex) => (
              <li
                key={stackIndex}
                className={`absolute  top-0 left-0 transition-transform duration-1000 ease-in-out transform ${
                  stacksTransition ? `translate-x-[${offset}px]` : ""
                }`}
              >
                <ul className="relative">
                  {cardsData
                    .slice(stackIndex * 3, stackIndex * 3 + 3)
                    .map((card, index) => (
                      <li
                        key={card.id}
                        className={`absolute top-0 left-0 w-[250px] h-[250px] bg-transparent rounded-lg shadow-md transition-transform duration-1000 ease-in-out z-${30 - index * 10} transform rotate-${
                          index === 0 ? "-2deg" : index === 1 ? "-7deg" : "5deg"
                        } ${
                          stacksTransition
                            ? `translate-y-[${index === 0 ? "580px" : index === 1 ? "340px" : "100px"}]`
                            : ""
                        }`}
                      >
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-auto mt-52 mb-14 m-14 mb-3"
                        />
                        <div className="p-2">
                          <h1 className="text-lg font-semibold bg-slate-600 text-white">{card.title}</h1>
                          <p className="text-sm">{card.stack}</p>
                        </div>
                      </li>
                    ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

export default CardAnimations;