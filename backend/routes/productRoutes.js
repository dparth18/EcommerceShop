import express from "express";
const router = express.Router();
// import products from "../data/products.js";
// import asyncHandler from "../middleware/asyncHandler.js";
// import Product from "../models/productModel.js";
import {
  getProducts,
  getProductById,
} from "../controllers/productControllers.js";

// // Get All products
// router.get("/", (req, res) => {
//   res.json(products);
// });

// // Get Single product
// router.get("/:id", (req, res) => {
//   const { id } = req.params;
//   const product = products.find((p) => p._id === id);
//   res.json(product);
// });

//---------------------------------------------------------------------------------------------------

// // Get All products
// router.get(
//   "/",
//   asyncHandler(async (req, res) => {
//     const products = await Product.find({}); //this will provide all the products from model.
//     // throw new Error("Product not founds");
//     res.json(products);
//   })
// );

// // Get Single product
// router.get(
//   "/:id",
//   asyncHandler(async (req, res) => {
//     const { id } = req.params;
//     // const product = products.find((p) => p._id === id);
//     const product = await Product.findById(id);
//     if (product) {
//       return res.json(product);
//     } else {
//       //   res.status(404).json({ message: "Product Not found" });
//       res.status(404);
//       throw new Error("Product/Resource not found");
//     }
//   })
// );

//-----------------------------------------------------------------------------------------------------------------

router.route("/").get(getProducts);
router.route("/:id").get(getProductById);

export default router;
