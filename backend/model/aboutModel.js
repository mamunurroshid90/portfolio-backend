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
  projectText: String,
  projectCount: String,
  experienceYearText: String,
  experienceYearCount: String,
  aboutImg: String,
  completeImg: String,
  experienceImg: String,
});

module.exports = mongoose.model("About", aboutSchema);
