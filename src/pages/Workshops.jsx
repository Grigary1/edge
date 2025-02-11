import React, { useEffect, useState } from "react";
import './workshops.scss';
import { images } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { Loader } from "@react-three/drei";
const CardAnimations = () => {
  const [stacksTransition, setStacksTransition] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);

    const t1 = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    const t2 = setTimeout(() => {
      setStacksTransition(true);
    }, 3000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };

  }, []);


  return isLoading ? (
    <div className="flex justify-center items-center h-screen bg-black">
      <Loader /></div>) : (
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

      <div className="min-h-screen bg-[hsl(0,0%,4%)] font-sans pt-1">

        <section className="max-w-6xl mx-auto my-10">
          <ul className="relative h-[700px] cursor-pointer">

            <li
              className={`absolute top-0 left-0 transition-transform duration-1000 ease-in-out transform ${stacksTransition ? "translate-x-[0px]" : ""
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
                    <p className="text-sm">Click to Register</p>
                  </div>
                </NavLink>
              </li>
            
          </ul>
        </section>
      </div>
    </>
  );
};

export default CardAnimations;
