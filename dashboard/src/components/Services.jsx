import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Services = () => {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [isShowImage, setIsShowImage] = useState(false);
  const [list, setList] = useState([]);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleSubtitle = (e) => {
    setSubTitle(e.target.value);
  };

  const handleShowImage = (e) => {
    setIsShowImage(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, subTitle, isShowImage);
    axios
      .post("http://localhost:8000/service", {
        title: title,
        subTitle: subTitle,
        isShowImage: isShowImage,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios.get("http://localhost:8000/service").then((res) => {
      setList(res.data);
    });
  }, []);

  return (
    <>
      <div className=" flex flex-col justify-center items-center h-screen">
        <form className=" bg-slate-600 p-6 rounded-md w-[600px] flex flex-col gap-3">
          <h2 className=" text-2xl font-bold font-sans text-center text-white">
            Service Section
          </h2>
          <input type="file" />
          <input
            onChange={handleTitle}
            type="text"
            placeholder="Title"
            className=" p-2 rounded-md w-full"
          />
          <input
            onChange={handleSubtitle}
            type="text"
            placeholder="Subtitle"
            className=" p-2 rounded-md w-full"
          />
          <div className=" flex items-center gap-3">
            <input
              onChange={handleShowImage}
              type="checkbox"
              className=" w-4 h-4"
            />
            <label htmlFor="" className=" text-white">
              Show Image
            </label>
          </div>
          <div>
            <button
              onClick={handleSubmit}
              type="submit"
              className=" bg-slate-500 text-white font-medium rounded-md py-2 w-full"
            >
              Submit
            </button>
          </div>
        </form>

        <div className=" w-[800px] bg-slate-300 p-7 mt-10 rounded-md">
          <table className=" w-full">
            <tr className=" bg-slate-800 text-white">
              <th className=" py-2">Image</th>
              <th>Title</th>
              <th>SubTitle</th>
              <th>Button visibility</th>
              <th>Actions</th>
            </tr>
            {list.map((item) => (
              <tr className=" bg-slate-500 text-white">
                <td className=" ">
                  <img src="" alt="table image 1" />
                </td>
                <td>{item.title}</td>
                <td>{item.subTitle}</td>
                <td>Yes</td>
                <td className=" flex gap-2">
                  <button className=" bg-green-700 text-white py-1 px-3 rounded">
                    Edit
                  </button>
                  <button className=" bg-red-700 text-white py-1 px-3 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default Services;
