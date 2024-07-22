const jwt = require("jsonwebtoken");
const isAuthenticated = async (req, res, next) => {
  const token = req.cookies["token"];
  if (token) {
    jwt.verify(String(token), process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(400).json({ message: "invalid token" });
      } else {
        req.body.userId = user.userId;
        next();
      }
    });
  }
  if (!token) {
    return res.status(401).json({ message: "please login first" });
  }
};
module.exports = { isAuthenticated };
