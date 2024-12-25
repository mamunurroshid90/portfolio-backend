import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Resume = () => {
  const [sectionTitle, setSectionTitle] = useState("");
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [list, setList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState("");

  const handleSectionTitle = (e) => {
    setSectionTitle(e.target.value);
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleSubTitle = (e) => {
    setSubTitle(e.target.value);
  };
  const handleParagraph = (e) => {
    setParagraph(e.target.value);
  };

  const handleEditButton = (item) => {
    setSectionTitle(item.sectionTitle);
    setTitle(item.title);
    setSubTitle(item.subTitle);
    setParagraph(item.paragraph);
    setIsOpen(true);
    setId(item._id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(sectionTitle, title, subTitle, paragraph);
    if (id) {
      axios
        .put(`http://localhost:8000/resume/${id}`, {
          sectionTitle,
          title,
          subTitle,
          paragraph,
        })
        .then((res) => {
          axios.get("http://localhost:8000/resume").then((res) => {
            console.log(res.data);
            setIsOpen(false);
            setSectionTitle("");
            setTitle("");
            setSubTitle("");
            setParagraph("");
            setId("");
            // toast.success("Data Update successfully!", {
            //   position: "top-right",
            //   autoClose: 2000,
            //   hideProgressBar: false,
            //   closeOnClick: false,
            //   pauseOnHover: true,
            //   draggable: true,
            //   progress: undefined,
            //   theme: "dark",
            // });
          });
        });
      // .catch((err) => {
      //   console.log(err);
      // });
    } else {
      axios
        .post("http://localhost:8000/resume", {
          sectionTitle: sectionTitle,
          title: title,
          subTitle: subTitle,
          paragraph: paragraph,
        })
        .then((res) => {
          // console.log(res);
          setSectionTitle("");
          setTitle("");
          setSubTitle("");
          setParagraph("");
          toast.success("Data sent successfully!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
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
    axios.get("http://localhost:8000/resume").then((res) => {
      setList(res.data);
    });
  }, []);

  const handleDelete = (item) => {
    console.log(item._id);
    axios.delete(`http://localhost:8000/resume/${item._id}`).then((res) => {
      console.log(res.data);
      axios.get("http://localhost:8000/resume").then((res) => {
        setList(res.data);
      });
      toast.success("Delete successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
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
      <div className=" flex flex-col justify-center items-center pt-5">
        <form className=" bg-slate-600 p-6 rounded-md w-[600px] flex flex-col gap-3">
          <h2 className=" text-2xl font-bold font-sans text-center text-white">
            Resume Section
          </h2>
          <input type="file" name="" id="" />
          <input
            type="text"
            onChange={handleSectionTitle}
            value={sectionTitle}
            placeholder="Section Title"
            className=" p-2 rounded-md w-full"
          />
          <input
            type="text"
            onChange={handleTitle}
            value={title}
            placeholder="Title"
            className=" p-2 rounded-md w-full"
          />
          <input
            type="text"
            onChange={handleSubTitle}
            value={subTitle}
            placeholder="subTitle"
            className=" p-2 rounded-md w-full"
          />
          <textarea
            type="text"
            rows={5}
            onChange={handleParagraph}
            value={paragraph}
            placeholder="Paragraph"
            className=" p-2 rounded-md w-full"
          />
          <div>
            <button
              type="submit"
              onClick={handleSubmit}
              className=" bg-slate-500 text-white font-medium rounded-md p-2 w-full"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Table Data */}
        <div className=" mt-10 bg-slate-300 w-[800px] p-5 rounded-md">
          <h3 className=" text-2xl font-bold font-serif text-center">
            Table Data
          </h3>
          <div className=" mt-5">
            <table className=" border-collapse border border-slate-600 w-full">
              <thead className="">
                <tr className=" bg-slate-700 text-white">
                  <th className=" border border-slate-400 p-2">S.NO</th>
                  <th className=" border border-slate-400 p-2">Title</th>
                  <th className=" border border-slate-400 p-2">SubTitle</th>
                  <th className=" border border-slate-400 p-2">Paragraph</th>
                  <th className=" border border-slate-400 p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {list.map((item, index) => (
                  <tr key={index} className=" bg-slate-600 text-white">
                    <td className=" border border-slate-300 p-2">
                      {index + 1}
                    </td>
                    <td className=" border border-slate-300 p-2 font-bold">
                      {item.title}
                    </td>
                    <td className=" border border-slate-300 p-2">
                      {item.subTitle}
                    </td>
                    <td className=" border border-slate-300 p-2">
                      {item.paragraph}
                    </td>
                    <td className=" flex flex-wrap gap-2 justify-center border-t p-2">
                      <button
                        onClick={() => handleEditButton(item)}
                        className=" bg-green-700 px-2 font-semibold  rounded-md text-white"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item)}
                        className=" bg-red-700 px-2 font-semibold  rounded-md text-white"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
                Resume Section
              </h2>
              <input type="file" name="" id="" />
              <input
                type="text"
                onChange={handleSectionTitle}
                value={sectionTitle}
                placeholder="Section Title"
                className=" p-2 rounded-md w-full"
              />
              <input
                type="text"
                onChange={handleTitle}
                value={title}
                placeholder="Title"
                className=" p-2 rounded-md w-full"
              />
              <input
                type="text"
                onChange={handleSubTitle}
                value={subTitle}
                placeholder="subTitle"
                className=" p-2 rounded-md w-full"
              />
              <input
                type="text"
                onChange={handleParagraph}
                value={paragraph}
                placeholder="Paragraph"
                className=" p-2 rounded-md w-full"
              />
              <div>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className=" bg-slate-500 text-white font-medium rounded-md p-2 w-full"
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

export default Resume;
