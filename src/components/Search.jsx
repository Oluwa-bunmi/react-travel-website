import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Search = () => {
  return (
    <div className="max-w-[1240px] grid mx-auto gap-4 px-4 py-16 lg:grid-cols-3 ">
      <div className="flex flex-col justify-evenly lg:col-span-2">
        <div>
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quasi
            obcaecati neque voluptatum ullam quod dolores quis cum, sed
            veritatis eum repellendus, officia quos quisquam magni. Obcaecati
            ipsum quasi aliquid, tempore, ratione cum suscipit amet cumque
            repudiandae nobis aspernatur facilis dolore natus sequi voluptas et
            distinctio qui, laboriosam quisquam a? Modi optio eveniet mollitia
            recusandae soluta consequatur architecto, pariatur facilis
            aspernatur, voluptas incidunt earum voluptatibus! Dolore ipsa
            repellendus error magnam molestias itaque doloremque iste
            perspiciatis?
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className="py-2">LEADING SERVICES</h3>
              <p className="py-1">
                ALL-INCLUSIVE COMPANY FOR TWO 20 YEARS IN A ROW
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3>LEADING SERVICES</h3>
              <p className="py-1">
                ALL-INCLUSIVE COMPANY FOR TWO 20 YEARS IN A ROW
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="border text-center">
          <p className="pt-2">GET AN ADDITIONAL 10% OFF</p>
          <p className="py-4">12 HOURS LEFT</p>
          <p className="bg-gray-800 text-gray-200 py-2">BOOK NOW AND SAVE</p>
        </div>
        <form action="" className="w-full">
          <div className="flex flex-col my-2">
            <label>Destination</label>
            <select className="border rounded-md p-2">
              <option>Maldives</option>
              <option>Key West</option>
              <option>Cozumel</option>
              <option>Grande Antigua</option>
            </select>
          </div>
          <div className="flex flex-col my-4">
            <label>Check-In</label>
            <input type="date"  className="border rounded-md p-2"/>
          </div>
          <div className="flex flex-col my-2">
            <label>Check-Out</label>
            <input type="date"  className="border rounded-md p-2"/>
          </div>
          <button className="w-full my-4">Rates & Availability</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
