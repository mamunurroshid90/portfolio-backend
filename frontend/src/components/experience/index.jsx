import React from "react";
import RoundedIcon from "../../assets/images/round-icon.png";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Experience = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/resume")
      .then((res) => {
        setList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className=" bg-bgColor">
        <div className=" container py-[65px]">
          <div className=" flex flex-col items-center">
            <div className=" flex items-center gap-2">
              <img src={RoundedIcon} alt="rounded icon" />
              <h6 className=" text-lg font-jost">My Resume</h6>
            </div>
            <h2 className=" text-[44px] font-jost font-bold">
              10+ YEARS OF EXPERIENCE
            </h2>
          </div>
          <div className=" mt-10">
            <div>
              <h3 className=" text-2xl text-[#1E1E1E] font-jost font-semibold mb-6">
                Education
              </h3>
              <div className=" flex flex-wrap gap-5">
                {list.map((item) => (
                  <div className=" w-[380px] bg-white rounded-md py-7 pr-7 pl-10">
                    <h3 className=" text-xl font-semibold font-jost text-[#000000]">
                      {item.title}
                    </h3>
                    <p className=" text-base text-textColor font-jost mt-2 mb-4">
                      {item.subTitle}
                    </p>
                    <p className=" text-base text-textColor font-jost">
                      {item.paragraph}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className=" text-2xl text-[#1E1E1E] font-jost font-semibold my-6">
                Software Skills
              </h3>
              <div className=" flex flex-wrap gap-5">
                <div className=" w-[380px] bg-white rounded-md py-7 pr-7 pl-10">
                  <h3 className=" text-xl font-semibold font-jost text-[#000000]">
                    UI/UX Design
                  </h3>
                  <p className=" text-base text-textColor font-jost mt-2 mb-4">
                    University of ULAV (2018 - 2022)
                  </p>
                  <p className=" text-base text-textColor font-jost">
                    Hen our power of choice is untrammelled and when nothing
                    prevents our being able
                  </p>
                </div>
                <div className=" w-[380px] bg-white rounded-md py-7 pr-7 pl-10">
                  <h3 className=" text-xl font-semibold font-jost text-[#000000]">
                    Web Developer
                  </h3>
                  <p className=" text-base text-textColor font-jost mt-2 mb-4">
                    University of ULAV (2018 - 2022)
                  </p>
                  <p className=" text-base text-textColor font-jost">
                    Hen our power of choice is untrammelled and when nothing
                    prevents our being able
                  </p>
                </div>
                <div className=" w-[380px] bg-white rounded-md py-7 pr-7 pl-10">
                  <h3 className=" text-xl font-semibold font-jost text-[#000000]">
                    App Development
                  </h3>
                  <p className=" text-base text-textColor font-jost mt-2 mb-4">
                    University of ULAV (2018 - 2022)
                  </p>
                  <p className=" text-base text-textColor font-jost">
                    Hen our power of choice is untrammelled and when nothing
                    prevents our being able
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className=" text-2xl text-[#1E1E1E] font-jost font-semibold mt-6">
                Experience
              </h3>
              <div className=" flex flex-wrap gap-5">
                <div className=" w-[380px] bg-white rounded-md py-7 pr-7 pl-10">
                  <h3 className=" text-xl font-semibold font-jost text-[#000000]">
                    Web Developer & Trainer
                  </h3>
                  <p className=" text-base text-textColor font-jost mt-2 mb-4">
                    University of ULAV (2018 - 2022)
                  </p>
                  <p className=" text-base text-textColor font-jost">
                    Hen our power of choice is untrammelled and when nothing
                    prevents our being able
                  </p>
                </div>
                <div className=" w-[380px] bg-white rounded-md py-7 pr-7 pl-10">
                  <h3 className=" text-xl font-semibold font-jost text-[#000000]">
                    Front-end Developer
                  </h3>
                  <p className=" text-base text-textColor font-jost mt-2 mb-4">
                    University of ULAV (2018 - 2022)
                  </p>
                  <p className=" text-base text-textColor font-jost">
                    Hen our power of choice is untrammelled and when nothing
                    prevents our being able
                  </p>
                </div>
                <div className=" w-[380px] bg-white rounded-md py-7 pr-7 pl-10">
                  <h3 className=" text-xl font-semibold font-jost text-[#000000]">
                    UI/UX Designer
                  </h3>
                  <p className=" text-base text-textColor font-jost mt-2 mb-4">
                    University of ULAV (2018 - 2022)
                  </p>
                  <p className=" text-base text-textColor font-jost">
                    Hen our power of choice is untrammelled and when nothing
                    prevents our being able
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
