import FadeUp from "@/Animations/FadeUp";
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
        <FadeUp>
          <h3 className="font-aurora text-2xl">Venue</h3>
        </FadeUp>
        <FadeUp>
          <p className="mt-2">
            {" "}
            Rajagiri School of Engineering and Technology, Kochi, Kerala
          </p>
        </FadeUp>
        <FadeUp>
          <span className="mt-2 text-xl">9:00 AM - 6:00 PM IST</span>
        </FadeUp>
      </div>
      <div className="w-full flex flex-col items-center font-aurora">
        <FadeUp>
          <span className="text-8xl">15</span>
        </FadeUp>
        <FadeUp>
          <span className="text-4xl">SEPT</span>
        </FadeUp>
      </div>
      <div className="w-full flex flex-col items-center text-center">
        <FadeUp>
          <h3 className="font-aurora text-2xl">For Inquiries</h3>
        </FadeUp>
        <FadeUp>
          <p className="mt-2">+91 9876543210</p>
        </FadeUp>
        <FadeUp>
          <p>info@ieeetechfutures2024.org</p>
        </FadeUp>
        <FadeUp>
          <div className="flex items-center mt-2 gap-2">
            <IoLogoInstagram size={25} />
            <IoLogoWhatsapp size={25} />
            <IoLogoFacebook size={25} />
          </div>
        </FadeUp>
      </div>
    </div>
  );
};

export default About;
