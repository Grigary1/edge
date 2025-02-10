import React, { useState, useRef } from "react";

const HoverEffect = () => {
  const [hoverPosition, setHoverPosition] = useState({ top: "50%", left: "50%" });
  const containerRef = useRef(null);


  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setHoverPosition({ top: `${y}%`, left: `${x}%` });
  };

  return (
    <><span class="loader"></span>
    <div ref={containerRef} className="container" onMouseMove={handleMouseMove}>

      <div className="attention"></div>


      {[...Array(200)].map((_, index) => (
        <div key={index} className="trigger"></div>
      ))}

      <div className="monitor">

        {[...Array(10)].map((_, index) => {
          const size = (index + 1) * 50 + 20;
          return (
            <div
              key={index}
              className="ball"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: hoverPosition.top,
                left: hoverPosition.left,
              }}
            ></div>
          );
        })}
      </div>
    </div>
    </>
    
  );
};

export default HoverEffect;
