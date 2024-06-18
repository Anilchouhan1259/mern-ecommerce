const express = require("express");

const { isAuthenticated } = require("../middlewares/isAuthenticated");
const { postOrder, getOrder } = require("../controllers/orders.controllers");

const orderRoutes = express.Router();

orderRoutes.post("/", isAuthenticated, postOrder);
orderRoutes.get("/", isAuthenticated, getOrder);

module.exports = orderRoutes;
