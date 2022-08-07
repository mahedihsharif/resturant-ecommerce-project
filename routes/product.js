const express = require("express");
const { authenticatateJWT } = require("../middleware/authenticator");
const productController = require("../controllers/product");
const upload = require("../middleware/multer");

const router = express.Router();

//create a new product...

router.post(
  "/createProduct",
  authenticatateJWT,
  upload.single("productImage"),
  productController.create
);

module.exports = router;
