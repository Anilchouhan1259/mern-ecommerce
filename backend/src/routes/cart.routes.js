const express = require("express");

const { isAuthenticated } = require("../middlewares/isAuthenticated");

const {
  addToCart,
  getCartData,
  changeQuantity,
} = require("../controllers/carts.controllers");

const cartRoutes = express.Router();

cartRoutes.post("/", isAuthenticated, addToCart);
cartRoutes.get("/", isAuthenticated, getCartData);
cartRoutes.post("/updateQuantity", isAuthenticated, changeQuantity);
module.exports = cartRoutes;
