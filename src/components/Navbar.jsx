import React from "react";
import { BsPerson, BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };
  return (
    <div className="flex justify-between items-center h-20 px-4 absolute z-10 w-full text-white">
      <div>
        <h1 onClick={handleNav} className={logo ? "hidden" : "block"}>
          BEACHES.
        </h1>
      </div>
      <ul className="hidden md:flex">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#destinations">Destinations</a>
        </li>
        <li>
          <a href="#selects">Travel</a>
        </li>
        <li>
          <a href="#carousel">View</a>
        </li>
        <li>
          <a href="#footer">Book</a>
        </li>
      </ul>
      <div className="hidden md:flex">
        <BsSearch className="mr-2" size={20} />
        <BsPerson size={20} />
      </div>
      <div className="z-10 md:hidden" onClick={handleNav}>
        {nav ? (
          <AiOutlineClose size={20} className="text-black" />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>

      {/* Dropdown menu on mobile */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute left-0 top-0 bg-gray-100/90 w-full px-4 py-7 flex flex-col text-black"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <h1>BEACHES.</h1>
          <li className="border-b">Home</li>
          <li className="border-b">Destinations</li>
          <li className="border-b">Travel</li>
          <li className="border-b">View</li>
          <li className="border-b">Book</li>
        </ul>
        <div className="flex flex-col">
          <button className="my-6">Search</button>
          <button>Account</button>
        </div>
        <div className="flex justify-between my-6">
          <FaFacebook className="icon" />
          <FaTwitter className="icon" />
          <FaYoutube className="icon" />
          <FaPinterest className="icon" />
          <FaInstagram className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
