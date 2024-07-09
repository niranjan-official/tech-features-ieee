import React from "react";

const Home = () => {
  return (
    <section id="home">
      <div className="h-screen w-full flex flex-col items-center bg-black pt-20 p-8">
        <div className="w-full flex flex-col font-aurora text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl lg:tracking-widest text-orange-50">
            IEEE Tech Features 2024
          </h1>
          <p className="mt-1 mb-2 max-sm:text-sm justify-center text-orange-50">
            On Sept 15, 2024 At Rajgiri School of Engineering
          </p>
        </div>
        <div className="w-full h-full bg-white rounded-[1rem] home-bg"></div>
      </div>
    </section>
  );
};

export default Home;
