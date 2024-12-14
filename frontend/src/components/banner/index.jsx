import React from "react";
import RoundIcon from "../../assets/images/round-icon.png";
import BannerImg from "../../assets/images/bannerImage.jpg";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Banner = () => {
  const [subHeading, setSubheading] = useState("");
  const [heading, setHeading] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [buttonShow, setButtonShow] = useState(false);
  const [image, setImage] = useState("");

  useEffect(() => {
    async function fetchData() {
      let data = await axios.get("http://localhost:8000/banner");
      console.log(data);
      setSubheading(data.data.subHeading);
      setHeading(data.data.heading);
      setParagraph(data.data.paragraph);
      setButtonText(data.data.buttonText);
      setButtonShow(data.data.buttonShow);
      setImage(data.data.image);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className=" bg-bgColor">
        <div className=" container mb-[128px]">
          <div className=" grid grid-cols-[55fr,45fr] gap-9 items-center">
            <div className=" ">
              <div className=" flex items-center gap-1">
                <img src={RoundIcon} alt="round-icon" />
                <h4 className=" font-jost">{subHeading}</h4>
              </div>
              <h1 className=" text-[70px] font-jost font-bold leading-[95px]">
                {heading}
              </h1>
              <p className=" text-lg text-textColor font-jost leading-[30px] mt-11 mb-12">
                {paragraph}
              </p>
              <div>
                {buttonShow && (
                  <button className=" bg-buttonColor py-3 px-7 rounded-md text-white font-jost font-semibold hover:bg-buttonHover transition-all duration-100 ease-linear">
                    {buttonText}
                  </button>
                )}
              </div>
            </div>
            <div className=" w-[550px] h-[750px] overflow-hidden">
              <img
                src={`http://localhost:8000/${image}`}
                alt="banner-image"
                className=" w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
