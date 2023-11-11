import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

// @desc Get all product
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}); //this will provide all the products from model.
  // throw new Error("Product not founds");
  res.json(products);
});

// @desc Get single product
// @route GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // const product = products.find((p) => p._id === id);
  const product = await Product.findById(id);
  if (product) {
    return res.json(product);
  } else {
    //   res.status(404).json({ message: "Product Not found" });
    res.status(404);
    throw new Error("Product/Resource not found");
  }
});

export { getProducts, getProductById };
