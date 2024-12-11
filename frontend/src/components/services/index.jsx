import React from "react";
import RoundIcon from "../../assets/images/round-icon.png";
import UiUx from "../../assets/images/services icon/ui-ux.png";
import MobileApp from "../../assets/images/services icon/mobile-app.png";
import Graphics from "../../assets/images/services icon/graphics-design.png";
import WebDeveloper from "../../assets/images/services icon/web developer.png";
import Seo from "../../assets/images/services icon/seo.png";
import Wordpress from "../../assets/images/services icon/wordpress.png";
import AppDevelopment from "../../assets/images/services icon/app development.png";
import Business from "../../assets/images/services icon/business.png";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Services = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/service").then((res) => {
      setList(res.data);
    });
  }, []);

  return (
    <>
      <div className=" container mt-[130px] ">
        <div className=" ">
          <div className=" flex items-center gap-3 justify-center ">
            <img src={RoundIcon} alt="round icon" />
            <h5 className=" font-jost">My Services</h5>
          </div>
          <h1 className=" text-[44px] font-jost font-bold uppercase mt-3 text-center">
            Services I offer
          </h1>
          <div className=" flex flex-wrap gap-5 mt-10">
            {list.map((item, index) => (
              <div
                key={index}
                className=" w-[286px] h-[290px] border-2 border-bgColor rounded-md flex flex-col items-center py-[30px] px-[20px] hover:bg-bgColor transition-all duration-200 ease-linear"
              >
                <div className=" w-[55px] h-[55px] overflow-hidden">
                  {item.isShowImage && (
                    <img
                      src={UiUx}
                      alt="ui-ux-icon"
                      className=" w-full h-full object-cover"
                    />
                  )}
                </div>
                <h3 className=" text-[24px] font-jost font-medium mt-[15px] mb-[10px]">
                  {item.title}
                </h3>
                <p className=" font-alef text-textColor text-center">
                  {item.subTitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
