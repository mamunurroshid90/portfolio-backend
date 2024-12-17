import React, { useEffect, useState } from "react";
import axios from "axios";

const About = () => {
  const [subHeading, setSubheading] = useState("");
  const [heading, setHeading] = useState("");
  const [clientDesign, setClientDesign] = useState("");
  const [friendlyDesign, setFriendlyDesign] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [buttonShow, setButtonShow] = useState(false);
  // const [image, setImage] = useState({});
  const [id, setId] = useState("");

  const handleSubheading = (e) => {
    setSubheading(e.target.value);
  };

  const handleHeading = (e) => {
    setHeading(e.target.value);
  };

  const handleClientDesign = (e) => {
    setClientDesign(e.target.value);
  };

  const handleFriendlyDesign = (e) => {
    setFriendlyDesign(e.target.value);
  };

  const handleParagraph = (e) => {
    setParagraph(e.target.value);
  };

  const handleButtonText = (e) => {
    setButtonText(e.target.value);
  };

  const handleButtonShow = (e) => {
    setButtonShow(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      subHeading,
      heading,
      clientDesign,
      friendlyDesign,
      paragraph,
      buttonText,
      buttonShow
    );

    if (id) {
      axios
        .put("http://localhost:8000/about/" + id, {
          subHeading: subHeading,
          heading: heading,
          clientDesign: clientDesign,
          friendlyDesign: friendlyDesign,
          paragraph: paragraph,
          buttonText: buttonText,
          buttonShow: buttonShow,
          // image: image,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .post("http://localhost:8000/about", {
          subHeading: subHeading,
          heading: heading,
          clientDesign: clientDesign,
          friendlyDesign: friendlyDesign,
          paragraph: paragraph,
          buttonText: buttonText,
          buttonShow: buttonShow,
          // image: image,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    async function fetchData() {
      console.log("Mamun");
      let data = await axios.get("http://localhost:8000/about");
      console.log(data.data);
      setSubheading(data.data.subHeading);
      setHeading(data.data.heading);
      setClientDesign(data.data.clientDesign);
      setFriendlyDesign(data.data.friendlyDesign);
      setParagraph(data.data.paragraph);
      setButtonText(data.data.buttonText);
      setButtonShow(data.data.buttonShow);
      setId(data.data._id);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className=" flex justify-center items-center h-screen">
        <form className=" flex flex-col gap-4 bg-slate-700 p-6 rounded-md w-[600px]">
          <h2 className=" text-center text-2xl pb-4 border-b-4 border-double font-bold text-white">
            About Section
          </h2>
          <input
            // onChange={handleImage}
            type="file"
            className=" rounded-md text-white"
          />
          <img
            width={50}
            // src={`http://localhost:8000/${bannerImage}`}
            alt="banner"
          />
          <input
            onChange={handleSubheading}
            value={subHeading}
            type="text"
            className=" p-2 rounded-md"
            placeholder="Subheading"
          />
          <input
            onChange={handleHeading}
            value={heading}
            type="text"
            className=" p-2 rounded-md"
            placeholder="Heading"
          />
          <input
            onChange={handleClientDesign}
            value={clientDesign}
            type="text"
            placeholder=" client design"
            className=" p-2 rounded-md"
          />
          <input
            onChange={handleFriendlyDesign}
            value={friendlyDesign}
            type="text"
            placeholder=" friendly design"
            className=" p-2 rounded-md"
          />
          <textarea
            onChange={handleParagraph}
            value={paragraph}
            name=""
            id=""
            placeholder="Paragraph"
            rows={5}
            className=" rounded-md p-2"
          ></textarea>
          <input
            onChange={handleButtonText}
            value={buttonText}
            type="text"
            placeholder="Button Text"
            className=" p-2 rounded-md"
          />
          <div className=" flex items-center gap-1">
            <input
              onChange={handleButtonShow}
              type="checkbox"
              className=" w-4 h-4"
            />
            <label htmlFor="" className=" text-white">
              Button Show
            </label>
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className=" bg-slate-300 py-2 rounded-md text-black text-lg font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default About;