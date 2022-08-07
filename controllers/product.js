const Product = require("../models/Product");
const { jwtSecret } = require("../config/keys");
const jwt = require("jsonwebtoken");

//create new product...
exports.create = async (req, res) => {
  const token = req.token;
  const { filename } = req.file;
  console.log(req.body);

  const {
    productName,
    productDesc,
    productPrice,
    productCategory,
    productQuantity,
  } = req.body;

  try {
    // let product = new Product();
    // product.fileName = filename;
    // product.productName = productName;
    // product.productDesc = productDesc;
    // product.productPrice = productPrice;
    // product.productCategory = productCategory;
    // product.productQuantity = productQuantity;

    const product = new Product(filename, req.body);

    const saveProduct = await product.save();

    res.status(200).json({
      successMessage: "Product Created Successfully!",
      saveProduct,
    });
  } catch (err) {
    res.status(401).json({
      errorMessage: "Something went to wrong! try again later!",
    });
  }
};

// jwt.verify(token, jwtSecret, (err, authData) => {
//   if (err) {
//     return res.status(500).json({
//       errorMessage: "Invalid Token!",
//     });
//   }
