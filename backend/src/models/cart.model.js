const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: Number,
  },
  products: [
    {
      title: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      productId: {
        type: String,
        required: true,
      },
      skuId: {
        type: String,
        required: true,
      },
      thumbnail: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },

      color: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("cart", cartSchema);
