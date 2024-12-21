const mongoose = require("mongoose");
const { Schema } = mongoose;

const resumeSchema = new Schema({
  sectionTitle: String,
  title: String,
  subTitle: String,
  paragraph: String,
});

module.exports = mongoose.model("Resume", resumeSchema);
