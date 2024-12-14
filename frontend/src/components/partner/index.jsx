import React from "react";
import RoundedIcon from "../../assets/images/round-icon.png";
import Image_1 from "../../assets/images/partners/p-img-1.png";
import Image_2 from "../../assets/images/partners/p-img-2.png";
import Image_3 from "../../assets/images/partners/p-img-3.png";
import Image_4 from "../../assets/images/partners/p-img-4.png";
import Image_5 from "../../assets/images/partners/p-img-5.png";
import Image_6 from "../../assets/images/partners/p-img-6.png";

const Partner = () => {
  return (
    <>
      <div>
        <div className=" container">
          <div className=" flex flex-col items-center justify-center">
            <div className=" flex items-center gap-2">
              <img src={RoundedIcon} alt="round icon" />
              <h6 className=" text-base font-jost">Partners</h6>
            </div>
            <h2 className=" text-[44px] font-bold font-jost">
              REPUTED PARTNER
            </h2>
          </div>
          <div className=" flex flex-wrap gap-5 mt-[50px]">
            <div className=" w-[180px] h-[120px] overflow-hidden border border-borderColor rounded-md flex justify-center items-center">
              <img src={Image_1} alt="image-1" />
            </div>
            <div className=" w-[180px] h-[120px] overflow-hidden border border-borderColor rounded-md flex justify-center items-center">
              <img src={Image_2} alt="image-2" />
            </div>
            <div className=" w-[180px] h-[120px] overflow-hidden border border-borderColor rounded-md flex justify-center items-center">
              <img src={Image_3} alt="image-3" />
            </div>
            <div className=" w-[180px] h-[120px] overflow-hidden border border-borderColor rounded-md flex justify-center items-center">
              <img src={Image_4} alt="image-4" />
            </div>
            <div className=" w-[180px] h-[120px] overflow-hidden border border-borderColor rounded-md flex justify-center items-center">
              <img src={Image_5} alt="image-5" />
            </div>
            <div className=" w-[180px] h-[120px] overflow-hidden border border-borderColor rounded-md flex justify-center items-center">
              <img src={Image_6} alt="image-6" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
