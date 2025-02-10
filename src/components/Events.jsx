import React, { useEffect, useState } from "react";
import { images } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const CardAnimations = () => {
    const navigate=useNavigate()
  const [cardsTransition, setCardsTransition] = useState(false);
  const [stacksTransition, setStacksTransition] = useState(false);
  const [splitTransition, setSplitTransition] = useState(false);
  const [splitDelayTransition, setSplitDelayTransition] = useState(false);
  const [splitDelayTransition1, setSplitDelayTransition1] = useState(false);

  // Trigger splitDelayTransition when scroll reaches 1700px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 1700) {
        setSplitDelayTransition(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array to ensure it runs once

  // Set splitDelayTransition1 after Card 1 transition completes
  const handleCard1TransitionEnd = () => {
    // After Card 1 transition is complete, trigger Card 2
    setSplitDelayTransition1(true);
  };

  return (
    <div className="min-h-fit bg-[hsl(0,0%,4%)] font-sans flex text-center  ">
    <img className="h-72 text mx-64" src={images.cartoon} alt="" />
      <section className="max-w-4xl flex mx-48  my-10">
        <ul
          className={`relative h-[280px] cursor-pointer ${
            splitDelayTransition ? "transition-all" : ""
          }`}
          onClick={() => {}}
        >
          {/* Card 1 */}
          <li
          onClick={()=>{navigate('/workshops')}}
            className={`absolute top-0 left-[50px] w-[250px] h-[250px] bg-white rounded-lg shadow-md transition-transform duration-1000 ease-in-out z-10 transform rotate-[-2deg] ${
              splitDelayTransition ? "translate-x-[-220px]" : ""
            }`}
            onTransitionEnd={handleCard1TransitionEnd}  // Handle transition end for Card 1
          >
            <img
              src="https://via.placeholder.com/200x200"
              alt="Card 1"
              className="w-full h-auto"
            />
            <div className="p-2">
              <h1 className="text-lg font-semibold">Card 1 Title</h1>
              <p className="text-sm">Card description</p>
            </div>
          </li>

          {/* Card 2 */}
          <li
            className={`absolute top-0 left-[230px] w-[250px] h-[250px] bg-white rounded-lg shadow-md transition-transform duration-1000 ease-in-out z-9 transform rotate-[-7deg] ${
              splitDelayTransition && splitDelayTransition1 ? "translate-x-[220px]" : ""
            }`}
          >
            <img
              src={images.proshow}
              alt="Card 2"
              className="w-full h-auto"
            />
            <div className="p-2">
              <h1 className="text-lg font-semibold">Card 2 Title</h1>
              <p className="text-sm">Card description</p>
            </div>
          </li>

          {/* Card 3 */}
          <li
            className={`absolute top-0 left-[140px] w-[250px] h-[250px] bg-white rounded-lg shadow-md transition-transform duration-400 ease-in-out z-8 transform rotate-[5deg] ${
              splitDelayTransition1 ? "translate-x-[0px]" : ""
            }`}
          >
            <img
              src="https://via.placeholder.com/200x200"
              alt="Card 3"
              className="w-full h-auto"
            />
            <div className="p-2">
              <h1 className="text-lg font-semibold">Card 3 Title</h1>
              <p className="text-sm">Card description</p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default CardAnimations;
