const mongoose = require("mongoose");
const { Schema } = mongoose;

const aboutSchema = new Schema({
  subHeading: String,
  heading: String,
  clientDesign: String,
  friendlyDesign: String,
  paragraph: String,
  buttonText: String,
  buttonShow: Boolean,
  image: String,
});

module.exports = mongoose.model("About", aboutSchema);
