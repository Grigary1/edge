import React, { useState, useEffect, useRef } from "react";

// Helper function to handle counting animation
const useCountUp = (start, end, duration) => {
  const [count, setCount] = useState(start);
  const stepTime = Math.abs(Math.floor(duration / (end - start)));

  useEffect(() => {
    if (start === end) return;
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < end) {
          return prevCount + 1;
        } else {
          clearInterval(timer);
          return end;
        }
      });
    }, stepTime);

    return () => clearInterval(timer);
  }, [start, end, stepTime]);

  return count;
};

const CountUp = ({ start, end, duration }) => {
  const count = useCountUp(start, end, duration);
  return <h2 className="text-4xl font-bold text-[var(--accent-color)]">{count}</h2>;
};

const Stats = () => {
  const images = [250, 8, 36, 4];
  const labels = ["Participants", "Programs", "Hours Of Fun", "Speakers"];
  
  const [animate, setAnimate] = useState(false);
  const statsRef = useRef();


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={statsRef}
      className="py-16 sm:py-20 bg-[#494447] text-white text-center"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {images.map((image, index) => (
            <div key={index}>
              {animate ? <CountUp start={0} end={image} duration={5000} /> : <h2 className="text-4xl font-bold text-[var(--accent-color)]">0</h2>}
              <p className="mt-2 text-lg">{labels[index]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
