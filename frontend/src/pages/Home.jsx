import React from "react";
import Navbar from "../components/navbar";
import Banner from "../components/banner";
import AboutMe from "../components/aboutMe";

const Home = () => {
  return (
    <>
      <div className="">
        <div className=" ">
          <Navbar />
          <div className=" bg-bgColor">
            <Banner />
          </div>
          <AboutMe />
        </div>
      </div>
    </>
  );
};

export default Home;
