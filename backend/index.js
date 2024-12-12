const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Navbar = require("./model/navbarModel");
const Banner = require("./model/BannerModel");
const Service = require("./model/serviceModel");

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
app.post("/navbar", function (req, res) {
  console.log(req.body);
  let data = new Navbar(req.body);
  data.save();
  res.send({ message: "Navbar Created" });
});

app.get("/navItem", async function (req, res) {
  let data = await Navbar.findOne({});
  res.send(data);
});

app.put("/navbar/:id", function (req, res) {
  console.log(req.params.id);
  console.log(req.body);
  Navbar.findByIdAndUpdate(req.params.id, req.body).then(() => {
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

app.listen(8000);
