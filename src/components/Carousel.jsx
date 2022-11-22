import React, { useState } from "react";
import Jamaica from "../assets/jamaica.jpg";
import KeyWest from "../assets/west.jpg";
import Antigua from "../assets/antigua.jpg";

const sliderImages = [
  {
    img: Jamaica,
  },
  {
    img: KeyWest,
  },
  {
    img: Antigua,
  },
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 relative flex justify-center items-center">
      {sliderImages.map((item, index) => (
        <div className={index === slide ? "opacity-100" : "opacity-0"}>
          {index === slide && (
            <img className="w-full rounded-md" src={item.img} alt="/" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
