const mongoose = require("mongoose");

const orderItemSchema = mongoose.Schema({
  productId: {
    type: String,
    required: true,
  },
  skuId: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
});
const orderSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  products: [orderItemSchema],
});

module.exports = mongoose.model("order", orderSchema);
