import React from "react";
import { IoLogoFacebook, IoLogoInstagram, IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="w-full px-4 sm:px-6 py-4 md:py-8 text-white bg-neutral-900">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col max-sm:text-center max-sm:items-center pb-5 md:pb-0 md:mr-8">
        <h1
          className={`text-2xl md:text-3xl font-aurora mb-2 tracking-wide`}
        >
          Tech Futures
        </h1>
          <p>Rajgiri School of Engineering</p>
          <p>Kochi, Kerala</p>
          
          <div className="flex gap-4 items-center mt-3 text-white">
            <IoLogoInstagram size={25}/>
            <IoLogoYoutube size={25}/>
            <IoLogoFacebook size={25}/>
          </div>
        </div>
        
        <div className="overflow-hidden rounded-xl md:mr-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.3807110727494!2d76.61414617420553!3d9.299493984697854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0622984cfaf3af%3A0xd0320f890b6fca5!2sProvidence%20College%20of%20Engineering%20%26%20School%20of%20Business%2C%20Chengannur!5e0!3m2!1sen!2sin!4v1710087103947!5m2!1sen!2sin"
            className="h-full w-auto"
            allowFullScreen=""
            loading="none"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="flex flex-col text-center pt-6">
        <h2 className="text-xs">© Copyright IEEE KERALA SECTION. All Rights Reserved</h2>
        <h2 className="text-xs mt-2">❤️ Design by <span className="font-semibold">Niranjan S</span></h2>
      </div>
    </footer> 
  );
};

export default Footer;
