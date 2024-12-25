import React, { useEffect, useState } from "react";
import axios from "axios";

const About = () => {
  const [aboutInfo, setAboutInfo] = useState({});
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
  const [aboutImg, setAboutImg] = useState({});
  const [compProjectImg, setCompProjImg] = useState("");
  const [experienceImg, setExperienceImg] = useState("");
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

  const handleProjectText = (e) => {
    setProjectText(e.target.value);
  };
  const handleProjectTotal = (e) => {
    setProjectCount(e.target.value);
  };
  const yearExperienceText = (e) => {
    setExperienceYearText(e.target.value);
  };
  const yearExperienceTotal = (e) => {
    setExperienceYearCount(e.target.value);
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
      buttonShow,
      aboutImg,
      id
    );

    let data = new FormData();
    console.log(data);
    data.append("subHeading", subHeading);
    data.append("heading", heading);
    data.append("clientDesign", clientDesign);
    data.append("friendlyDesign", friendlyDesign);
    data.append("paragraph", paragraph);
    data.append("buttonText", buttonText);
    data.append("buttonShow", buttonShow);
    data.append("projectText", projectText);
    data.append("projectCount", projectCount);
    data.append("experienceYearText", experienceYearText);
    data.append("experienceYearCount", experienceYearCount);
    data.append("about", aboutImg);
    data.append("completeImg", compProjectImg);
    data.append("experienceImg", experienceImg);
    console.log(data.getAll("subHeading"));

    if (id) {
      axios
        .put("http://localhost:8000/about/" + id, data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .post("http://localhost:8000/about", data)
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
      console.log(data);
      setAboutInfo(data.data);
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
      setId(data.data._id);
    }
    fetchData();
  }, []);

  const handleImage = (e) => {
    setAboutImg(e.target.files[0]);
  };

  const handleCompProjectImg = (e) => {
    setCompProjImg(e.target.files[0]);
  };

  const handleExperienceYear = (e) => {
    setExperienceImg(e.target.files[0]);
  };

  return (
    <>
      <div className=" flex justify-center items-center">
        <form className=" flex flex-col gap-4 bg-slate-700 p-6 rounded-md w-[600px]">
          <h2 className=" text-center text-2xl pb-4 border-b-4 border-double font-bold text-white">
            About Section
          </h2>
          <img
            width={50}
            src={`http://localhost:8000/${aboutInfo.aboutImg}`}
            alt="about"
          />
          <img
            width={50}
            src={`http://localhost:8000/${aboutInfo.completeImg}`}
            alt="completeProject"
          />
          <img
            width={50}
            src={`http://localhost:8000/${aboutInfo.experienceImg}`}
            alt="experienceYear"
          />
          <input
            onChange={handleImage}
            type="file"
            className=" rounded-md text-white"
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
            onChange={handleCompProjectImg}
            type="file"
            name="completeProject"
            id=""
          />
          <input
            onChange={handleProjectText}
            value={projectText}
            type="text"
            placeholder="complete project text"
            className=" p-2 rounded-md"
          />
          <input
            value={projectCount}
            onChange={handleProjectTotal}
            type="text"
            placeholder="complete project total"
            className=" p-2 rounded-md"
          />
          <input
            onChange={handleExperienceYear}
            type="file"
            name="completeProject"
            id=""
          />
          <input
            onChange={yearExperienceText}
            value={experienceYearText}
            type="text"
            placeholder="year of experience text"
            className=" p-2 rounded-md"
          />
          <input
            onChange={yearExperienceTotal}
            value={experienceYearCount}
            type="text"
            placeholder="year of experience total"
            className=" p-2 rounded-md"
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
