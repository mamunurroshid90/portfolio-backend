import React from "react";
import axios from "axios";

const Navbar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/navbar", {
        menuItem: "Home, About, Service, Resume, Portfolio, Testimonial, Blog",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className=" flex justify-center items-center h-screen">
        <form
          action=""
          className=" flex flex-col gap-4 bg-slate-700 p-6 rounded-md text-white"
        >
          <input type="file" className=" rounded-md" />
          <input
            type="text"
            placeholder="Menu Item"
            className=" p-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Button Text"
            className=" p-2 rounded-md"
          />
          <div className=" flex items-center gap-1">
            <input type="checkbox" className=" w-4 h-4" />
            <label htmlFor="">Button Show</label>
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
