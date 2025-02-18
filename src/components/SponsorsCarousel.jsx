import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "../styles/global.css";
import { Autoplay } from "swiper/modules";

const sponsors = [
  { id: 1, name: "Sponsor 1", logo: "jubeerich_logo 25-2.png" },
  { id: 2, name: "Sponsor 2", logo: "Himayud_Logo.pdf_20240803_135822_0000-removebg-preview.png" },
  { id: 3, name: "Sponsor 3", logo: "download-removebg-preview.png" },
  { id: 4, name: "Sponsor 4", logo: "splendore.png" },
];

const SponsorsCarousel = () => {
  return (
    <div className="w-full py-6 text-center">
      {/* Title */}
      <h2
        id="shadowLarger"
        className="text-2xl sm:text-3xl font-bold mb-4"
      >
        Our Previous Sponsors
      </h2>

      {/* Swiper Carousel */}
      <Swiper
        spaceBetween={20} // Adjust spacing dynamically
        slidesPerView={1} // Default for small screens
        breakpoints={{
          640: {
            slidesPerView: 2, // For tablets
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3, // For medium screens
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4, // For large screens
            spaceBetween: 50,
          },
        }}
        loop={true}
        autoplay={{ delay: 2000 }}
        modules={[Autoplay]}
        className="w-full"
      >
        {sponsors.map((sponsor) => (
          <SwiperSlide key={sponsor.id} className="flex justify-center items-center">
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="h-20 sm:h-24 w-auto object-contain shadow-lg rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Call-to-Action Link */}
      <div className="mt-6">
        <a
          href="Edge+_Brochure.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg sm:text-xl font-semibold text-blue-600 hover:underline transition-colors duration-300"
        >
          Interested in Supporting Our Event?
        </a>
      </div>
    </div>
  );
};

export default SponsorsCarousel;