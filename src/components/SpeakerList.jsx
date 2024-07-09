import React from "react";
import Ayesha from "@/assets/speakers/ayesha.jpg";
import Rajesh from "@/assets/speakers/rajesh.jfif";
import Neha from "@/assets/speakers/neha.jfif";
import Anil from "@/assets/speakers/anil.jfif";

const SpeakerList = () => {
  const content = [
    {
      name: "Dr. Ayesha Khan",
      title: "AI Researcher, ABC Tech",
      bio: "Dr. Ayesha Khan is a leading researcher in artificial intelligence with over 15 years of experience in the field. Her work focuses on AI ethics and sustainble AI practices",
      image: Ayesha,
    },
    {
      name: "Rajesh Menon",
      title: "Blockchain Expert, XYZ Solutions",
      bio: "Rajesh Menon is a blockchain developer and consultant. He has worked on several high-profile blockchain projects and is passionate about educating others on the technology.",
      image: Rajesh,
    },
    {
      name: "Neha Gupta",
      title: "Cybersecurity Analyst, SecureNet",
      bio: "Neha Gupta specializes in cybersecurity threat analysis and prevention. She has helped numerous organizations enhance their cybersecurity measures and has been a speaker at various international conferences.",
      image: Neha,
    },
    {
      name: "Anli Kumar",
      title: "IoT Innovator, IoTech Solutions",
      bio: "Anil Kumar is an expert in Internet of Things (IoT) technologies. He has developed innovative IoT solutions for smart homes and cities and is an advocate for the use of IoT in enhancing everyday life.",
      image: Anil,
    },
  ];
  return <div className="lg:hidden flex flex-wrap items-center justify-center text-center">
    {
        content.map((speaker,index)=>(
            <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col items-center text-center" >
                <img src={speaker.image} className="rounded-full w-full aspect-square p-4" alt="" />
                <h5 className="text-2xl font-bold">{speaker.name}</h5>
                <span className="font-extralight text-neutral-200">{speaker.title}</span>
                <p className="text-sm mt-3 mb-8 px-4 text-neutral-300">{speaker.bio}</p>
            </div>
        ))
    }
  </div>;
};

export default SpeakerList;
