import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import baseUrl from "../../config/baseUrl";

const Navbar = () => {
  const [list, setList] = useState([]);
  const [buttonText, setButtonText] = useState("");
  const [buttonShow, setButtonShow] = useState(false);
  const [image, setImage] = useState("");

  useEffect(() => {
    async function fetchData() {
      let data = await axios.get(`${baseUrl}/navItem`);
      setList(data.data.menuItem.split(","));
      setButtonText(data.data.buttonText);
      setButtonShow(data.data.buttonShow);
      setImage(data.data.image);
    }
    fetchData();
  }, []);
  return (
    <>
      <div className=" container">
        <nav className=" flex justify-between items-center py-6">
          <div className=" w-[135px] h-[47px] overflow-hidden">
            <img
              src={`${baseUrl}/${image}`}
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
            {buttonShow && (
              <button className=" py-3 px-8 rounded-md bg-buttonColor text-[#fff] font-jost text-lg hover:bg-buttonHover hover:transition-all hover:ease-linear hover:delay-150">
                {buttonText}
              </button>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
