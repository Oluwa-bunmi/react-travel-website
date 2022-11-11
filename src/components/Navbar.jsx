import React from "react";
import {BsPerson} from "react-icons/bs";
import { BsSearch } from "react-icons/bs";



const Navbar = () => {
    return (
      <div className="flex justify-between items-center h-20 px-4">
        <div>
          <h1>BEACHES.</h1>
        </div>
        <ul className="flex">
          <li>Home</li>
          <li>Destinations</li>
          <li>Travel</li>
          <li>View</li>
          <li>Book</li>
        </ul>
        <div className="flex">
          <BsPerson />
          <BsSearch />
        </div>
      </div>
    );
}
 
export default Navbar;