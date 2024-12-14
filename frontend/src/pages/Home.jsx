import React from "react";
import Navbar from "../components/navbar";
import Banner from "../components/banner";
import AboutMe from "../components/aboutMe";
import Services from "../components/services";
import Contact from "../components/contact";
import Footer from "../components/footer";

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
          <Services />
          <Contact />
          <div className=" bg-black">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
