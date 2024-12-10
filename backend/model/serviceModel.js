const mongoose = require("mongoose");
const { Schema } = mongoose;

const serviceSchema = new Schema({
  title: String,
  subTitle: String,
  image: String,
  isShowImage: Boolean,
});

module.exports = mongoose.model("Service", serviceSchema);
