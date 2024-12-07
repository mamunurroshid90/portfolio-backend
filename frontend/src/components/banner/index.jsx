import React from "react";
import RoundIcon from "../../assets/images/round-icon.png";
import BannerImg from "../../assets/images/bannerImage.jpg";

const Banner = () => {
  return (
    <>
      <div className=" container">
        <div className=" grid grid-cols-[55fr,45fr] gap-9 items-center">
          <div className=" ">
            <div className=" flex items-center gap-1">
              <img src={RoundIcon} alt="round-icon" />
              <h4>I AM DESIGNER</h4>
            </div>
            <h1 className=" text-[70px] font-jost font-bold leading-[95px]">
              Creative Design and Web Solutions
            </h1>
          </div>
          <div className=" bg-slate-800">
            <img
              src={BannerImg}
              alt="banner-image"
              className=" w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
