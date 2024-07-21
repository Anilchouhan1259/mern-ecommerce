const bcrypt = require("bcrypt");
const userModel = require("../models/users.model");
const jwt = require("jsonwebtoken");

async function userRegistration(req, res) {
  const { firstName, lastName, email, password, confirmPassword, tc } =
    req.body;
  const user = await userModel.findOne({ email });
  if (user) {
    return res.status(400).json({
      message: "This Email is already in use",
    });
  } else {
    if (firstName && lastName && email && password && confirmPassword && tc) {
      const displayName = firstName + " " + lastName;

      if (password === confirmPassword) {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const user = new userModel({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: hashPassword,
          displayName: displayName,
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
            { expiresIn: "1d" }
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

function userLogout(req, res) {
  res.clearCookie("token", { path: "/", domain: "localhost" });

  return res.send({ message: "Logged out and cookie deleted" });
}

async function getInfo(req, res) {
  const { userId } = req.body;
  const info = await userModel.findOne({ _id: userId }).select("-password");
  return res.status(200).json(info);
}
async function postUserInfo(req, res) {
  const { userId, firstName, lastName, email, displayName, phoneNumber } =
    req.body;
  const newFields = { firstName, lastName, displayName, email, phoneNumber };
  const updatedValue = await userModel.findOneAndUpdate(
    { _id: userId },
    { $set: newFields },
    { new: true }
  );
  return res.status(201).json(updatedValue);
}
async function postShippingAddress(req, res) {
  const {
    userId,
    firstName,
    lastName,
    email,
    contactNumber,
    street,
    state,
    postalCode,
  } = req.body;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !contactNumber ||
    !street ||
    !state ||
    !postalCode
  ) {
    return res.status(400).json({
      message: "all field is required required fields",
    });
  } else {
    const newShippingAddress = {
      firstName,
      lastName,
      email,
      contactNumber,
      street,
      state,
      postalCode,
    };

    try {
      const result = await userModel.updateOne(
        { _id: userId },
        { $push: { shippingAddress: newShippingAddress } }
      );
      res.status(201).json({ message: "Shipping address added successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
async function getShippingAddress(req, res) {
  const { userId } = req.body;
  try {
    const shippingAddress = await userModel
      .findOne({ _id: userId })
      .select("shippingAddress");
    return res.status(200).json(shippingAddress);
  } catch (err) {
    return res.status(500).json({ message: "internal Server error" });
  }
}
module.exports = {
  userRegistration,
  userLogin,
  userLogout,
  getInfo,
  postUserInfo,
  postShippingAddress,
  getShippingAddress,
};
