import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import baseUrl from "../config/baseUrl";

const Navbar = () => {
  const [menuItem, setMenuItem] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [buttonShow, setButtonShow] = useState(false);
  const [image, setImage] = useState({});
  const [logo, setLogo] = useState("");
  const [id, setId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(menuItem, buttonText, buttonShow);

    let data = new FormData();
    console.log(data);

    data.append("menuItem", menuItem);
    data.append("buttonText", buttonText);
    data.append("buttonShow", buttonShow);
    data.append("image", image);

    console.log(data.data);

    if (id) {
      axios
        .put(`${baseUrl}/navbar/${id}`, data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .post(`${baseUrl}/navbar`, data)
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
      let data = await axios.get(`${baseUrl}/navItem`);
      console.log(data);
      setMenuItem(data.data.menuItem);
      setButtonText(data.data.buttonText);
      setButtonShow(data.data.buttonShow);
      setLogo(data.data.image);
      setId(data.data._id);
    }
    getData();
  }, []);

  const handleLogo = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <>
      <div className=" flex justify-center items-center h-screen">
        <form
          action=""
          className=" flex flex-col gap-4 bg-slate-700 p-6 rounded-md w-[600px]"
        >
          <h2 className=" text-center text-2xl pb-4 border-b-4 border-double font-bold text-white">
            Navbar Section
          </h2>
          <img width={50} src={`${baseUrl}/${logo}`} alt="logo" />
          <input
            onChange={handleLogo}
            type="file"
            className=" rounded-md text-white"
          />
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
