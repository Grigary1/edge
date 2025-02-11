import React, { useEffect, useState } from "react";
import './workshops.scss';
import { images } from "../assets/assets";
import { NavLink } from "react-router-dom";

const CardAnimations = () => {
  const [stacksTransition, setStacksTransition] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setStacksTransition(true);
    }, 1000);
  }, []); // Added dependency array to avoid unnecessary re-renders

  return (
    <>
      <div
        className="h-[650px] flex justify-center items-center bg-black bg-cover bg-center relative"
        style={{ backgroundImage: `url(${images.background})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-white text-center">
          <h1 className="text-4xl font-bold">WORKSHOPS</h1>
        </div>
      </div>

      <div className="min-h-screen bg-[hsl(0,0%,4%)] font-sans pt-10">
        <section className="max-w-6xl mx-auto my-10">
          <ul className="relative flex justify-center gap-10 flex-wrap">
            {[
              { id: 1, img: images.proshow, title: "Gen AI" },
              { id: 2, img: images.edgerev, title: "Image Prompt" },
              { id: 3, img: images.proshow, title: "Cyber Security" },
              { id: 4, img: images.edgerev, title: "Python Project" },
              { id: 5, img: images.proshow, title: "Competitive Coding" }
            ].map((workshop, index) => (
              <li
                key={workshop.id}
                className={`relative transition-transform duration-1000 ease-in-out transform ${
                  stacksTransition ? "translate-y-0" : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }} // Adds a delay for staggered effect
              >
                <NavLink
                  to={`/workshops/${workshop.id}`}
                  className="block w-[250px] h-[300px] bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all"
                >
                  <img src={workshop.img} alt={`Card ${workshop.id}`} className="w-full h-[200px] object-cover" />
                  <div className="p-4 text-center">
                    <h1 className="text-lg font-semibold">{workshop.title}</h1>
                    <p className="text-sm">Click to explore</p>
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

export default CardAnimations;
