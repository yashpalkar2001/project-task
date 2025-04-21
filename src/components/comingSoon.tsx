"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
  { src: "/image6.png", label: "Mental Reset.." },
  { src: "/image8.png", label: "" },
  { src: "/image1.png", label: "Soul nourishing.." },
  { src: "/image6.png", label: "Mental Reset.." },
  { src: "/image8.png", label: "" },
  { src: "/image1.png", label: "Soul nourishing.." },
  { src: "/image6.png", label: "Mental Reset.." },
  { src: "/image8.png", label: "" },
  { src: "/image1.png", label: "Soul nourishing.." },
];

export default function ComingSoon() {
  const duplicatePeople = [...people, ...people];

  const SLIDE_DURATION = 10;
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

      <div className="w-full overflow-hidden py-10 bg-white">
        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: SLIDE_DURATION,
          }}
        >
          {duplicatePeople.map((person, idx) => (
            <div
              key={idx}
              className="relative  flex flex-col items-center justify-center"
            >
              <Image
                src={person.src}
                alt={`Person ${idx}`}
                width={100}
                height={100}
                className="rounded-xl shadow-md "
              />
              {person.label && (
                <span className="absolute -bottom-5 bg-white text-black text-xs font-semibold px-2 py-0.5 rounded-md shadow-md">
                  {person.label}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      <section className="bg-gradient-to-b from-[#fff8ee] to-[#eec1bb] text-center py-10 px-4 mt-4">
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
