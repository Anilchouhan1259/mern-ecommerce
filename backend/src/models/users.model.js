const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    default: null,
  },
  tc: {
    type: Boolean,
    required: true,
  },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
