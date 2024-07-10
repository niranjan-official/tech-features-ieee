import React from "react";
import { ContactForm } from "../ContactForm";
import messageIcon from "@/assets/contact.svg";
import FadeUp from "@/Animations/FadeUp";

const Contact = () => {
  return (
    <section id="contact" className="flex flex-col bg-black pt-8 md:pt-16">
      <div className="w-full flex flex-col">
        <FadeUp>
        <h2 className="text-4xl font-bold font-aurora text-center">
          Contact Us
        </h2>
        </FadeUp>
        <div className="w-full flex">
          <div className="w-full flex justify-center">
            <ContactForm />
          </div>
          <div className="w-full hidden lg:block">
            <img src={messageIcon} alt="" className="w-auto h-full p-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
