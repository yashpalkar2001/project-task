"use client";
import React from "react";
import ImgComonents from "./imgComponents";

const explor = () => {
  const data = [
    {
      imag: "/media.png",
      title: "Retreat",
      subTitle:
        "Escape, unwind, and reconnect with yourself in soul-nourishing nature.",
    },

    {
      imag: "/media2.png",
      title: "Festivals",
      subTitle:
        "Celebrate wellness, community, and conscious living through experiences.",
    },
    {
      imag: "/media3.png",
      title: "Tourism",
      subTitle:
        "Travel with purpose—curated journeys that heal, inspire, and transform.",
    },
    {
      imag: "/media4.png",
      title: "Courses",
      subTitle:
        "Empower your mind and spirit with guided learning for holistic growth.",
    },
    {
      imag: "/media5.png",
      title: "Corporate Wellness",
      subTitle:
        "Fostering mindful, healthy workplaces through tailored wellness solutions.",
    },
  ];
  return (
    <div className="w-full text-center mx-auto  px-[5%] my-10">
      <div
        className="relative bg-center bg-no-repeat bg-auto "
        style={{
          backgroundImage: "url('/rectangle.png')",
        }}
      >
        <h3 className="text-[3rem] font-bold py-10">
          &quot;Explore. Experince. Evolve with{" "}
          <span className="text-[#F4AA41]">WeEvolve</span>.&quot;
        </h3>
      </div>
      <p className="text-[2.1rem]  font-light">
        From personal growth to global journeys - our wellness expriences are
        made for you.
      </p>
      <div className="py-10 gap-4 flex flex-wrap items-center justify-center w-full ">
        {data.map((item, index) => (
          <ImgComonents
            key={index}
            img={item.imag}
            title={item.title}
            paraghaph={item.subTitle}
          />
        ))}
      </div>
    </div>
  );
};

export default explor;
