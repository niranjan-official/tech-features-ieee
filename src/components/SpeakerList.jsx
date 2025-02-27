import React, { useState } from "react";
import Ayesha from "@/assets/speakers/ayesha.jpeg";
import Rajesh from "@/assets/speakers/rajesh.jpeg";
import Neha from "@/assets/speakers/neha.jpeg";
import Anil from "@/assets/speakers/anil.jpeg";
import FadeUp from "@/Animations/FadeUp";

const content = [
  {
    id: 1,
    name: "Dr. Ayesha Khan",
    title: "AI Researcher, ABC Tech",
    bio: "Dr. Ayesha Khan is a leading researcher in artificial intelligence with over 15 years of experience in the field. Her work focuses on AI ethics and sustainble AI practices",
    image: Ayesha,
  },
  {
    id: 2,
    name: "Rajesh Menon",
    title: "Blockchain Expert, XYZ Solutions",
    bio: "Rajesh Menon is a blockchain developer and consultant. He has worked on several high-profile blockchain projects and is passionate about educating others on the technology.",
    image: Rajesh,
  },
  {
    id: 3,
    name: "Neha Gupta",
    title: "Cybersecurity Analyst, SecureNet",
    bio: "Neha Gupta specializes in cybersecurity threat analysis and prevention. She has helped numerous organizations enhance their cybersecurity measures and has been a speaker at various international conferences.",
    image: Neha,
  },
  {
    id: 4,
    name: "Anil Kumar",
    title: "IoT Innovator, IoTech Solutions",
    bio: "Anil Kumar is an expert in Internet of Things (IoT) technologies. He has developed innovative IoT solutions for smart homes and cities and is an advocate for the use of IoT in enhancing everyday life.",
    image: Anil,
  },
];
const SpeakerList = () => {
  const [activeSpeaker, setActiveSpeaker] = useState(10);
  return (
    <div className="lg:hidden flex flex-wrap items-center justify-center text-center">
      {content.map((speaker, index) => (
        <div
          key={index}
          className="w-full sm:w-1/2 md:w-1/3 flex flex-col items-center text-center"
        >
          <FadeUp>
            <img
              src={speaker.image}
              className="rounded-full w-full aspect-square p-4"
              alt=""
            />
          </FadeUp>
          <FadeUp>
            <h5 className="text-2xl font-bold">{speaker.name}</h5>
          </FadeUp>
          <FadeUp>
            <span className="font-extralight text-neutral-200">
              {speaker.title}
            </span>
          </FadeUp>
          {activeSpeaker === index + 1 ? (
            <FadeUp>
              <p className="text-sm mt-3 mb-8 px-4 text-neutral-300">
                {speaker.bio}
              </p>
            </FadeUp>
          ) : (
            <button
              onClick={() => setActiveSpeaker(index + 1)}
              className="underline text-sm text-blue-500"
            >
              Know More
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default SpeakerList;
