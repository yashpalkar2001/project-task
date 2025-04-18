import React from "react";
import Image from "next/image";

const aboutTeam = () => {
  const textBox = [
    {
      boldText: "WeEvolve",
      para: "is a global platform that bridges the gap between wellnes professionals (healers, therapists, and educators) and individuals seeking healing, growth, and personal development.",
    },
    {
      boldText: " Our Vision",
      para: "is to become the leading global platform that empowers both wellness professionals and seekers, promoting holistic well-being, growth, and learning for all.",
    },
    {
      boldText: "Our Mission",
      para: "is to create a holistic ecosystem that connects wellness professionals and seekers, fostering meaningful relationships, educational opportunities, and personal transformation through cutting-edge technology and innovation",
    },
  ];

  const boardMembers = [
    { name: "Dr.Pramod Joshi", imag: "/image.png", desig: "senior Advisor" },
    {
      name: "Raj Banglore",
      imag: "/img2.jpeg",
      desig: "Chief Technology Officer",
    },
    {
      name: "Rajeev Jaiswal",
      imag: "/img3.jpeg",
      desig: "Chief Technology Officer",
    },
  ];
  const ourTeam = [
    {
      name: "Roshni Andotra",
      imag: "/image1.png",
      desig: "HR & Operations Lead",
    },
    {
      name: "Tejal Nagrale",
      imag: "/image2.png",
      desig: "UI UX Designer",
    },
    {
      name: "Snehraj Bose",
      imag: "/image3.png",
      desig: "Video Editor",
    },
    { name: "Vidya Gadkari", imag: "/image4.png", desig: "Graphic Designer" },
    {
      name: "Sanjay Badhwar",
      imag: "/image5.png",
      desig: "Admintration Officer",
    },
    {
      name: "Abhishek",
      imag: "/image6.png",
      desig: "SEO Engineer",
    },
    {
      name: "Harshada Patil",
      imag: "/image7.png",
      desig: "Digital Marketing",
    },
    {
      name: "Ajay Ladi",
      imag: "/image8.png",
      desig: "Software Developer",
    },
  ];
  return (
    <div className="w-full text-center mx-auto">
      <div
        className="relative bg-center bg-no-repeat bg-auto "
        style={{
          backgroundImage: "url('/rectangle.png')",
        }}
      >
        <h3 className="text-[3rem] font-bold py-10">Who are we ?</h3>
      </div>
      <p className="text-[2.6rem]  font-light">The soul of WeEvolve</p>
      <div className="flex justify-between mt-4">
        <div className="w-full bg-[#F4AA41] text-left rounded-tr-4xl pl-[10%] py-[5%]">
          {textBox.map((item, index) => (
            <p className="text-[2rem] font-normal py-4" key={index}>
              <span className="text-[2.3rem] text-white font-bold pr-2">
                {item.boldText}
              </span>
              {item.para}
            </p>
          ))}
        </div>
        <div className="items-center w-full rounded-tl-4xl relative">
          <Image
            src="/ceo.jpeg"
            alt="img"
            width={691}
            height={924}
            className="rounded-tl-4xl grayscale-[100%]"
          />

          <div className="text-white absolute z-40 bottom-[3%] left-[30%]">
            <h3 className="text-[2.4rem] font-bold ">Nehha Lohiya</h3>
            <p className="text-[1.8rem]">CEO & Founder</p>
          </div>
        </div>
      </div>

      <h1 className="text-[3.1rem] font-bold text-center w-full my-5 px-[10%] py-[5%]">
        The Faces where Care Meets Expertise
      </h1>
      <div className="px-[20%]">
        <div>
          <h4 className="text-[2.6rem] font-bold my-3">Board Members</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardMembers.map((item, index) => (
              <div className=" text-center" key={index}>
                <Image
                  src={item.imag}
                  alt="img"
                  width={290}
                  height={100}
                  className=" grayscale-[100%] rounded-xl border"
                />
                <h4 className="text-[1.8rem] font-bold mt-2">{item.name}</h4>
                <p className="text-[1.5rem] font-normal">{item.desig}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="my-10 mx-auto">
          <h4 className="text-[2.6rem] font-bold my-3">Our Team</h4>
          <div className="grid grid-cols-2 lg:grid-cols-4 mx-auto gap-4 my-4">
            {ourTeam.map((item, index) => (
              <div className="w-fit text-center h-fit" key={index}>
                <Image
                  src={item.imag}
                  alt="img"
                  width={170}
                  height={90}
                  className=" grayscale-[100%] rounded-xl border"
                />
                <h4 className="text-[1.2rem] font-bold mt-2">{item.name}</h4>
                <p className="text-[0.8rem] font-normal">{item.desig}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutTeam;
