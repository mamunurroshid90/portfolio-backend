import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { TfiEmail } from "react-icons/tfi";
import RoundIcon from "../../assets/images/round-icon.png";

const Contact = () => {
  return (
    <>
      <div className=" container my-[120px]">
        <div className=" flex items-center gap-3 justify-center">
          <img src={RoundIcon} alt="round icon" />
          <h6 className=" font-jost">My Contact</h6>
        </div>
        <h2 className=" text-[50px] font-jost font-bold text-center">
          I WANT TO HEAR FROM YOU
        </h2>
        <div className=" grid grid-cols-[8fr,4fr] gap-5 mt-12">
          <form action="" className=" flex flex-col gap-5">
            <div className=" flex justify-evenly">
              <input
                type="text"
                placeholder="Your name"
                className=" w-[48%] p-3 rounded-md border border-borderColor"
              />
              <input
                type="email"
                placeholder="Your Email"
                className=" w-[48%] p-3 rounded-md border border-borderColor"
              />
            </div>
            <div className=" flex justify-evenly">
              <input
                type="phone"
                placeholder="Phone"
                className=" w-[48%] p-3 rounded-md border border-borderColor"
              />
              <input
                type="text"
                placeholder="Subject"
                className=" w-[48%] p-3 rounded-md border border-borderColor"
              />
            </div>
            <textarea
              name=""
              id=""
              placeholder="Message"
              rows={5}
              className=" p-3 rounded-md border border-borderColor m-3"
            ></textarea>
            <div className=" mt-1 ml-2">
              <button className=" bg-buttonColor py-2 px-6 rounded-md text-white font-jost">
                Send Me Message
              </button>
            </div>
          </form>
          <div>
            <div>
              <div className=" flex flex-col gap-6">
                <div className=" flex gap-5 items-center">
                  <div className=" bg-bgColor w-12 h-12 rounded-md flex justify-center items-center">
                    <IoLocationOutline className=" text-2xl text-buttonColor" />
                  </div>
                  <div>
                    <h6 className=" text-lg font-bold font-jost">Address</h6>
                    <p className=" text-sm font-jost">
                      202 Dog Hill Lane Beloit, KS 67420
                    </p>
                  </div>
                </div>
                <div className=" flex gap-5 items-center">
                  <div className=" bg-bgColor w-12 h-12 rounded-md flex justify-center items-center">
                    <LiaPhoneVolumeSolid className=" text-2xl text-buttonColor" />
                  </div>
                  <div>
                    <h6 className=" text-lg font-bold font-jost">Phone</h6>
                    <p className=" text-sm font-jost">+01589634755</p>
                  </div>
                </div>
                <div className=" flex gap-5 items-center">
                  <div className=" bg-bgColor w-12 h-12 rounded-md flex justify-center items-center">
                    <TfiEmail className=" text-2xl text-buttonColor" />
                  </div>
                  <div>
                    <h6 className=" text-lg font-bold font-jost">Email</h6>
                    <p className=" text-sm font-jost">credesign@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
