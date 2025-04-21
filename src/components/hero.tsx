"use client";

import React from "react";
import Navbar from "./navbar";

const Hero = () => {
  const items = [
    "Services",
    "Products",
    "Retreats",
    "Festivals",
    "Tourism",
    "Courses",
    "Corporate",
    "Community",
  ];
  return (
    <div className="">
      <div
        className="relative flex items-center justify-center h-[80vh] bg-cover bg-center "
        style={{
          backgroundImage: "url('/hero.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="w-full absolute top-[4%]">
          <Navbar />
        </div>
        <div className="absolute bottom-10 flex flex-wrap gap-6 justify-center w-full ">
          {items.map((item, idx) => (
            <button
              key={idx}
              className="bg-white text-black font-medium px-8 py-5 rounded-lg shadow-md hover:bg-[#F4AA41] hover:scale-115 hover:transition  hover:text-white"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="p-4 text-center ">
        <h1 className="text-black font-semibold text-[3.8rem]">Welecome to</h1>
        <h1 className="text-[#F4AA41] font-bold text-[3.8rem]">
          World&apos;s Largest Health & Wellness Universe
        </h1>
        <h1 className="text-black font-semibold text-[2.5rem]">
          Empowering you to manifest your best life.
        </h1>
        <button className="bg-[#F4AA41] p-5 rounded-xl text-white text-[1.5rem] my-4 hover:scale-110">
          Connect Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
