import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const [menuItem, setMenuItem] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [buttonShow, setButtonShow] = useState(false);
  const [id, setId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(menuItem, buttonText, buttonShow);

    if (id) {
      axios
        .put("http://localhost:8000/navbar/" + id, {
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
    } else {
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
    }
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

  useEffect(() => {
    async function getData() {
      let data = await axios.get("http://localhost:8000/navItem");
      console.log(data);
      setMenuItem(data.data.menuItem);
      setButtonText(data.data.buttonText);
      setButtonShow(data.data.buttonShow);
      setId(data.data._id);
    }
    getData();
  }, []);

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
            value={menuItem}
            placeholder="Menu Item"
            className=" p-2 rounded-md"
          />
          <input
            onChange={handleButtonText}
            type="text"
            value={buttonText}
            placeholder="Button Text"
            className=" p-2 rounded-md"
          />
          <div className=" flex items-center gap-1">
            <input
              onChange={handleButtonCheckbox}
              checked={buttonShow}
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
