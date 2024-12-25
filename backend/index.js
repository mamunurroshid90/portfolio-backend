const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Navbar = require("./model/navbarModel");
const Banner = require("./model/BannerModel");
const Service = require("./model/serviceModel");
const About = require("./model/aboutModel");
const Resume = require("./model/resumeModel");
const nodemailer = require("nodemailer");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    console.log(file);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("./uploads"));

mongoose
  .connect(
    "mongodb+srv://roshidmamun2024:dqjdzRXbEgWOnL68@cluster0.1kfb0.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected!"));

// Navbar routes start here
app.post("/navbar", upload.single("image"), function (req, res) {
  console.log(req.file, "navbar");
  let data = new Navbar({ ...req.body, image: req.file.path });
  data.save();
  res.send({ message: "Navbar Created" });
});

app.get("/navItem", async function (req, res) {
  let data = await Navbar.findOne({});
  res.send(data);
});

app.put("/navbar/:id", upload.single("image"), function (req, res) {
  console.log(req.params.id);
  console.log(req.body);
  Navbar.findByIdAndUpdate(req.params.id, {
    ...req.body,
    image: req.file.path,
  }).then(() => {
    res.send({ message: "Navbar Updated" });
  });
});

// Navbar routes end here

// ==================================

// Banner routes start here
app.post("/banner", upload.single("image"), function (req, res) {
  console.log(req.file, "banner");
  let data = new Banner({ ...req.body, image: req.file.path });
  data.save();
  res.send({ message: "banner Created" });
});

app.get("/banner", async function (req, res) {
  let data = await Banner.findOne({});
  res.send(data);
});

app.put("/banner/:id", upload.single("image"), function (req, res) {
  console.log(req.params.id);
  console.log(req.body);
  Banner.findByIdAndUpdate(req.params.id, {
    ...req.body,
    image: req.file.path,
  }).then(() => {
    res.send({ message: "Banner Updated try to change" });
  });
});
// Banner routes end here

// About routes starts here
const cpUpload = upload.fields([
  { name: "about", maxCount: 1 },
  { name: "completeImg", maxCount: 1 },
  { name: "experienceImg", maxCount: 1 },
]);

app.post("/about", cpUpload, function (req, res) {
  console.log(req.file, "about");
  let data = new About({ ...req.body, image: req.file.path });
  data.save();
  res.send({ message: "About Data sent" });
});

app.get("/about", async function (req, res) {
  let data = await About.findOne({});
  res.send(data);
});

app.put("/about/:id", cpUpload, function (req, res) {
  console.log("Files:", req.files);
  About.findByIdAndUpdate(req.params.id, {
    ...req.body,
    aboutImg: req.files.about?.[0].path,
    completeImg: req.files.completeImg?.[0].path,
    experienceImg: req.files.experienceImg?.[0].path,
  }).then(() => {
    res.send({ message: "About Updated" });
  });
});
// About routes ends here

// service routes start here
app.post("/service", async function (req, res) {
  console.log(req.body);
  let data = new Service(req.body);
  data.save();
  res.send({ message: "Service Created" });
});

app.get("/service", async function (req, res) {
  let data = await Service.find({});
  res.send(data);
});

app.delete("/service/:id", async function (req, res) {
  let data = await Service.findByIdAndDelete(req.params.id);
  res.send({ message: "Service Deleted" });
});

app.put("/service/:id", function (req, res) {
  console.log(req.params.id);
  console.log(req.body);
  Service.findByIdAndUpdate(req.params.id, req.body).then(() => {
    res.send({ message: "Service Updated" });
  });
});
// service routes end here

// Resume routes starts here
app.post("/resume", function (req, res) {
  console.log(req.body);
  let data = new Resume(req.body);
  data.save();
  res.send({ message: "Resume Update" });
});

app.get("/resume", async function (req, res) {
  let data = await Resume.find({});
  res.send(data);
});

app.delete("/resume/:id", async function (req, res) {
  let data = await Resume.findByIdAndDelete(req.params.id);
  res.send({ message: "Resume Deleted" });
});

app.put("/resume/:id", function (req, res) {
  Resume.findByIdAndUpdate(req.params.id, req.body).then(() => {
    res.send({ message: "Resume Updated" });
  });
});
// Resume routes ends here

// contact form start here
app.post("/email", async function (req, res) {
  console.log(req.body);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false, // true for port 465, false for other ports
    auth: {
      user: "nijummamun7@gmail.com",
      pass: "samj ritm fkix daou",
    },
  });

  const info = await transporter.sendMail({
    from: "nijummamun@gmail.com", // sender address
    to: "roshidmamun2024@gmail.com", // list of receivers
    subject: req.body.subject, // Subject line

    html: `<b>Name:</b> ${req.body.name} <br/>
    <b>Email:</b> ${req.body.email} <br/>
    <b>Message:</b> ${req.body.message}
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.send({ message: "Email sent" });
});
// contact form end here

app.listen(8000);
