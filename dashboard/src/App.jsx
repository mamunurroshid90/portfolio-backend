import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Services from "./components/Services";

function App() {
  const [activeMenu, setActiveMenu] = useState("Navbar");

  const handleActive = (menu) => {
    // console.log(menu);
    setActiveMenu(menu);
  };
  return (
    <>
      <div>
        <div className=" grid grid-cols-[1fr,4fr]">
          <div className=" bg-slate-800 text-white h-screen p-4">
            <h2 className=" text-2xl text-center font-serif font-bold mb-5">
              Menu
            </h2>
            <div>
              <ul className=" flex flex-col gap-2 ">
                <li
                  onClick={() => handleActive("Navbar")}
                  className=" border-b-2 border-gray-500 p-2 rounded hover:bg-slate-700 transition-all duration-100 cursor-pointer"
                >
                  Navbar
                </li>
                <li
                  onClick={() => handleActive("Banner")}
                  className=" border-b-2 border-gray-500 p-2 rounded hover:bg-slate-700 transition-all duration-100 cursor-pointer"
                >
                  Banner
                </li>
                <li
                  onClick={() => handleActive("About")}
                  className=" border-b-2 border-gray-500 p-2 rounded hover:bg-slate-700 transition-all duration-100 cursor-pointer"
                >
                  About
                </li>
                <li
                  onClick={() => handleActive("Service")}
                  className=" border-b-2 border-gray-500 p-2 rounded hover:bg-slate-700 transition-all duration-100 cursor-pointer"
                >
                  Service
                </li>
                <li
                  onClick={() => handleActive("Resume")}
                  className=" border-b-2 border-gray-500 p-2 rounded hover:bg-slate-700 transition-all duration-100 cursor-pointer"
                >
                  Resume
                </li>
                <li
                  onClick={() => handleActive("Portfolio")}
                  className=" border-b-2 border-gray-500 p-2 rounded hover:bg-slate-700 transition-all duration-100 cursor-pointer"
                >
                  Portfolio
                </li>
                <li
                  onClick={() => handleActive("Testimonial")}
                  className=" border-b-2 border-gray-500 p-2 rounded hover:bg-slate-700 transition-all duration-100 cursor-pointer"
                >
                  Testimonial
                </li>
                <li
                  onClick={() => handleActive("Partner")}
                  className=" border-b-2 border-gray-500 p-2 rounded hover:bg-slate-700 transition-all duration-100 cursor-pointer"
                >
                  Partner
                </li>
                <li
                  onClick={() => handleActive("Blog")}
                  className=" border-b-2 border-gray-500 p-2 rounded hover:bg-slate-700 transition-all duration-100 cursor-pointer"
                >
                  Blog
                </li>
                <li
                  onClick={() => handleActive("Contact")}
                  className=" border-b-2 border-gray-500 p-2 rounded hover:bg-slate-700 transition-all duration-100 cursor-pointer"
                >
                  Contact
                </li>
                <li
                  onClick={() => handleActive("Footer")}
                  className=" border-b-2 border-gray-500 p-2 rounded hover:bg-slate-700 transition-all duration-100 cursor-pointer"
                >
                  Footer
                </li>
              </ul>
            </div>
          </div>
          <div>
            {activeMenu == "Navbar" && <Navbar />}
            {activeMenu == "Banner" && <Banner />}
            {activeMenu == "About" && <h1>About</h1>}
            {activeMenu == "Service" && <Services />}
            {activeMenu == "Resume" && <h1>Resume</h1>}
            {activeMenu == "Portfolio" && <h1>Portfolio</h1>}
            {activeMenu == "Testimonial" && <h1>Testimonial</h1>}
            {activeMenu == "Partner" && <h1>Partner</h1>}
            {activeMenu == "Blog" && <h1>Blog</h1>}
            {activeMenu == "Contact" && <h1>Contact</h1>}
            {activeMenu == "Footer" && <h1>Footer</h1>}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
