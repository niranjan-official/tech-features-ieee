import React from "react";
import { StickyScroll } from "../ui/speaker-scroll";
import Ayesha from '@/assets/speakers/ayesha.jpg'
import Rajesh from '@/assets/speakers/rajesh.jfif'
import Neha from '@/assets/speakers/neha.jfif'
import Anil from '@/assets/speakers/anil.jfif'
import SpeakerList from "../SpeakerList";

const Speakers = () => {
  const content = [
    {
      name: "Dr. Ayesha Khan",
      title: "AI Researcher, ABC Tech",
      bio: "Dr. Ayesha Khan is a leading researcher in artificial intelligence with over 15 years of experience in the field. Her work focuses on AI ethics and sustainble AI practices",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <img
            src={Ayesha}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      name: "Rajesh Menon",
      title: "Blockchain Expert, XYZ Solutions",
      bio: "Dr. Ayesha Khan is a leading researcher in artificial intelligence with over 15 years of experience in the field. Her work focuses on AI ethics and sustainble AI practices",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <img
            src={Rajesh}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      name: "Neha Gupta",
      title: "Cybersecurity Analyst, SecureNet",
      bio: "Dr. Ayesha Khan is a leading researcher in artificial intelligence with over 15 years of experience in the field. Her work focuses on AI ethics and sustainble AI practices",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <img
            src={Neha}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      name: "Anli Kumar",
      title: "IoT Innovator, IoTech Solutions",
      bio: "Dr. Ayesha Khan is a leading researcher in artificial intelligence with over 15 years of experience in the field. Her work focuses on AI ethics and sustainble AI practices",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <img
            src={Anil}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
  ];

  return (
    <section id="speakers" className="w-full flex flex-col items-center bg-black">
      <div className="w-full flex flex-col items-center p-4 py-8 md:py-16 md:px-12 xl:px-20">
        <h2 className="text-4xl font-bold font-aurora text-center">Our Event Speakers</h2>
        <p className="text-center mt-4 text-neutral-300">
          Our event speakers will captivate and inspire you with their expertise
          and unique perspectives.
        </p>
        <p className="text-neutral-300 mb-5 text-center max-sm:text-sm">( The images and data's used here are for sample purpose and are not real )</p>
        <StickyScroll content={content} />
        <SpeakerList/>
      </div>
      <hr className="border-[0.1remrem] w-[calc(100%-4rem)] border-neutral-700" />
    </section>
  );
};

export default Speakers;
