import React, { useState, useEffect } from 'react';

const Timer = () => {
  // Set the target date to February 22, 2025
  const targetDate = new Date('February 28, 2025 00:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Update the timer every second
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime(); // Current time
      const distance = targetDate - now; // Difference between target and current time

      if (distance <= 0) {
        // Stop the countdown when the target date is reached
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        // Update the time left state with the remaining time
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000); // Update the time every second

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [targetDate]);

  return (
    <div className="flex items-start justify-center w-full gap-4 count-down-main">
      <div className="timer w-16">
        <div className="bg-white py-4 px-2 rounded-lg overflow-hidden">
          <h3 className="countdown-element days font-Cormorant font-semibold text-2xl text-black font-bold  text-center">
            {timeLeft.days}
          </h3>
        </div>
        <p className="text-lg font-Cormorant font-medium text-white font-bold  mt-1 text-center w-full">Days</p>
      </div>
      <h3 className="font-manrope font-semibold text-2xl text-white font-bold ">:</h3>
      <div className="timer w-16">
        <div className="bg-white py-4 px-2 rounded-lg overflow-hidden">
          <h3 className="countdown-element hours font-Cormorant font-semibold text-2xl text-black font-bold  text-center">
            {timeLeft.hours}
          </h3>
        </div>
        <p className="text-lg font-Cormorant font-normal text-white font-bold  mt-1 text-center w-full">Hours</p>
      </div>
      <h3 className="font-manrope font-semibold text-2xl text-white font-bold ">:</h3>
      <div className="timer w-16">
        <div className="bg-white py-4 px-2 rounded-lg overflow-hidden">
          <h3 className="countdown-element minutes font-Cormorant font-semibold text-2xl text-black font-bold  text-center">
            {timeLeft.minutes}
          </h3>
        </div>
        <p className="text-lg font-Cormorant font-normal text-white font-bold  mt-1 text-center w-full">Minutes</p>
      </div>
      <h3 className="font-manrope font-semibold text-2xl text-white font-bold ">:</h3>
      <div className="timer w-16">
        <div className="bg-white py-4 px-2 rounded-lg overflow-hidden">
          <h3 className="countdown-element seconds font-Cormorant font-semibold text-2xl text-black font-bold  text-center">
            {timeLeft.seconds}
          </h3>
        </div>
        <p className="text-lg font-Cormorant font-normal text-white font-bold  mt-1 text-center w-full">Seconds</p>
      </div>
    </div>
  );
};

export default Timer;
