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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 1700) {
        setSplitDelayTransition(true);
      }
    };

    window.addEventListener("scroll", handleScroll);


    return () => window.removeEventListener("scroll", handleScroll);
  }, []); 


  const handleCard1TransitionEnd = () => {

    setSplitDelayTransition1(true);
  };

  return (
    <div className="min-h-fit bg-[hsl(0,0%,4%)] font-sans flex text-center pt-7">
    <img className="h-72 text mx-64" src={images.cartoon} alt="" />
      <section className="max-w-4xl flex mx-48  my-10">
        <ul
          className={`relative h-[280px] cursor-pointer ${
            splitDelayTransition ? "transition-all" : ""
          }`}
          onClick={() => {}}
        >

          <li
          onClick={()=>{navigate('/workshops')}}
            className={`absolute top-0 left-[50px] w-[250px] h-[250px] bg-white rounded-lg shadow-md transition-transform duration-1000 ease-in-out z-10 transform rotate-[-2deg] ${
              splitDelayTransition ? "translate-x-[-220px]" : ""
            }`}
            onTransitionEnd={handleCard1TransitionEnd} 
          >
            <img
              src={images.proshow}
              alt="Card 1"
              className="w-full h-auto"
            />
            <div className="p-2">
              <h1 className="text-lg font-semibold">Card 1 Title</h1>
              <p className="text-sm">Card description</p>
            </div>
          </li>


          <li
            className={`absolute top-0 left-[230px] w-[250px] h-[250px] bg-white rounded-lg shadow-md transition-transform duration-1000 ease-in-out z-9 transform rotate-[-7deg] ${
              splitDelayTransition && splitDelayTransition1 ? "translate-x-[220px]" : ""
            }`}
          >
            <img
              src={images.coverimg}
              alt="Card 2"
              className="w-full h-auto"
            />
            <div className="p-2">
              <h1 className="text-lg font-semibold">Card 2 Title</h1>
              <p className="text-sm">Card description</p>
            </div>
          </li>

          <li
            className={`absolute top-0 left-[140px] w-[250px] h-[250px] bg-white rounded-lg shadow-md transition-transform duration-400 ease-in-out z-8 transform rotate-[5deg] ${
              splitDelayTransition1 ? "translate-x-[0px]" : ""
            }`}
          >
            <img
              src={images.coverimg}
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
