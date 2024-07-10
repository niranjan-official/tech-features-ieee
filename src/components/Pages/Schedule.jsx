import React from "react";
import EventCard from "../EventCard";
import { events } from "@/constants";
import FadeUp from "@/Animations/FadeUp";

const Schedule = () => {
  return (
    <section
      id="schedule"
      className="w-full flex flex-col items-center bg-black "
    >
      <div className="w-full flex flex-col p-4 py-8 md:pb-12 lg:pb-16 md:p-8 md:px-12 xl:px-20">
        <FadeUp>
          <h2 className="text-4xl font-bold font-aurora text-center">
            Schedule
          </h2>
        </FadeUp>
        <FadeUp>
          <p className="text-center mt-4 text-neutral-300">
            Here is our event schedule
          </p>
        </FadeUp>
        <div className="w-full flex flex-col gap-5 sm:px-10 md:px-16 lg:px-24 xl:px-32 mt-8">
          {events.map((event, key) => (
            <FadeUp key={key}>
              <EventCard
                title={event.title}
                time={event.time}
                period={event.period}
                description={event.description}
              />
            </FadeUp>
          ))}
        </div>
      </div>
      <hr className="border-[0.1remrem] w-[calc(100%-4rem)] border-neutral-700" />
    </section>
  );
};

export default Schedule;
