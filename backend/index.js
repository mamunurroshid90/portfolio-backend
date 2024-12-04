const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://roshidmamun2024:<dqjdzRXbEgWOnL68>@cluster0.1kfb0.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected!"));

app.post("/navbar", function (req, res) {
  //   res.send("Hello World");
  console.log(req.body);
});

app.listen(8000);
