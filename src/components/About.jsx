import React from "react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoWhatsapp,
} from "react-icons/io";

const About = () => {
  return (
    <div className="w-full flex flex-col md:flex-row max-sm:gap-8 items-center justify-between bg-zinc-800/50 py-7 px-4">
      <div className="w-full flex flex-col items-center text-center">
        <h3 className="font-aurora text-2xl">Venue</h3>
        <p className="mt-2">
          {" "}
          Rajagiri School of Engineering and Technology, Kochi, Kerala
        </p>
        <span className="mt-2 text-xl">9:00 AM - 6:00 PM IST</span>
      </div>
      <div className="w-full flex flex-col items-center font-aurora">
        <span className="text-8xl">15</span>
        <span className="text-4xl">SEPT</span>
      </div>
      <div className="w-full flex flex-col items-center text-center">
        <h3 className="font-aurora text-2xl">For Inquiries</h3>
        <p className="mt-2">+91 9876543210</p>
        <p>info@ieeetechfutures2024.org</p>
        <div className="flex items-center mt-2 gap-2">
          <IoLogoInstagram size={25} />
          <IoLogoWhatsapp size={25} />
          <IoLogoFacebook size={25} />
        </div>
      </div>
    </div>
  );
};

export default About;
