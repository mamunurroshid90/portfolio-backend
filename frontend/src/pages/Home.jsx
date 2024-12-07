import React from "react";
import Navbar from "../components/navbar";
import Banner from "../components/banner";

const Home = () => {
  return (
    <>
      <div className="">
        <div className=" ">
          <Navbar />
          <div className=" bg-bgColor">
            <Banner />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
