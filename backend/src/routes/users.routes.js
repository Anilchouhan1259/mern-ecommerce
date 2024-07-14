const express = require("express");

const {
  userRegistration,
  userLogin,
  userLogout,
  getInfo,
  postUserInfo,
  postShippingAddress,
  getShippingAddress,
} = require("../controllers/users.controllers");
const { isAuthenticated } = require("../middlewares/isAuthenticated");

const usersRoutes = express.Router();

usersRoutes.post("/login", userLogin);
usersRoutes.post("/signup", userRegistration);
usersRoutes.post("/logout", userLogout);
usersRoutes.get("/userInfo", isAuthenticated, getInfo);
usersRoutes.post("/userInfo", isAuthenticated, postUserInfo);
usersRoutes.post("/postAddress", postShippingAddress);
usersRoutes.get("/getAddress", isAuthenticated, getShippingAddress);

module.exports = usersRoutes;
