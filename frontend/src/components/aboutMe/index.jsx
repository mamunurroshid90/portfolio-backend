import React from "react";
import AboutMeImg from "../../assets/images/aboutMeImage.jpg";
import CheckIcon from "../../assets/images/check-square.png";
import RoundIcon from "../../assets/images/round-icon.png";
import CompProjectIcon from "../../assets/images/compProjIcon.png";

const AboutMe = () => {
  return (
    <>
      <div className=" container">
        <div className=" grid grid-cols-[45fr,55fr] gap-[112px] items-center">
          <div className=" h-[770px]">
            <img
              src={AboutMeImg}
              alt="aboutMe-img"
              className=" w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="">
            <div className=" flex items-center gap-1">
              <img src={RoundIcon} alt="round icon" />
              <h4 className=" font-jost text-lg">About Me</h4>
            </div>
            <h2 className=" text-[58px] font-jost font-bold leading-[70px]">
              I Can Design Anything You Want
            </h2>
            <p className=" text-lg text-textColor font-jost leading-[30px] my-8">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
              autem quibusdam et aut officiis. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit.
            </p>
            <div className=" flex items-center gap-[30px]">
              <div className=" flex items-center gap-3">
                <div className=" w-[60px] h-[58px] rounded-md bg-bgColor flex justify-center items-center">
                  <img src={CompProjectIcon} alt="complProjectIcon" />
                </div>
                <div>
                  <h2 className=" font-sans text-[21px] font-bold text-[#FF6B00]">
                    350+
                  </h2>
                  <h3 className=" text-[20px] text-[#101010] font-jost">
                    Complete Project
                  </h3>
                </div>
              </div>
              <div className=" flex items-center gap-3">
                <div className=" w-[60px] h-[58px] rounded-md bg-bgColor flex justify-center items-center">
                  <img src={CompProjectIcon} alt="complProjectIcon" />
                </div>
                <div>
                  <h2 className=" font-sans text-[21px] font-bold text-[#FF6B00]">
                    16+
                  </h2>
                  <h3 className=" text-[20px] text-[#101010] font-jost">
                    Year of experience
                  </h3>
                </div>
              </div>
            </div>
            <div className=" my-9 flex flex-col gap-5">
              <div className=" flex items-center gap-3">
                <img src={CheckIcon} alt="check icon" />
                <h5 className=" text-base font-alef">
                  Work simple and cline design
                </h5>
              </div>
              <div className=" flex items-center gap-3">
                <img src={CheckIcon} alt="check icon" />
                <h5 className=" text-base font-alef">
                  New idea and user friendly design
                </h5>
              </div>
            </div>
            <div>
              <button className=" bg-buttonColor py-3 px-7 rounded-md text-white font-jost font-semibold hover:bg-buttonHover transition-all duration-100 ease-linear">
                Download My CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
