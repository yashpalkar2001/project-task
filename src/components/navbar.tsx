"use client";
import { useState } from "react";
import Image from "next/image";

const navbar = () => {
  const [lang, setLang] = useState("En");
  return (
    <div>
      <nav className="flex justify-between items-center px-[12%]">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={100} height={100} />
        </div>

        <div className="flex gap-6 items-center text-white">
          <ul className="flex gap-6 font-semibold  text-white">
            <li>
              <a href="#" className="hover:text-[#F4AA41]">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F4AA41]">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F4AA41]">
                Contact Us
              </a>
            </li>
            <li>
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className=" bg-transparent border-none focus:outline-none hover:text-[#F4AA41]"
              >
                <option value="En">En</option>
                <option value="Fr">Fr</option>
                <option value="Es">Es</option>
              </select>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
