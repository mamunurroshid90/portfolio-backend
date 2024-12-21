import React from "react";

const Resume = () => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center pt-5">
        <form className=" bg-slate-600 p-6 rounded-md w-[600px] flex flex-col gap-3">
          <h2 className=" text-2xl font-bold font-sans text-center text-white">
            Resume Section
          </h2>
          <input type="file" name="" id="" />
          <input
            type="text"
            placeholder="Section Title"
            className=" p-2 rounded-md w-full"
          />
          <input
            type="text"
            placeholder="Title"
            className=" p-2 rounded-md w-full"
          />
          <input
            type="text"
            placeholder="subTitle"
            className=" p-2 rounded-md w-full"
          />
          <input
            type="text"
            placeholder="Paragraph"
            className=" p-2 rounded-md w-full"
          />
          <div>
            <button
              type="submit"
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
                <tr className=" bg-slate-600 text-white">
                  <td className=" border border-slate-300 p-2">1</td>
                  <td className=" border border-slate-300 p-2 font-bold">
                    BSc in Computer Science
                  </td>
                  <td className=" border border-slate-300 p-2">
                    University of ULAV (2018 - 2022)
                  </td>
                  <td className=" border border-slate-300 p-2">
                    Hen our power of choice is untrammelled and when nothing
                    prevents our being able
                  </td>
                  <td className=" flex flex-wrap gap-2 justify-center border-t p-2">
                    <button className=" bg-green-700 px-2 font-semibold  rounded-md text-white">
                      Edit
                    </button>
                    <button className=" bg-red-700 px-2 font-semibold  rounded-md text-white">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr className=" bg-slate-600 text-white">
                  <td className=" border border-slate-300 p-2">1</td>
                  <td className=" border border-slate-300 p-2 font-bold">
                    BSc in Computer Science
                  </td>
                  <td className=" border border-slate-300 p-2">
                    University of ULAV (2018 - 2022)
                  </td>
                  <td className=" border border-slate-300 p-2">
                    Hen our power of choice is untrammelled and when nothing
                    prevents our being able
                  </td>
                  <td className=" flex flex-wrap gap-2 justify-center border-t p-2">
                    <button className=" bg-green-700 px-2 font-semibold  rounded-md text-white">
                      Edit
                    </button>
                    <button className=" bg-red-700 px-2 font-semibold  rounded-md text-white">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
