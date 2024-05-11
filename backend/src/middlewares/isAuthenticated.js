const jwt = require("jsonwebtoken");
const userModel = require("../models/users.model");
const isAuthenticated = async (req, res, next) => {
  const cookies = req.headers.cookie;
  console.log(cookies);
  const token = cookies.split("=")[1];

  if (token) {
    jwt.verify(String(token), process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) {
        console.log(err);
        return res.status(400).json({ message: "invalid token" });
      } else {
        req.body.userId = user.userId;
        next();
      }
    });
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token found");
  }
};
module.exports = { isAuthenticated };
