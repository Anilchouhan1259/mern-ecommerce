const express = require("express");
const {
  checkOutSession,
  getSessionData,
  webhookHandler,
} = require("../controllers/payment.controllers");
const { isAuthenticated } = require("../middlewares/isAuthenticated");
const paymentRoutes = express.Router();

paymentRoutes.post(
  "/create-checkout-session",
  isAuthenticated,
  checkOutSession
);
paymentRoutes.get("/checkout-session", getSessionData);
paymentRoutes.post(
  "/webhook",
  express.json({ type: "application/json" }),
  webhookHandler
);

module.exports = paymentRoutes;
