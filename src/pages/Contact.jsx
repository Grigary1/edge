import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-[hsl(0,0%,4%)] text-white">
      {/* Title Section */}
      <div className="text-center py-8 sm:py-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-orange-500">CONTACT US</h2>
      </div>

      {/* Conditional Rendering for Small Screens */}
      <div className="block md:hidden">
        {/* Simplified View for Smaller Screens */}
        <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg mx-4 my-8">
          {/* Address Section */}
          <div className="mb-6">
            <div className="flex justify-center items-center mb-4">
              <div className="bg-[#e91687] text-white p-4 rounded-full text-2xl">📍</div>
            </div>
            <h3 className="font-semibold text-lg text-center">Address:</h3>
            <p className="text-sm text-center">
              Federal Institute of Science And Technology (FISAT)®<br />
              Hormis Nagar, Mookkannoor P O,<br />
              Angamaly, Ernakulam Dt. Kerala, India<br />
              PIN : 683 577
            </p>
          </div>

          {/* Email Section */}
          <div className="mb-6">
            <div className="flex justify-center items-center mb-4">
              <div className="bg-[#e91687] text-white p-4 rounded-full text-2xl">✉️</div>
            </div>
            <h3 className="font-semibold text-lg text-center">Email:</h3>
            <p className="text-blue-600 text-sm text-center">acm@fisat.ac.in</p>
          </div>

          {/* Phone Section */}
          <div>
            <div className="flex justify-center items-center mb-4">
              <div className="bg-[#e91687] text-white p-4 rounded-full text-2xl">📞</div>
            </div>
            <h3 className="font-semibold text-lg text-center">Call us:</h3>
            <p className="text-sm text-center">+91 90742 44983</p>
            <p className="text-sm text-center">+91 8078 313 514</p>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="flex justify-center mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.372352761861!2d76.40626477370823!3d10.231522869010817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08068aa17bd247%3A0xf048b9ebcbd2af28!2sFederal%20Institute%20of%20Science%20And%20Technology%20(FISAT)%C2%AE!5e0!3m2!1sen!2sin!4v1686670296055!5m2!1sen!2sin"
            className="w-full h-[300px] sm:h-[400px] rounded-2xl"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Original View for Larger Screens */}
      <div className="hidden md:block">
        {/* Contact Details Section */}
        <div className="bg-white text-gray-900 p-10 max-w-6xl mx-auto rounded-lg shadow-lg relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Address Section */}
            <div>
              <div className="flex justify-center items-center mb-4">
                <div className="bg-[#e91687] text-white p-4 rounded-full text-2xl">📍</div>
              </div>
              <h3 className="font-semibold text-lg">Address:</h3>
              <p>Federal Institute of Science And Technology (FISAT)®</p>
              <p>Hormis Nagar, Mookkannoor P O, Angamaly, Ernakulam Dt. Kerala, India</p>
              <p>PIN : 683 577</p>
            </div>

            {/* Email Section */}
            <div>
              <div className="flex justify-center items-center mb-4">
                <div className="bg-[#e91687] text-white p-4 rounded-full text-2xl">✉️</div>
              </div>
              <h3 className="font-semibold text-lg">Email:</h3>
              <p className="text-blue-600">acm@fisat.ac.in</p>
            </div>

            {/* Phone Section */}
            <div>
              <div className="flex justify-center items-center mb-4">
                <div className="bg-[#e91687] text-white p-4 rounded-full text-2xl">📞</div>
              </div>
              <h3 className="font-semibold text-lg">Call us:</h3>
              <p>+91 90742 44983</p>
              <p>+91 8078 313 514</p>
            </div>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="relative -mt-16 z-0 h-fit flex items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.372352761861!2d76.40626477370823!3d10.231522869010817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08068aa17bd247%3A0xf048b9ebcbd2af28!2sFederal%20Institute%20of%20Science%20And%20Technology%20(FISAT)%C2%AE!5e0!3m2!1sen!2sin!4v1686670296055!5m2!1sen!2sin"
            className="w-[90%] h-[400px] sm:h-[500px] lg:h-[400px] rounded-2xl"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;