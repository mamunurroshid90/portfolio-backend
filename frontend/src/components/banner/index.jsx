import React from "react";
import RoundIcon from "../../assets/images/round-icon.png";
import BannerImg from "../../assets/images/bannerImage.jpg";

const Banner = () => {
  return (
    <>
      <div className=" container mb-[128px]">
        <div className=" grid grid-cols-[55fr,45fr] gap-9 items-center">
          <div className=" ">
            <div className=" flex items-center gap-1">
              <img src={RoundIcon} alt="round-icon" />
              <h4 className=" font-jost">I AM DESIGNER</h4>
            </div>
            <h1 className=" text-[70px] font-jost font-bold leading-[95px]">
              Creative Design and Web Solutions
            </h1>
            <p className=" text-lg text-textColor font-jost leading-[30px] mt-11 mb-12">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
              autem quibusdam et.
            </p>
            <div>
              <button className=" bg-buttonColor py-3 px-7 rounded-md text-white font-jost font-semibold hover:bg-buttonHover transition-all duration-100 ease-linear">
                Download My CV
              </button>
            </div>
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
