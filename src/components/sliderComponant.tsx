"use client";

import React, { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

//   {
//     title: "NOW Foods",
//     desc: "Essential Oils, D–3, Magnesium, Detox Support",
//     img: "/Media2.png",
//   },
//   {
//     title: "Herbalife",
//     desc: "Shake Mix, Protein Powder, Herbal Tea Concentrate, with shaker cup and spoon.",
//     img: "/Media2.png",
//   },
//   {
//     title: "Athleta (by Gap)",
//     desc: "Activewear, wellness accessories, loungewear",
//     img: "/Media2.png",
//   },
//   {
//     title: "Athleta (by Gap)",
//     desc: "Activewear, wellness accessories, loungewear",
//     img: "/Media2.png",
//   },
//   {
//     title: "Athleta (by Gap)",
//     desc: "Activewear, wellness accessories, loungewear",
//     img: "/Media2.png",
//   },
//   {
//     title: "Athleta (by Gap)",
//     desc: "Activewear, wellness accessories, loungewear",
//     img: "/Media2.png",
//   },
//   {
//     title: "Athleta (by Gap)",
//     desc: "Activewear, wellness accessories, loungewear",
//     img: "/Media2.png",
//   },
//   {
//     title: "Athleta (by Gap)",
//     desc: "Activewear, wellness accessories, loungewear",
//     img: "/Media2.png",
//   },
//   // add more products as needed...
// ];

const sliderComponents = ({ title, subtitle, paragraph, data, displayBg }) => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    slides: {
      perView: 3,
      spacing: 20,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: {
          perView: 1.2,
          spacing: 10,
        },
      },
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 2500);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <div className="w-full py-10 px-4">
      <div
        className={`relative bg-center bg-no-repeat bg-auto text-center ${displayBg}`}
        style={{
          backgroundImage: "url('/rectangle.png')",
        }}
      >
        <h3 className="text-[3rem] font-bold py-10">{title}</h3>
      </div>
      <div className="text-center">
        <h3 className="text-[2.4rem]  font-bold">{subtitle}</h3>
        <p className="text-[2.1rem]  font-light text-center">{paragraph}</p>
      </div>
      <div ref={sliderRef} className="keen-slider mt-5">
        {data.map((item, index) => (
          <div
            key={index}
            className="keen-slider__slide flex flex-col rounded-xl overflow-hidden shadow-md border border-orange-300"
          >
            <div className="relative w-full h-60 ">
              <Image
                src={item.img}
                alt={item.title}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute top-11 text-white text-left p-4">
                <h3 className="text-[1.5rem] font-bold ">{item.title}</h3>
                <p className="text-[0.8rem] mt-1 pr-10">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default sliderComponents;
