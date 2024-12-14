import React from "react";
import Navbar from "../components/navbar";
import Banner from "../components/banner";
import AboutMe from "../components/aboutMe";
import Services from "../components/services";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Experience from "../components/experience";
import Portfolio from "../components/portfolio";

const Home = () => {
  return (
    <>
      <div>
        <div>
          <Navbar />
          <Banner />
          <AboutMe />
          <Services />
          <Experience />
          <Portfolio />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
