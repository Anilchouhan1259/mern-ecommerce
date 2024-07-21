const mongoose = require("mongoose");
const shippingDetail = mongoose.Schema({
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
  contactNumber: {
    type: Number,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  postalCode: {
    type: Number,
    required: true,
  },
});

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
  shippingAddress: [shippingDetail],
  tc: {
    type: Boolean,
    required: true,
  },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
