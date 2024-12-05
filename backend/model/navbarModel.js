const mongoose = require("mongoose");
const { Schema } = mongoose;

const navbarSchema = new Schema({
  menuItem: String,
  buttonText: String,
  buttonShow: Boolean,
  image: String,
});

module.exports = mongoose.model("Navbar", navbarSchema);
