const Product = require("../models/product");
 const getAllProducts = async (req, res) => {
try {
  const products = await Product.find();
  res.status(200).json({
    success: true,
    products,
  });
} catch (error) {
  console.error("Get All Products Error:", error);
  res.status(500).json({
    success: false,
    message: "Failed to fetch products",
    error: error.message,
  });
}
}
module.exports={getAllProducts};