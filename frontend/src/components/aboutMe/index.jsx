import React, { useEffect, useState } from "react";
import { IoMdCheckboxOutline } from "react-icons/io";
import { GrEmptyCircle } from "react-icons/gr";
import axios from "axios";
import baseUrl from "../../config/baseUrl";

const AboutMe = () => {
  const [subHeading, setSubheading] = useState("");
  const [heading, setHeading] = useState("");
  const [clientDesign, setClientDesign] = useState("");
  const [friendlyDesign, setFriendlyDesign] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [buttonShow, setButtonShow] = useState(false);
  const [projectText, setProjectText] = useState("");
  const [projectCount, setProjectCount] = useState("");
  const [experienceYearText, setExperienceYearText] = useState("");
  const [experienceYearCount, setExperienceYearCount] = useState("");
  const [aboutInfo, setAboutInfo] = useState({});
  const [compProjectImg, setCompProjImg] = useState("");
  const [experienceImg, setExperienceImg] = useState("");

  console.log(aboutInfo);
  console.log();
  useEffect(() => {
    async function fetchData() {
      let data = await axios.get(`${baseUrl}/about`);
      console.log(data.data);
      setSubheading(data.data.subHeading);
      setHeading(data.data.heading);
      setClientDesign(data.data.clientDesign);
      setFriendlyDesign(data.data.friendlyDesign);
      setParagraph(data.data.paragraph);
      setButtonText(data.data.buttonText);
      setButtonShow(data.data.buttonShow);
      setProjectText(data.data.projectText);
      setProjectCount(data.data.projectCount);
      setExperienceYearText(data.data.experienceYearText);
      setExperienceYearCount(data.data.experienceYearCount);
      setAboutInfo(data.data.aboutImg);
      setCompProjImg(data.data.completeImg);
      setExperienceImg(data.data.experienceImg);
    }
    fetchData();
  }, []);
  return (
    <>
      <div className=" container">
        <div className=" grid grid-cols-[45fr,55fr] gap-[112px] items-center">
          <div className=" h-[770px]">
            <img
              src={`${baseUrl}/${aboutInfo}`}
              alt="aboutMe-img"
              className=" w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="">
            <div className=" flex items-center gap-1">
              <GrEmptyCircle className=" text-xl" />
              <h4 className=" font-jost text-lg">{subHeading}</h4>
            </div>
            <h2 className=" text-[58px] font-jost font-bold leading-[70px]">
              {heading}
            </h2>
            <p className=" text-lg text-textColor font-jost leading-[30px] my-8">
              {paragraph}
            </p>
            <div className=" flex items-center gap-[30px]">
              <div className=" flex items-center gap-3">
                <div className=" w-[60px] h-[58px] rounded-md bg-bgColor flex justify-center items-center">
                  <img
                    src={`${baseUrl}/${compProjectImg}`}
                    alt="complProjectIcon"
                  />
                </div>
                <div>
                  <h2 className=" font-sans text-[21px] font-bold text-[#FF6B00]">
                    {projectCount}+
                  </h2>
                  <h3 className=" text-[20px] text-[#101010] font-jost">
                    {projectText}
                  </h3>
                </div>
              </div>
              <div className=" flex items-center gap-3">
                <div className=" w-[60px] h-[58px] rounded-md bg-bgColor flex justify-center items-center">
                  <img
                    src={`${baseUrl}/${experienceImg}`}
                    alt="complProjectIcon"
                  />
                </div>
                <div>
                  <h2 className=" font-sans text-[21px] font-bold text-[#FF6B00]">
                    {experienceYearCount}+
                  </h2>
                  <h3 className=" text-[20px] text-[#101010] font-jost">
                    {experienceYearText}
                  </h3>
                </div>
              </div>
            </div>
            <div className=" my-9 flex flex-col gap-5">
              <div className=" flex items-center gap-3">
                <IoMdCheckboxOutline className=" text-buttonColor" />
                <h5 className=" text-base font-alef">{clientDesign}</h5>
              </div>
              <div className=" flex items-center gap-3">
                <IoMdCheckboxOutline className=" text-buttonColor" />
                <h5 className=" text-base font-alef">{friendlyDesign}</h5>
              </div>
            </div>
            <div>
              {buttonShow && (
                <button className=" bg-buttonColor py-3 px-7 rounded-md text-white font-jost font-semibold hover:bg-buttonHover transition-all duration-100 ease-linear">
                  {buttonText}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
