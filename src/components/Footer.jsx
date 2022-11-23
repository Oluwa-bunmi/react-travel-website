import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer" className="w-full bg-gray-100 py-16">
      <div className="max-w-[1240px] mx-auto px-4 flex flex-col">
        <div className="text-center justify-between items-center sm:flex">
          <h1>BEACHES.</h1>
          <div className="flex justify-between my-4 w-full sm:max-w-[280px]">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaPinterest className="icon" />
            <FaInstagram className="icon" />
          </div>
        </div>
        <div className="flex justify-between">
          <ul className="lg:flex">
            <li>About</li>
            <li>Partnership</li>
            <li>Careers</li>
            <li>Newrooms</li>
            <li>Advertising</li>
          </ul>
          <ul className="text-right lg:flex">
            <li>Home</li>
            <li>Destinations</li>
            <li>Travel</li>
            <li>View</li>
            <li>Book</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
