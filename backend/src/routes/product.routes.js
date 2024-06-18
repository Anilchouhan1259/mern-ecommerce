const express = require("express");

const {
  postProduct,
  getProductsByCategory,
  getProductsById,
} = require("../controllers/products.controllers");
const productRoutes = express.Router();

productRoutes.post("/", postProduct);
productRoutes.get("/:id", getProductsById);
productRoutes.get("/", getProductsByCategory);

module.exports = productRoutes;
