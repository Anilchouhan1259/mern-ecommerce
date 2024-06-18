const mongoose = require("mongoose");
const orderModel = require("../models/order.model");
const productModel = require("../models/product.model");

async function postOrder(req, res) {
  const { userId, items } = req.body;

  const products = JSON.parse(items);
  console.log(products);
  const productsSkuId = products.map((obj) => obj.skuId);
  const objectIds = productsSkuId.map((id) => new mongoose.Types.ObjectId(id));
  console.log(objectIds);
  const productsWithoutQuantity = await productModel.aggregate([
    {
      $match: { "sku._id": { $in: objectIds } },
    },
    {
      $project: {
        thumbnail: 1,
        title: 1,
        sku: {
          $filter: {
            input: "$sku",
            as: "item",
            cond: { $in: ["$$item._id", objectIds] },
          },
        },
      },
    },
    {
      $project: {
        thumbnail: 1,
        title: 1,
        sku: {
          $map: {
            input: "$sku",
            as: "item",
            in: {
              _id: "$$item._id",
              color: "$$item.color",
              images: { $slice: ["$$item.images", 1] },
            },
          },
        },
      },
    },
    {
      $unwind: {
        path: "$sku",
      },
    },
    {
      $unwind: {
        path: "$sku.images",
      },
    },
  ]);
  const order = productsWithoutQuantity.map((product) => {
    const { _id, sku, ...rest } = product;
    const productId = _id;

    // Extract and rename the skuId within the sku object
    const { _id: skuId, ...skuRest } = sku;

    const obj2 = products.find((obj) => obj.skuId == product.sku._id);
    return obj2
      ? {
          productId,
          sku: { skuId, ...skuRest },
          quantity: obj2.quantity,
          ...rest,
        }
      : product;
  });
  console.log(order);
  await orderModel.create({ userId, products: order });

  return res.status(400).json({ order });
}
async function getOrder(req, res) {
  const { userId } = req.body;
  const orders = await orderModel.find({ userId }).select("-userId");
  if (orders) {
    return res.status(200).json(orders);
  }
  return res.status(400).json({ message: "No Order found" });
}

module.exports = {
  postOrder,
  getOrder,
};
