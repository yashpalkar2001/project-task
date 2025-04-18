"use client";
import Image from "next/image";
import SliderComponents from "./sliderComponant";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef } from "react";

const people = [
  { src: "/image1.png", label: "Inner Peace.." },
  { src: "/image2.png", label: "" },
  { src: "/image3.png", label: "" },
  { src: "/image4.png", label: "" },
  { src: "/image5.png", label: "" },
  { src: "/image6.png", label: "Mental Reset.." },
  { src: "/image8.png", label: "" },
  { src: "/image1.png", label: "Soul nourishing.." },
  { src: "/image7.png", label: "" },
  //   { src: "/people/10.jpg", label: "" },
  //   { src: "/people/11.jpg", label: "" },
  //   { src: "/people/12.jpg", label: "Calm Within.." },
  //   { src: "/people/13.jpg", label: "" },
  //   { src: "/people/14.jpg", label: "" },
];

export default function ComingSoon() {
  // const sliderTimer = useRef<NodeJS.Timeout | null>(null);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 5,
      spacing: 3,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 2.5, spacing: 3 },
      },
      "(max-width: 480px)": {
        slides: { perView: 1.5, spacing: 3 },
      },
    },
  });

  // 🔁 Autoplay
  useEffect(() => {
    if (!slider.current) return;

    const interval = setInterval(() => {
      slider.current?.next();
    }, 2000);

    return () => clearInterval(interval);
  }, [slider]);
  return (
    <>
      <div
        className="relative bg-center bg-no-repeat bg-auto "
        style={{
          backgroundImage: "url('/rectangle.png')",
        }}
      >
        <h3 className="text-[3rem] font-bold py-10 text-center">
          Over <span className="text-[#F5A623] font-bold">50,00,000</span>{" "}
          family and counting
        </h3>
      </div>

      <div className="w-full py-10 px-4 overflow-hidden">
        <div ref={sliderRef} className="keen-slider">
          {people.map((person, idx) => (
            <div
              key={idx}
              className="keen-slider__slide relative flex justify-center items-center flex-col"
            >
              <Image
                src={person.src}
                alt={`Person ${idx}`}
                width={120}
                height={120}
                className="rounded-xl shadow-md"
              />
              {person.label && (
                <span className="absolute bottom-[-1.8rem] bg-white text-black text-sm font-semibold px-3 py-1 rounded-md shadow-md">
                  {person.label}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <section className="bg-gradient-to-b from-[#fff8ee] to-[#eec1bb] text-center py-10 px-4 mt-4">
        {/* <div className="flex flex-wrap justify-center gap-4 mt-8">
          {people.map((person, idx) => (
            <div key={idx} className="relative">
              <Image
                src={person.src}
                alt={`Person ${idx + 1}`}
                width={80}
                height={80}
                className="rounded-lg"
              />
              {person.label && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full bg-white text-black text-sm px-2 py-1 rounded-md shadow">
                  {person.label}
                </span>
              )}
            </div>
          ))}
        </div> */}

        <div className="mt-16">
          <h3 className="text-[3rem] md:text-2xl font-bold">
            World’s Largest Wellness Universe is
          </h3>
          <h1 className="text-[3.5rem] font-bold  mb-2">Coming Soon..</h1>
          <p className=" text-[1.7rem] font-bold">Join our waiting list &</p>
          <p className="text-base font-normal mt-1 mb-6">
            Signup below to receive updates and to be notified when we launch!
          </p>

          <form className="max-w-md mx-auto flex items-center border rounded-md overflow-hidden bg-white shadow-2xl">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 focus:outline-none text-sm"
            />
            <button
              type="submit"
              className="bg-[#F5A623] text-white px-4 py-3 hover:bg-[#e5a11c] transition-colors"
            >
              →
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
