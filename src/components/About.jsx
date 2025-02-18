import React, { useState, useEffect } from "react";
import { images } from './../assets/assets'; // Import images from assets

const About = () => {
  // Image array (Ensure all images exist in the assets file)
  const imageList = [
    images.coverimg2,
    images.coverimg2, 
    images.coverimg23, 
    images.coverimg4
  ];

  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Slideshow effect using useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [imageList.length]);

  return (
    <div id="about-edge">
      {/* About Section */}
      <section id="about" className="about py-12 sm:py-16 bg-[hsl(0,0%,4%)] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            {/* Image Slideshow */}
            <div className="relative h-64 sm:h-80 lg:h-96 w-full" data-aos="fade-up" data-aos-delay="100">
              {imageList.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className={`absolute w-full h-full object-cover rounded-lg transition-opacity duration-1000 ${
                    index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                />
              ))}
            </div>

            {/* About Content */}
            <div className="content text-center lg:text-left" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-5xl sm:text-5xl font-bold mb-4 text-[var(--primary-color)]">
                About Edge+
              </h3>
              <p className="leading-relaxed text-sm sm:text-base pt-7">
                Edge+ stands as the flagship event hosted by the ACM student
                chapter at FISAT, for the past 3 years offering valuable
                opportunities for{" "}
                <strong className="text-[var(--accent-color)]">learning, development, and personal growth.</strong>{" "}
                The event provides an exceptional platform for enhancing
                technical knowledge and serves as an opportunity to inspire and
                mold young minds.
              </p>
              <p className="leading-relaxed text-sm sm:text-base mt-4">
                Participating in Edge+ is an invaluable opportunity for
                learning, personal growth, and networking. It provides{" "}
                <strong className="text-[var(--accent-color)]">exposure to emerging technologies,</strong>
                <strong className="text-yellow-600"> inspires with industry leaders,</strong>
                <strong className="text-yellow-500"> and offers the chance to kickstart your career.</strong>{" "}
                Additionally, it's a fun and engaging experience, making it a
                must for anyone looking to advance in the tech world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why EDGE+ Section */}
      <section id="why-us" className="py-12 sm:py-16 bg-[hsl(0,0%,4%)] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-title text-center mb-8 sm:mb-12" data-aos="fade-up">
            <h2 className="text-xl sm:text-5xl font-bold text-[var(--primary-color)]">
              Why EDGE+ 4.0
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { id: "01", title: "WORKSHOPS", desc: "Hands-on learning and practical skills in various tech-related subjects, helping participants gain in-depth knowledge and expertise." },
              { id: "02", title: "HACKATHON", desc: "Competitive coding event where participants can showcase their programming prowess, solving challenging problems and vying for recognition and prizes." },
              { id: "03", title: "PRE-EVENTS", desc: "Exciting lead-up events to engage and prepare participants for the main event with fun and learning experiences." },
            ].map((item, index) => (
              <div
                key={index}
                className="card-item group bg-[color-mix(in srgb, var(--secondary-color), transparent 2%)] p-4 sm:p-6 rounded-lg hover:bg-[var(--accent-color)] transition-all flex flex-col justify-between min-h-[250px] sm:min-h-[300px] w-full max-w-xs mx-auto"
                data-aos="fade-up"
                data-aos-delay={`${100 * (index + 1)}`}
              >
                <span className="block text-2xl sm:text-[28px] font-bold text-[var(--accent-color)] group-hover:text-white group-hover:scale-105 transition-transform">
                  {item.id}
                </span>
                <h4 className="text-base sm:text-lg font-semibold my-2 sm:my-4 group-hover:text-white group-hover:font-bold group-hover:scale-105 transition-transform">
                  <a href="#" className="stretched-link text-white no-underline hover:underline">
                    {item.title}
                  </a>
                </h4>
                <p className="text-sm text-gray-400 group-hover:text-white group-hover:font-bold group-hover:scale-105 transition-transform">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Hackathon Card
          <div className="flex justify-center items-center px-4">
            <div className="card-item group bg-[color-mix(in srgb, var(--secondary-color), transparent 2%)] p-4 sm:p-6 rounded-lg hover:bg-[var(--accent-color)] transition-all w-full max-w-xs mx-auto min-h-[250px] sm:min-h-[300px] flex flex-col justify-between"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span className="block text-2xl sm:text-[28px] font-bold text-[var(--accent-color)] group-hover:text-white group-hover:scale-105 transition-transform">
                04
              </span>
              <h4 className="text-base sm:text-lg font-semibold my-2 sm:my-4 group-hover:text-white group-hover:font-bold group-hover:scale-105 transition-transform">
                <a href="#" className="stretched-link text-white no-underline hover:underline">
                  HACKATHON
                </a>
              </h4>
              <p className="text-sm text-gray-400 group-hover:text-white group-hover:font-bold group-hover:scale-105 transition-transform">
                Competitive coding event where participants can showcase their programming prowess, solving challenging problems and vying for recognition and prizes.
              </p>
            </div>
          </div> */}

        </div>
      </section>
    </div>
  );
};

export default About;
