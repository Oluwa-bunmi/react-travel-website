import React, { useState } from "react";
import Jamaica from "../assets/jamaica.jpg";
import KeyWest from "../assets/west.jpg";
import Antigua from "../assets/antigua.jpg";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

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
  const length = sliderImages.length;

  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1  : slide - 1);
  };

  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 relative flex justify-center items-center">
      <BsArrowLeftSquareFill
        onClick={prevSlide}
        className="absolute text-3xl top-[50%] text-white cursor-pointer left-8 "
      />
      <BsArrowRightSquareFill
        onClick={nextSlide}
        className="absolute text-3xl top-[50%] text-white cursor-pointer right-8 "
      />

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
