const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.post("/navbar", function (req, res) {
  //   res.send("Hello World");
  console.log("navbar");
});

app.listen(8000);
