const orderModel = require("../models/order.model");

async function postOrder(req, res) {
  const { userId, items } = req.body;

  const products = JSON.parse(items);
  console.log(typeof products);
  if ((userId, products)) {
    try {
      const order = orderModel({
        userId,
        products,
      });
      await order.save();
      return res.status(201).json({
        message: "Your order is successfull",
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        message: "something unexpected happened",
      });
    }
  } else {
    return res.status(400).json({
      message: "All fields are required",
    });
  }
}

module.exports = {
  postOrder,
};
