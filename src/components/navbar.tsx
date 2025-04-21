"use client";

import { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa"; // React Icons

const Navbar = () => {
  const [lang, setLang] = useState("En");
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <header className="b g-black text-white">
      <nav className="flex justify-between items-center px-6 md:px-[12%] py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={80} height={80} />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <ul className="flex gap-6 font-semibold">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="hover:text-[#F4AA41]">
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className="bg-transparent border-none focus:outline-none hover:text-[#F4AA41]"
              >
                <option value="En">En</option>
                <option value="Fr">Fr</option>
                <option value="Es">Es</option>
              </select>
            </li>
          </ul>
        </div>

        <div className="md:hidden z-50 bg-white rounded border-[#F4AA41]">
          {menuOpen ? (
            <FaTimes
              size={20}
              className="text-[#F4AA41]  w-10 h-10 p-2 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <FaBars
              size={20}
              className="text-[#F4AA41]  w-10 h-10 p-2 cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black px-6 py-4 transition-all duration-300 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-4 text-white font-medium">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <a href={link.href} className="hover:text-[#F4AA41]">
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="bg-transparent border-none focus:outline-none hover:text-[#F4AA41]"
            >
              <option value="En">En</option>
              <option value="Fr">Fr</option>
              <option value="Es">Es</option>
            </select>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
