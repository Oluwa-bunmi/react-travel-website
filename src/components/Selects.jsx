import React from "react";
import SelectsCard from "./SelectsCard";
import Maldive from "../assets/maldives.jpg";
import Bora from "../assets/bora.jpg";
import Cozumel from "../assets/cozumel.jpg";
import Jamaica from "../assets/jamaica.jpg";
import KeyWest from "../assets/west.jpg";
import Antigua from "../assets/antigua.jpg";

const Selects = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <SelectsCard bg={Maldive} text="Maldives" />
      <SelectsCard bg={Jamaica} text="Jamaica" />
      <SelectsCard bg={Antigua} text="Antigua" />
      <SelectsCard bg={KeyWest} text="Key West" />
      <SelectsCard bg={Cozumel} text="Cozumel" />
      <SelectsCard bg={Bora} text="Bora Bora" />
    </div>
  );
};

export default Selects;
