const mongoose = require("mongoose");
const { Schema } = mongoose;

const navbarSchema = new Schema({
  menuItem: String,
});

module.exports = mongoose.model("Navbar", navbarSchema);
