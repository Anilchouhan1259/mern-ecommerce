const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    discription: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      default: 5.0,
    },
    category: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },

    sku: [
      {
        quantity: {
          type: Number,
          require: true,
        },
        color: {
          type: String,
          required: true,
        },
        images: [String],
      },
    ],
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("product", productsSchema);
