const express = require("express");

const {
  userRegistration,
  userLogin,
} = require("../controllers/users.controllers");

const usersRoutes = express.Router();

usersRoutes.post("/login", userLogin);
usersRoutes.post("/signup", userRegistration);

module.exports = usersRoutes;
