const express = require("express");

const { isAuthenticated } = require("../middlewares/isAuthenticated");
const { postOrder } = require("../controllers/orders.controllers");

const orderRoutes = express.Router();

orderRoutes.post("/", isAuthenticated, postOrder);

module.exports = orderRoutes;
