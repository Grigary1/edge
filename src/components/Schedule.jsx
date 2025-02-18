import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Schedule = () => {
  const [day1, setDay1] = useState(true); // Default to Day 1
  const [day2, setDay2] = useState(false);

  const handleDay = (num) => {
    if (num === 1) {
      setDay1(true);
      setDay2(false); // Ensure Day 2 is deactivated
    } else if (num === 2) {
      setDay2(true);
      setDay1(false); // Ensure Day 1 is deactivated
    }
  };

  // Animation variants for the timeline line
  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: '100%',
      transition: {
        duration: 2,
        ease: 'easeInOut',
      },
    },
  };

  // Animation variants for each event
  const eventVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center py-12">
      {/* Day Selector */}
      <div className="flex justify-center items-center space-x-6 pb-8">
        <button
          onClick={() => handleDay(1)}
          className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
            day1
              ? 'bg-yellow-500 text-black shadow-lg'
              : 'bg-transparent text-gray-400 border border-yellow-500 hover:bg-yellow-500 hover:text-black'
          }`}
        >
          Day 1
        </button>
        <button
          onClick={() => handleDay(2)}
          className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
            day2
              ? 'bg-yellow-500 text-black shadow-lg'
              : 'bg-transparent text-gray-400 border border-yellow-500 hover:bg-yellow-500 hover:text-black'
          }`}
        >
          Day 2
        </button>
      </div>

      {/* Schedule List */}
      <div className="w-full max-w-4xl px-4 relative">
        {/* Vertical Line */}
        <motion.div
          className="absolute left-6 top-0 w-1 bg-yellow-500"
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        ></motion.div>

        {/* Day 1 Schedule */}
        {day1 && (
          <div>
            <h2 className="text-2xl font-bold text-center mb-6 text-yellow-500">Day 1 Schedule</h2>
            <ol className="relative space-y-8">
              {/* Event 1 */}
              <motion.li
                className="ml-6"
                variants={eventVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="absolute w-3 h-3 bg-yellow-500 rounded-full left-1"></div>
                <time className="text-sm font-normal text-gray-400">10:00 AM - 11:00 AM</time>
                <h3 className="text-lg font-semibold mt-1">Workshop: Introduction to AI</h3>
                <p className="text-gray-400 mt-1">
                  Learn the basics of Artificial Intelligence and its applications in real-world scenarios.
                </p>
              </motion.li>

              {/* Event 2 */}
              <motion.li
                className="ml-6"
                variants={eventVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="absolute w-3 h-3 bg-yellow-500 rounded-full left-1"></div>
                <time className="text-sm font-normal text-gray-400">11:30 AM - 12:30 PM</time>
                <h3 className="text-lg font-semibold mt-1">Keynote: Future of Technology</h3>
                <p className="text-gray-400 mt-1">
                  A talk by industry leaders about emerging trends in technology.
                </p>
              </motion.li>

              {/* Add more events as needed */}
            </ol>
          </div>
        )}

        {/* Day 2 Schedule */}
        {day2 && (
          <div>
            <h2 className="text-2xl font-bold text-center mb-6 text-yellow-500">Day 2 Schedule</h2>
            <ol className="relative space-y-8">
              {/* Event 1 */}
              <motion.li
                className="ml-6"
                variants={eventVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="absolute w-3 h-3 bg-yellow-500 rounded-full left-1"></div>
                <time className="text-sm font-normal text-gray-400">9:00 AM - 10:00 AM</time>
                <h3 className="text-lg font-semibold mt-1">Hackathon Kickoff</h3>
                <p className="text-gray-400 mt-1">
                  Teams begin working on their projects for the hackathon.
                </p>
              </motion.li>

              {/* Event 2 */}
              <motion.li
                className="ml-6"
                variants={eventVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="absolute w-3 h-3 bg-yellow-500 rounded-full left-1"></div>
                <time className="text-sm font-normal text-gray-400">11:00 AM - 12:00 PM</time>
                <h3 className="text-lg font-semibold mt-1">Panel Discussion: Career in Tech</h3>
                <p className="text-gray-400 mt-1">
                  Experts share insights into building a successful career in the tech industry.
                </p>
              </motion.li>

              {/* Add more events as needed */}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

export default Schedule;