import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

import products from "./data/products.js";

const port = process.env.PORT || 5000;

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((p) => p._id === id);
  res.json(product);
});

app.listen(port, () => console.log(`server is running on port ${port}`));
