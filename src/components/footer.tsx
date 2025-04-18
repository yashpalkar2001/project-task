import Image from "next/image";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaPinterest,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import { FaPhoneAlt, FaGlobe } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

export default function footer() {
  return (
    <footer className="bg-[#f4aa41] text-black px-6 py-10 sm:px-16 sm:py-14">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Left: Logo */}
        <div className="flex flex-col items-start gap-4">
          <Image
            src="/logo.png"
            alt="WeEvolve Logo"
            width={100}
            height={100}
            className="rounded-lg"
          />
        </div>

        {/* Center: Contact Info */}
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex items-start gap-2">
            <GoLocation className="mt-1" />
            <p>411, Westport, Pancard Rd, Baner, Pune</p>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <p>+91 9822026540</p>
          </div>
          <div className="flex items-center gap-2">
            <FaGlobe />
            <p>WeEvolve.ai</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 pt-2 text-xl">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaInstagram />
            <FaPinterest />
            <FaYoutube />
            <FaXTwitter />
          </div>
        </div>

        {/* Right: Newsletter */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-lg">
            Subscribe to WeEvolve Newsletters
          </h3>
          <form className="flex w-full rounded-md shadow-md overflow-hidden border border-white/40 bg-white">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 outline-none text-sm text-black"
            />
            <button
              type="submit"
              className="bg-[#f4aa41] px-4 text-white text-lg"
            >
              ▶
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/40 mt-10 pt-6 flex flex-col sm:flex-row justify-between text-sm text-black">
        <p>© 2022 ABC. All rights reserved.</p>
        <div className="flex gap-6 mt-2 sm:mt-0">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
