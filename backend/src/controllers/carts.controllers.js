const cartModel = require("../models/cart.model");

async function addToCart(req, res) {
  const { userId, skuId, quantity, productId, thumbnail, title, color, price } =
    req.body;
  if (
    userId &&
    skuId &&
    quantity &&
    productId &&
    thumbnail &&
    title &&
    color &&
    price
  ) {
    try {
      const isExistingProduct = await cartModel.findOne({
        userId,
        products: { $elemMatch: { skuId } },
      });
      if (isExistingProduct) {
        res.status(409).json({ message: "product already exist in cart" });
      } else {
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
      }
    } catch {
      return res.status(500).json({ message: "something unexpected happened" });
    }
  } else {
    return res.status(400).json({
      message: "All field is required",
    });
  }
}
async function getCartData(req, res) {
  const userId = req.body.userId;
  console.log(userId);
  if (userId) {
    try {
      const cartData = await cartModel
        .findOne({ userId })
        .select("_id products");

      if (cartData) {
        const total = cartData.products.reduce(
          (acc, item) => {
            totalItem = acc.totalItem + item.quantity;
            totalAmount = acc.totalAmount + item.quantity * item.price;
            return { totalItem, totalAmount };
          },
          { totalItem: 0, totalAmount: 0 }
        );
        const cartDataObject = cartData.toObject();
        cartDataObject.totalItem = total.totalItem;
        cartDataObject.totalAmount = total.totalAmount;
        console.log(cartDataObject);
        return res.status(200).json(cartDataObject);
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
async function changeQuantity(req, res) {
  const { userId, skuId, quantity } = req.body;
  console.log(skuId, quantity);
  try {
    // Find the cart by userId
    const cart = await cartModel.findOne({ userId });

    if (!cart) {
      return res.json({ message: "No cart is found" });
    }

    const product = cart.products.find((product) => product.skuId === skuId);

    if (product) {
      // Update the quantity
      product.quantity = quantity;

      // Save the updated cart
      const updatedCart = await cart.save();
      console.log("Product quantity updated successfully");
      return res.status(201).json(updatedCart);
    } else {
      console.log("Product not found in the cart");
    }
  } catch (error) {
    console.error("Error updating product quantity:", error);
  }
}
module.exports = {
  addToCart,
  getCartData,
  changeQuantity,
};
