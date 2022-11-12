import React from "react";
import maldive1 from "../assets/maldives1.jpg";
import maldive2 from "../assets/maldives2.jpg";
import wiktor from "../assets/wiktor.jpg";
import wupperman from "../assets/wupperman.jpg";
import dandeka from "../assets/dandeka.jpg";

const Destinations = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
      <h1>All-Inclusive Resorts</h1>
      <p className="py-4">On the Carribbean's Best Beaches </p>
      <div className="grid grid-rows-none gap-2 md:grid-cols-5 md:gap-4 py-4">
        <img
          src={maldive2}
          className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
          alt="img"
        />
        <img src={wiktor} className="w-full h-full object-cover" alt="img" />
        <img src={maldive1} className="w-full h-full object-cover " alt="img" />

        <img src={wupperman} className="w-full h-full object-cover" alt="img" />
        <img src={dandeka} className="w-full h-full object-cover" alt="img" />
      </div>
    </div>
  );
};

export default Destinations;
