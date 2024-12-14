import React from "react";
import RoundedIcon from "../../assets/images/round-icon.png";
import { GoArrowRight } from "react-icons/go";
import Image_1 from "../../assets/images/blog/b-img-1.jpg";
import Image_2 from "../../assets/images/blog/b-img-2.jpg";
import Image_3 from "../../assets/images/blog/b-img-3.jpg";

const Blog = () => {
  return (
    <>
      <div>
        <div className=" container py-[130px]">
          <div className=" flex flex-col items-center justify-center">
            <div className=" flex items-center gap-2">
              <img src={RoundedIcon} alt="round icon" />
              <h6 className=" text-base font-jost">My Blog</h6>
            </div>
            <h2 className=" text-[44px] text-black font-jost font-bold ">
              LATEST BLOG
            </h2>
          </div>
          <div className=" mt-[50px] flex flex-wrap items-center gap-5">
            <div className=" w-[380px] h-[510px] border border-borderColor rounded-md">
              <div className=" w-[380px] h-[300px] overflow-hidden">
                <img
                  src={Image_1}
                  alt="blog image-1"
                  className=" w-full h-full object-cover rounded-md"
                />
              </div>
              <div className=" py-7 pl-7 pr-10">
                <span className=" text-xs text-[#6F6B80]">
                  20 January, 2023
                </span>
                <h4 className=" text-xl text-black font-semibold font-jost my-4">
                  Become a UX/UI Designer With Career Foundry.
                </h4>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" flex items-center gap-2 text-buttonColor font-jost"
                >
                  Read More{" "}
                  <span>
                    <GoArrowRight />
                  </span>
                </a>
              </div>
            </div>
            <div className=" w-[380px] h-[510px] border border-borderColor rounded-md">
              <div className=" w-[380px] h-[300px] overflow-hidden">
                <img
                  src={Image_2}
                  alt="blog image-2"
                  className=" w-full h-full object-cover rounded-md"
                />
              </div>
              <div className=" py-7 pl-7 pr-10">
                <span className=" text-xs text-[#6F6B80]">
                  15 January, 2023
                </span>
                <h4 className=" text-xl text-black font-semibold font-jost my-4">
                  The Best App Development For Your Business Plan.
                </h4>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" flex items-center gap-2 text-buttonColor font-jost"
                >
                  Read More{" "}
                  <span>
                    <GoArrowRight />
                  </span>
                </a>
              </div>
            </div>
            <div className=" w-[380px] h-[510px] border border-borderColor rounded-md">
              <div className=" w-[380px] h-[300px] overflow-hidden">
                <img
                  src={Image_3}
                  alt="blog image-3"
                  className=" w-full h-full object-cover rounded-md"
                />
              </div>
              <div className=" py-7 pl-7 pr-10">
                <span className=" text-xs text-[#6F6B80]">
                  08 January, 2023
                </span>
                <h4 className=" text-xl text-black font-semibold font-jost my-4">
                  The Best Portfolio For Agency Design Thinking
                </h4>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" flex items-center gap-2 text-buttonColor font-jost"
                >
                  Read More{" "}
                  <span>
                    <GoArrowRight />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
