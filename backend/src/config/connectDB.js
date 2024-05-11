const mongoose = require("mongoose");

const connectDB = async (DATABASE_URL) => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("mongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
