import React, { useEffect, useState } from "react";
import './workshops.scss'
import { images } from "../assets/assets";
import { NavLink } from "react-router-dom";
const CardAnimations = () => {
  const [stacksTransition, setStacksTransition] = useState(false);

  useEffect(() => {
    window.scrollTo(0,0);
    setTimeout(() => {
      setStacksTransition(true);
    }, 1000);
  });

  return (
    <>
      <div
        className="h-[650px] flex justify-center items-center bg-black bg-cover bg-center relative"
        style={{ backgroundImage: `url(${images.background})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div> {/* Optional Overlay */}

        <div className="relative z-10 text-white text-center">
          <h1 className="text">WORKSHOPS</h1>
        </div>
      </div>

      <div className="min-h-screen bg-[hsl(0,0%,4%)] font-sans pt-1">
  
        <section className="max-w-6xl mx-auto my-10">
          <ul className="relative h-[700px] cursor-pointer">
  
            <li
              className={`absolute top-0 left-0 transition-transform duration-1000 ease-in-out transform ${stacksTransition ? "translate-x-[0px]" : ""
                }`}
            >
              <ul className="relative">

                <li
                  className={`absolute top-0 left-0 w-[250px] h-[250px] bg-white rounded-lg shadow-md transition-transform duration-1000 ease-in-out z-30 transform rotate-[-2deg] ${stacksTransition ? "translate-y-[580px]" : ""
                    }`}
                >
                  <img
                    src={images.coverimg}
                    alt="Card 1"
                    className="w-full h-auto"
                  />
                  <div className="p-2">
                    <h1 className="text-lg font-semibold">1</h1>
                    <p className="text-sm">Stack 1</p>
                  </div>
                </li>

                <li
                  className={`absolute top-0 left-0 w-[250px] h-[250px] bg-white rounded-lg shadow-md transition-transform duration-1000 ease-in-out z-20 transform rotate-[-7deg] ${stacksTransition ? "translate-y-[340px]" : ""
                    }`}
                >
                  <img
                    src={images.coverimg}
                    alt="Card 2"
                    className="w-full h-auto"
                  />
                  <div className="p-2">
                    <h1 className="text-lg font-semibold">2</h1>
                    <p className="text-sm">Stack 1</p>
                  </div>
                </li>

                <NavLink to='/workshops/3'
                  className={`absolute top-0 left-0 w-[250px] h-[250px] bg-white rounded-lg shadow-md transition-transform duration-1000 ease-in-out z-10 transform rotate-[5deg] ${stacksTransition ? "translate-y-[100px]" : ""
                    }`}
                >
                  <img
                    src={images.proshow}
                    alt="Card 3"
                    className="w-full h-auto"
                  />
                  <div className="p-2">
                    <h1 className="text-lg font-semibold">3</h1>
                    <p className="text-sm">Stack 1</p>
                  </div>
                </NavLink>
              </ul>
            </li>

            <li
              className={`absolute top-0 left-0 transition-transform duration-1000 ease-in-out transform ${stacksTransition ? "translate-x-[320px]" : ""
                }`}
            >
              <ul className="relative">

                <li
                  className={`absolute top-0 left-0 w-[250px] h-[250px] bg-white rounded-lg shadow-md transition-transform duration-1000 ease-in-out z-30 transform rotate-[-2deg] ${stacksTransition ? "translate-y-[580px]" : ""
                    }`}
                >
                  <img
                    src={images.coverimg}
                    alt="Card 1"
                    className="w-full h-auto"
                  />
                  <div className="p-2">
                    <h1 className="text-lg font-semibold">4</h1>
                    <p className="text-sm">Stack 2</p>
                  </div>
                </li>

                <li
                  className={`absolute top-0 left-0 w-[250px] h-[250px] bg-white rounded-lg shadow-md transition-transform duration-1000 ease-in-out z-20 transform rotate-[-7deg] ${stacksTransition ? "translate-y-[340px]" : ""
                    }`}
                >
                  <img
                    src={images.coverimg}
                    alt="Card 2"
                    className="w-full h-auto"
                  />
                  <div className="p-2">
                    <h1 className="text-lg font-semibold">5</h1>
                    <p className="text-sm">Stack 2</p>
                  </div>
                </li>

                <li
                  className={`absolute top-0 left-0 w-[250px] h-[250px] bg-white rounded-lg shadow-md transition-transform duration-1000 ease-in-out z-10 transform rotate-[5deg] ${stacksTransition ? "translate-y-[100px]" : ""
                    }`}
                >
                  <img
                    src={images.coverimg}
                    alt="Card 3"
                    className="w-full h-auto"
                  />
                  <div className="p-2">
                    <h1 className="text-lg font-semibold">6</h1>
                    <p className="text-sm">Stack 2</p>
                  </div>
                </li>
              </ul>
            </li>

            <li
              className={`absolute top-0 left-0 transition-transform duration-1000 ease-in-out transform ${stacksTransition ? "translate-x-[640px]" : ""
                }`}
            >
              <ul className="relative">

                <li
                  className={`absolute top-0 left-0 w-[250px] h-[250px] bg-white rounded-lg shadow-md transition-transform duration-1000 ease-in-out z-30 transform rotate-[-2deg] ${stacksTransition ? "translate-y-[580px]" : ""
                    }`}
                >
                  <img
                    src={images.coverimg}
                    alt="Card 1"
                    className="w-full h-auto"
                  />
                  <div className="p-2">
                    <h1 className="text-lg font-semibold">7</h1>
                    <p className="text-sm">Stack 3</p>
                  </div>
                </li>

                <li
                  className={`absolute top-0 left-0 w-[250px] h-[250px] bg-white rounded-lg shadow-md transition-transform duration-1000 ease-in-out z-20 transform rotate-[-7deg] ${stacksTransition ? "translate-y-[340px]" : ""
                    }`}
                >
                  <img
                    src={images.coverimg}
                    alt="Card 2"
                    className="w-full h-auto"
                  />
                  <div className="p-2">
                    <h1 className="text-lg font-semibold">8</h1>
                    <p className="text-sm">Stack 3</p>
                  </div>
                </li>

                <li
                  className={`absolute top-0 left-0 w-[250px] h-[250px] bg-white rounded-lg shadow-md transition-transform duration-1000 ease-in-out z-10 transform rotate-[5deg] ${stacksTransition ? "translate-y-[100px]" : ""
                    }`}
                >
                  <img
                    src={images.coverimg}
                    alt="Card 3"
                    className="w-full h-auto"
                  />
                  <div className="p-2">
                    <h1 className="text-lg font-semibold">9</h1>
                    <p className="text-sm">Stack 3</p>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default CardAnimations;