import React from "react";
import { IoMdArrowDown } from "react-icons/io";
import About from "../About";
import FadeUp from "@/Animations/FadeUp";

const Agenda = () => {
  return (
    <section id="about">
      <div className="w-full flex flex-col items-center px-4 md:px-16 lg:px-28 py-6 md:py-12 bg-black">
        <FadeUp>
          <span className="text-sm text-neutral-500">AGENDA</span>
        </FadeUp>
        <FadeUp>
          <p className="text-2xl md:text-4xl lg:text-5xl text-neutral-400 text-center mt-2 md:mt-4 leading-tight">
            Welcome to{" "}
            <span className="text-orange-50"> IEEE Tech Futures 2024</span>, a
            premier event dedicated to exploring the future of{" "}
            <span className="text-orange-50"> technology and innovation</span>.
            Join us for an exciting day of insightful talks, networking
            opportunities, and
            <span className="text-orange-50"> hands-on workshops</span>. This
            event is designed for students, professionals, and enthusiasts who
            are <span className="text-orange-50"> passionate</span> about
            technology and its impact on the world.
          </p>
        </FadeUp>
        <FadeUp>
          <a href="#speakers">
            <IoMdArrowDown size={50} className="my-8" />
          </a>
        </FadeUp>
        <About />
      </div>
    </section>
  );
};

export default Agenda;
