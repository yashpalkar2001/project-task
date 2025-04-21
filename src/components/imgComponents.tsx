"use client";

import React from "react";
import Image from "next/image";

interface ImgComponentProps {
  img: string;
  title: string;
  paraghaph: string; // Optional: rename to 'paragraph' for clarity
}

const ImgComponents = ({ img, title, paraghaph }: ImgComponentProps) => {
  return (
    <div className="border border-[#F4AA41] rounded-xl w-fit ">
      <div className="flex items-center">
        <Image
          src={img}
          alt="img"
          width={589}
          height={300}
          className="rounded-t-xl"
        />
      </div>
      <h4 className="text-[1.7rem] text-center font-bold">
        <span className="text-[#F4AA41]  pr-2">weEvolve</span>
        {title}
      </h4>
      <p className="text-[1rem] font-normal pb-2">{paraghaph}</p>
    </div>
  );
};

export default ImgComponents;
