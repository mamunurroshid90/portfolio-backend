import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Services = () => {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [isShowImage, setIsShowImage] = useState(false);
  const [list, setList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState("");

  const openModal = (item) => {
    setIsOpen(true);
    console.log(item);
    setTitle(item.title);
    setSubTitle(item.subTitle);
    setIsShowImage(item.isShowImage);
    setId(item._id);
  };

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
    if (id) {
      axios
        .put(`http://localhost:8000/service/${id}`, {
          title,
          subTitle,
          isShowImage,
        })
        .then((res) => {
          axios.get("http://localhost:8000/service").then((res) => {
            setList(res.data);
            setIsOpen(false);
            setTitle("");
            setSubTitle("");
            setIsShowImage(false);
            setId("");
          });
        });
    } else {
      axios
        .post("http://localhost:8000/service", {
          title: title,
          subTitle: subTitle,
          isShowImage: isShowImage,
        })
        .then((res) => {
          // console.log(res);
          setTitle("");
          setSubTitle("");
          setIsShowImage("");
          toast.success("Data sent successfully", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    axios.get("http://localhost:8000/service").then((res) => {
      setList(res.data);
    });
  }, []);

  const handleDelete = (item) => {
    console.log(item._id);
    axios.delete(`http://localhost:8000/service/${item._id}`).then((res) => {
      console.log(res.data);
      axios.get("http://localhost:8000/service").then((res) => {
        setList(res.data);
      });
      toast.success("Item deleted", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    });
  };

  return (
    <>
      <ToastContainer />
      <div className=" flex flex-col justify-center items-center">
        <form className=" bg-slate-600 p-6 rounded-md w-[600px] flex flex-col gap-3">
          <h2 className=" text-2xl font-bold font-sans text-center text-white">
            Service Section
          </h2>
          <input type="file" />
          <input
            onChange={handleTitle}
            value={title}
            type="text"
            placeholder="Title"
            className=" p-2 rounded-md w-full"
          />
          <input
            onChange={handleSubtitle}
            value={subTitle}
            type="text"
            placeholder="Subtitle"
            className=" p-2 rounded-md w-full"
          />
          <div className=" flex items-center gap-3">
            <input
              checked={isShowImage}
              onChange={handleShowImage}
              type="checkbox"
              className=" w-4 h-4"
              id="showImage"
            />
            <label htmlFor="showImage" className=" text-white">
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
              <th>SR</th>
              <th className=" py-2">Image</th>
              <th>Title</th>
              <th>SubTitle</th>
              <th>Button visibility</th>
              <th>Actions</th>
            </tr>
            {list.map((item, index) => (
              <tr className=" bg-slate-500 text-white ">
                <td>{index + 1}</td>
                <td className=" ">
                  {item.isShowImage ? (
                    <img
                      src=""
                      alt="table image 1"
                      className=" w-20 h-20 bg-red-300"
                    />
                  ) : (
                    "No Preview"
                  )}
                </td>
                <td>{item.title}</td>
                <td>{item.subTitle}</td>
                <td>{item.isShowImage ? "Yes" : "No"}</td>
                <td className=" flex gap-2">
                  <button
                    onClick={() => openModal(item)}
                    className=" bg-green-700 text-white py-1 px-3 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item)}
                    className=" bg-red-700 text-white py-1 px-3 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
      <div className="flex items-center justify-center h-screen">
        {/* Modal */}
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <form className=" bg-slate-600 p-6 rounded-md w-[600px] flex flex-col gap-3">
              <div className="flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
                >
                  Close
                </button>
              </div>
              <h2 className=" text-2xl font-bold font-sans text-center text-white">
                Service Section
              </h2>
              <input type="file" />
              <input
                onChange={handleTitle}
                value={title}
                type="text"
                placeholder="Title"
                className=" p-2 rounded-md w-full"
              />
              <input
                onChange={handleSubtitle}
                value={subTitle}
                type="text"
                placeholder="Subtitle"
                className=" p-2 rounded-md w-full"
              />
              <div className=" flex items-center gap-3">
                <input
                  checked={isShowImage}
                  onChange={handleShowImage}
                  type="checkbox"
                  className=" w-4 h-4"
                  id="showImage"
                />
                <label htmlFor="showImage" className=" text-white">
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
          </div>
        )}
      </div>
    </>
  );
};

export default Services;
