const express = require("express");

const {
  getAllProducts,
  // createProduct,
  // updateProduct,
  // deleteProduct,
  // getProductDetails,
  // createProductReview,
  // getProductReviews,
  // deleteReview,
  // getAdminProducts,
} = require("../controllers/productController");

const router = express.Router();
router.route("/products").get(getAllProducts);

module.exports = router;
