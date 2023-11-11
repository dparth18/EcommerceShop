import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
// import products from "./data/products.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";

const port = process.env.PORT || 5000;
connectDB(); //connect to MongoDB

app.get("/", (req, res) => {
  res.send("API is running");
});

// // Get All products
// app.get("/api/products", (req, res) => {
//   res.json(products);
// });

// // Get Single product
// app.get("/api/products/:id", (req, res) => {
//   const { id } = req.params;
//   const product = products.find((p) => p._id === id);
//   res.json(product);
// });

app.use("/api/products", productRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`server is running on port ${port}`));
