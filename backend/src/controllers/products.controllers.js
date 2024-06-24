const productModel = require("../models/product.model");

async function postProduct(req, res) {
  const { title, discription, price, category, thumbnail, sku } = req.body;
  console.log(req.body);

  if (title && discription && price && category && thumbnail && sku) {
    try {
      await productModel.updateOne(
        {
          title,
        },
        {
          title,
          discription,
          price,
          category,
          thumbnail,
          sku,
        },
        {
          upsert: true,
        }
      );
      console.log(thumbnail);
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        err: "error while inserting product",
      });
    }

    return res.status(201).json({
      message: "product added succesfully",
    });
  } else {
    res.status(400).json({
      error: "All fieds are required",
    });
  }
}
async function getProductsByCategory(req, res) {
  const category = req.query.category;

  if (req.query.sort_by) {
    const order = req.query.sort_by === "low_to_high" ? 1 : -1;
    const products = await productModel
      .find({ category })
      .sort({ price: order })
      .select("title price thumbnail");
    res.status(200).json(products);
  } else {
    const products = await productModel
      .find({ category })
      .select("title price thumbnail");
    res.status(200).json(products);
  }
}
async function getProductsById(req, res) {
  const id = req.params.id;
  const product = await productModel.findOne({ _id: id });
  res.status(200).json(product);
}
module.exports = {
  postProduct,
  getProductsByCategory,
  getProductsById,
};
