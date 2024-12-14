import React from "react";
import FooterLogo from "../../assets/images/footer-logo.png";
import FacebookIcon from "../../assets/images/social icon/Facebook Icon.png";
import Twitter from "../../assets/images/social icon/Twitter Icon.png";
import Dribble from "../../assets/images/social icon/Dribbble Icon.png";
import Behance from "../../assets/images/social icon/Behance Icon.png";
import { TfiLocationPin } from "react-icons/tfi";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <footer className=" bg-black">
        <div className=" container text-white">
          <div className=" grid grid-cols-4 gap-3 py-[130px] pb-[100px] items-start">
            <div className=" flex flex-col gap-7">
              <img src={FooterLogo} alt="logo" className=" w-[135px]" />
              <p className=" text-sm text-white font-jost">
                At vero eos et accusamus et iusto odio dign ducimus qui
                blanditiis praesentium volup deleniti atque corrupti quos
                dolores et molestias excepturi sint occaecati
              </p>
              <p className=" font-bold font-jost">credesign@gmail.com</p>
            </div>
            <div className=" flex flex-col items-start gap-10 ml-12 font-jost">
              <h3 className=" text-xl text-white font-jost font-semibold">
                Explore Link
              </h3>
              <ul className=" flex flex-col gap-4">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Resume</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
            <div className=" flex flex-col items-start gap-10 ml-12 font-jost">
              <h3 className=" text-xl text-white font-jost font-semibold">
                My Services
              </h3>
              <ul className=" flex flex-col gap-4">
                <li>
                  <a href="#">UI/UX Design</a>
                </li>
                <li>
                  <a href="#">Mobile App</a>
                </li>
                <li>
                  <a href="#">Graphics Design</a>
                </li>
                <li>
                  <a href="#">Web Developer</a>
                </li>
              </ul>
            </div>
            <div className=" flex flex-col items-start gap-6 font-jost">
              <h3 className=" text-xl text-white font-jost font-semibold">
                Follow me
              </h3>
              <ul className=" flex gap-4">
                <li>
                  <a href="#">
                    <img
                      src={FacebookIcon}
                      alt="facebook icon"
                      className=" w-[42px] h-[42px] rounded-md"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src={Twitter}
                      alt="twitter icon"
                      className=" w-[42px] h-[42px] rounded-md"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src={Behance}
                      alt="behance icon"
                      className=" w-[42px] h-[42px] rounded-md"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src={Dribble}
                      alt="dribble icon"
                      className=" w-[42px] h-[42px] rounded-md"
                    />
                  </a>
                </li>
              </ul>
              <div className=" flex items-center gap-4">
                <TfiLocationPin className=" text-buttonColor text-2xl" />
                <p>202 Dog Hill Lane Beloit, KS 67420</p>
              </div>
              <div className=" flex items-center gap-4">
                <FiPhoneCall className=" text-buttonColor" />
                <p>1-800-915-6270</p>
              </div>
            </div>
          </div>
        </div>
        <hr className=" w-full h-1 bg-[#515151]" />
        <div className=" container grid grid-cols-[12fr,6fr] text-white py-9">
          <div className="">
            <span className=" text-sm font-jost text-white">
              All rights reserved 2023 Credesign
            </span>
          </div>
          <div className=" flex justify-between items-center">
            <p className=" text-sm font-jost text-white">
              <a href="#">Terms & Condition</a>
            </p>
            <p className=" text-sm font-jost text-white">
              <a href="#">Privacy policy</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
