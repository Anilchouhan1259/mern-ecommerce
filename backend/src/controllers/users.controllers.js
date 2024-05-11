const bcrypt = require("bcrypt");
const userModel = require("../models/users.model");
const jwt = require("jsonwebtoken");

async function userRegistration(req, res) {
  const { name, email, password, confirmPassword, tc } = req.body;
  const user = await userModel.findOne({ email });
  if (user) {
    return res.status(400).json({
      message: "This Email is already in use",
    });
  } else {
    if (name && email && password && confirmPassword && tc) {
      if (password === confirmPassword) {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const user = new userModel({
          name: name,
          email: email,
          password: hashPassword,
          tc: tc,
        });
        try {
          await user.save();
          return res.status(201).json({
            message: "Registration is succesfull",
          });
        } catch {
          return (
            res.status(400),
            json({
              message: "Something unexpected happened",
            })
          );
        }
      } else {
        return res.status(400).json({
          message: "Password and confirm Password doesn't match",
        });
      }
    } else {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
  }
}

async function userLogin(req, res) {
  const { email, password } = req.body;
  if (email && password) {
    try {
      const user = await userModel.findOne({ email });
      if (user) {
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
          const token = jwt.sign(
            { userId: user.id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "1h" }
          );
          return res
            .status(200)
            .cookie("token", token, {
              path: "/",
              httpOnly: true,
            })
            .json({ message: "Login successful", token: token });
        } else {
          res.status(400).json({
            message: "Email or password is invalid",
          });
        }
      } else {
        return res.status(401).json({
          message: "User doesn't exists",
        });
      }
    } catch {
      return res.status(400).json({
        message: "Something Unexpected happened",
      });
    }
  } else {
    return res.status(400).json({
      message: "Please enter both email and Password",
    });
  }
}

module.exports = {
  userRegistration,
  userLogin,
};
