import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Navbar = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let data = await axios.get("http://localhost:8000/navItem");
      setList(data.data.menuItem.split(","));
    }
    fetchData();
  }, []);
  return (
    <>
      <div className="">
        <nav className=" flex justify-between items-center">
          <div className=" w-[135px] h-[47px] overflow-hidden">
            <img
              src="/src/assets/images/Logo.png"
              alt="logo"
              className=" w-full h-full object-cover"
            />
          </div>
          <div>
            <ul className=" flex items-center gap-8 font-jost text-lg">
              {list.map((item, i) => (
                <li key={i}>
                  <a
                    className="relative inline-block text-gray-800 hover:text-black transition-colors duration-300 
               after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] 
               after:w-0 after:bg-buttonColor after:transition-all after:duration-300 hover:after:w-full"
                    href="#"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <button className=" py-3 px-8 rounded-md bg-buttonColor text-[#fff] font-jost text-lg hover:bg-buttonHover hover:transition-all hover:ease-linear hover:delay-150">
              Contact Us
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
