const cartModel = require("../models/cart.model");

async function addToCart(req, res) {
  const { userId, skuId, quantity, productId, thumbnail, title, color, price } =
    req.body;
  if (
    (userId && skuId && quantity, productId, thumbnail, title, color, price)
  ) {
    await cartModel.updateOne(
      { userId },
      {
        $push: {
          products: {
            userId,
            skuId,
            productId,
            quantity,
            thumbnail,
            title,
            color,
            price,
          },
        },
      },
      {
        upsert: true,
      }
    );
    return res.status(200).json({ message: "successfully added" });
  } else {
    return res.status(400).json({
      message: "All field is required",
    });
  }
}
async function getCartData(req, res) {
  const userId = req.body.userId;
  console.log("getting requests");
  if (userId) {
    try {
      const cartData = await cartModel
        .findOne({ userId })
        .select("_id products");
      if (cartData) {
        return res.status(200).json(cartData);
      } else {
        return res.status(200).json({
          message: "cart is empty",
        });
      }
    } catch {
      return res.status(404).json({
        message: "something bad happened while fatching data",
      });
    }
  } else {
    return res.status(401).json({
      message: "Please Login to see cart detail",
    });
  }
}
module.exports = {
  addToCart,
  getCartData,
};
