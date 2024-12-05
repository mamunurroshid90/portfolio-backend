import React from "react";
import axios from "axios";
import { useState } from "react";

const Navbar = () => {
  const [menuItem, setMenuItem] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [buttonShow, setButtonShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(menuItem, buttonText, buttonShow);
    axios
      .post("http://localhost:8000/navbar", {
        menuItem: menuItem,
        buttonText: buttonText,
        buttonShow: buttonShow,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleMenuItemChange = (e) => {
    setMenuItem(e.target.value);
  };

  const handleButtonText = (e) => {
    setButtonText(e.target.value);
  };

  const handleButtonCheckbox = (e) => {
    setButtonShow(e.target.checked);
  };

  return (
    <>
      <div className=" flex justify-center items-center h-screen">
        <form
          action=""
          className=" flex flex-col gap-4 bg-slate-700 p-6 rounded-md"
        >
          <input type="file" className=" rounded-md text-white" />
          <input
            onChange={handleMenuItemChange}
            type="text"
            placeholder="Menu Item"
            className=" p-2 rounded-md"
          />
          <input
            onChange={handleButtonText}
            type="text"
            placeholder="Button Text"
            className=" p-2 rounded-md"
          />
          <div className=" flex items-center gap-1">
            <input
              onChange={handleButtonCheckbox}
              type="checkbox"
              className=" w-4 h-4"
            />
            <label htmlFor="" className=" text-white">
              Button Show
            </label>
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className=" bg-slate-300 py-2 rounded-md text-black text-lg font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Navbar;
