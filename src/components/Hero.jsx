import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import beachVid from "../components/assets/beachVid.mp4";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <video
        src={beachVid}
        className="object-cover h-screen w-full"
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 left-0 bg-gray-900/30 w-full h-full"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
        <h1>First Class Travel</h1>
        <h2 className="py-4">Top 1% Locations Worldwide </h2>
        <form className="flex justify-between items-center border max-w-[700px] p-1 w-full mx-auto rounded-md text-black bg-gray-100/90">
          <div>
            <input type="text" placeholder="Search Destinations" className="bg-transparent w-[223px] sm:w-[400px]  focus:outline-none" />
          </div>
          <div>
            <button>
              <AiOutlineSearch size={20} className="icon" style={{color: "#fff"}} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
