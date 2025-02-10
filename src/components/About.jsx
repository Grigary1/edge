import React, { useState, useEffect } from "react";
import aboutimg from "../assets/stock-hero.jpg";
import aboutimg2 from "../assets/stock-hero2.jpg";
import aboutimg3 from "../assets/stock-hero3.jpg";

const About = () => {
  const images = [aboutimg, aboutimg2, aboutimg3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div>

      <section
        id="about"
        className="about py-12 sm:py-16 bg-[hsl(0,0%,4%)] text-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div
              className="relative h-64 sm:h-80 lg:h-96 w-full"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {images.map((image, index) => (
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
            <div
              className="content text-center lg:text-left"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-5xl sm:text-5xl font-bold mb-4 text-[var(--primary-color)]">
                About Edge+
              </h3>
              <p className="leading-relaxed text-sm sm:text-base pt-7">
                Edge+ stands as the flagship event hosted by the ACM student
                chapter at FISAT, for the past 3 years offering valuable
                opportunities for{" "}
                <strong className="text-[var(--accent-color)]">
                  learning, development, and personal growth.
                </strong>{" "}
                The event provides an exceptional platform for enhancing
                technical knowledge and serves as an opportunity to inspire and
                mold young minds.
              </p>
              <p className="leading-relaxed text-sm sm:text-base mt-4">
                Participating in Edge+ is an invaluable opportunity for
                learning, personal growth, and networking. It provides{" "}
                <strong className="text-[var(--accent-color)]">
                  exposure to emerging technologies,{" "}
                </strong>
                <strong className="text-yellow-600">
                  inspires with industry leaders,
                </strong>
                <strong className="text-yellow-500">
                  and offers the chance to kickstart your career.
                </strong>{" "}
                Additionally, it's a fun and engaging experience, making it a
                must for anyone looking to advance in the tech world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="why-us"
        className="py-12 sm:py-16 bg-[hsl(0,0%,4%)] text-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-title text-center mb-8 sm:mb-12" data-aos="fade-up">
            <h2 className="text-xl sm:text-5xl font-bold text-[var(--primary-color)]">
              Why EDGE+ 4.0
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div
              className="card-item group bg-[color-mix(in srgb, var(--secondary-color), transparent 2%)] p-4 sm:p-6 rounded-lg hover:bg-[var(--accent-color)] transition-all"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span className="block text-2xl sm:text-[28px] font-bold text-[var(--accent-color)] group-hover:text-white group-hover:scale-105 transition-transform">
                01
              </span>
              <h4 className="text-base sm:text-lg font-semibold my-2 sm:my-4 group-hover:text-white group-hover:font-bold group-hover:scale-105 transition-transform">
                <a href="#" className="stretched-link text-white no-underline hover:underline">
                  WORKSHOPS
                </a>
              </h4>
              <p className="text-sm text-gray-400 group-hover:text-white group-hover:font-bold group-hover:scale-105 transition-transform">
                Hands-on learning and practical skills in various tech-related
                subjects, helping participants gain in-depth knowledge and
                expertise.
              </p>
            </div>
            <div
              className="card-item group bg-[color-mix(in srgb, var(--secondary-color), transparent 2%)] p-4 sm:p-6 rounded-lg hover:bg-[var(--accent-color)] transition-all"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span className="block text-2xl sm:text-[28px] font-bold text-[var(--accent-color)] group-hover:text-white group-hover:scale-105 transition-transform">
                02
              </span>
              <h4 className="text-base sm:text-lg font-semibold my-2 sm:my-4 group-hover:text-white group-hover:font-bold group-hover:scale-105 transition-transform">
                <a href="#" className="stretched-link text-white no-underline hover:underline">
                  CODING COMPS
                </a>
              </h4>
              <p className="text-sm text-gray-400 group-hover:text-white group-hover:font-bold group-hover:scale-105 transition-transform">
                Competitive coding event where participants can showcase their
                programming prowess, solving challenging problems and vying for
                recognition and prizes.
              </p>
            </div>
            <div
              className="card-item group bg-[color-mix(in srgb, var(--secondary-color), transparent 2%)] p-4 sm:p-6 rounded-lg hover:bg-[var(--accent-color)] transition-all"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span className="block text-2xl sm:text-[28px] font-bold text-[var(--accent-color)] group-hover:text-white group-hover:scale-105 transition-transform">
                03
              </span>
              <h4 className="text-base sm:text-lg font-semibold my-2 sm:my-4 group-hover:text-white group-hover:font-bold group-hover:scale-105 transition-transform">
                <a href="#" className="stretched-link text-white no-underline hover:underline">
                  PRO SHOW
                </a>
              </h4>
              <p className="text-sm text-gray-400 group-hover:text-white group-hover:font-bold group-hover:scale-105 transition-transform">
                Exhilarating pro show, featuring the FMC band, dynamic dance
                performances, and a high-energy DJ show, ensuring a night of
                entertainment and fun.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;