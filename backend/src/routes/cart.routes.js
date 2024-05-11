const express = require("express");

const { isAuthenticated } = require("../middlewares/isAuthenticated");

const { addToCart, getCartData } = require("../controllers/carts.controllers");

const cartRoutes = express.Router();

cartRoutes.post("/", isAuthenticated, addToCart);
cartRoutes.get("/", isAuthenticated, getCartData);
module.exports = cartRoutes;
