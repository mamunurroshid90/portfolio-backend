import React from "react";
import RoundedIcon from "../../assets/images/round-icon.png";
import Image_1 from "../../assets/images/porfolio image/image-1.jpg";
import Image_2 from "../../assets/images/porfolio image/image-2.jpg";
import Image_3 from "../../assets/images/porfolio image/image-3.jpg";
import Image_4 from "../../assets/images/porfolio image/image-4.jpg";
import Image_5 from "../../assets/images/porfolio image/image-5.jpg";
import Image_6 from "../../assets/images/porfolio image/image-6.jpg";

const Portfolio = () => {
  return (
    <>
      <div>
        <div className=" container py-[130px]">
          <div className=" flex flex-col items-center">
            <div className=" flex items-center justify-center gap-2">
              <img src={RoundedIcon} alt="rounded icon" />
              <h6 className=" text-base font-jost">My Portfolio</h6>
            </div>
            <h2 className=" text-[44px] text-black font-bold font-jost">
              VISIT MY PORTFOLIO
            </h2>
          </div>
          <div className=" flex flex-wrap gap-6 mt-[50px]">
            <div className=" w-[380px] h-[500px] overflow-hidden">
              <img
                src={Image_1}
                alt="image-1"
                className=" w-full h-full object-cover rounded-md"
              />
            </div>
            <div className=" w-[380px] h-[500px] overflow-hidden">
              <img
                src={Image_2}
                alt="image-2"
                className=" w-full h-full object-cover rounded-md"
              />
            </div>
            <div className=" w-[380px] h-[500px] overflow-hidden">
              <img
                src={Image_3}
                alt="image-3"
                className=" w-full h-full object-cover rounded-md"
              />
            </div>
            <div className=" w-[380px] h-[500px] overflow-hidden">
              <img
                src={Image_4}
                alt="image-4"
                className=" w-full h-full object-cover rounded-md"
              />
            </div>
            <div className=" w-[380px] h-[500px] overflow-hidden">
              <img
                src={Image_5}
                alt="image-5"
                className=" w-full h-full object-cover rounded-md"
              />
            </div>
            <div className=" w-[380px] h-[500px] overflow-hidden">
              <img
                src={Image_6}
                alt="image-6"
                className=" w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
