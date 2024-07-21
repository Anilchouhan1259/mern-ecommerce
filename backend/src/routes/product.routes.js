const express = require("express");

const {
  postProduct,
  getProductsByCategory,
  getProductsById,
  getProduct,
} = require("../controllers/products.controllers");
const productRoutes = express.Router();

productRoutes.post("/", postProduct);
productRoutes.get("/getproducts", getProduct);
productRoutes.get("/:id", getProductsById);
productRoutes.get("/", getProductsByCategory);

module.exports = productRoutes;
