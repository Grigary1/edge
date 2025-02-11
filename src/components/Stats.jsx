import React, { useState, useEffect, useRef } from "react";

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
  return <h2 className="text-4xl sm:text-5xl font-bold text-[var(--accent-color)]">{count}</h2>;
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
    <div className="flex justify-center bg-[hsl(0,0%,4%)]">
      {/* Stats Section */}
      <section
        ref={statsRef}
        className="py-8 sm:py-16 bg-[#494447] text-white text-center rounded-tr-full rounded-bl-full w-full sm:w-[90%] lg:w-[80%] xl:w-[70%] rounded-tl-full rounded-br-full"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {images.map((image, index) => (
              <div key={index} className="flex flex-col items-center justify-center">
                {animate ? (
                  <CountUp start={0} end={image} duration={5000} />
                ) : (
                  <h2 className="text-4xl sm:text-5xl font-bold text-[var(--accent-color)]">0</h2>
                )}
                <p className="mt-2 text-base sm:text-lg">{labels[index]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stats;