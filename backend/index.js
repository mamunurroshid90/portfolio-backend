const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Navbar = require("./model/navbarModel");

app.use(cors());
app.use(express.json());

const port = 8000;

mongoose
  .connect(
    "mongodb+srv://roshidmamun2024:dqjdzRXbEgWOnL68@cluster0.1kfb0.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected!"));

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

app.listen(port, () => {
  console.log("node js");
});
