const express = require("express");

const {
  postProduct,
  getProductsByCategory,
  getProductsById,
} = require("../controllers/products.controllers");
const productRoutes = express.Router();

productRoutes.post("/", postProduct);
productRoutes.get("/:category", getProductsByCategory);
productRoutes.get("/product/:id", getProductsById);
module.exports = productRoutes;
