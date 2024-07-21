const mongoose = require("mongoose");
const addressSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
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
    type: String,
    required: true,
  },
});
const orderItemSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  sku: {
    skuId: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    images: {
      type: String,
      required: true,
    },
  },
  quantity: {
    type: Number,
    required: true,
  },
});
const orderSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "order Pending",
  },
  products: [orderItemSchema],
  shippingAddress: addressSchema,
});

module.exports = mongoose.model("order", orderSchema);
