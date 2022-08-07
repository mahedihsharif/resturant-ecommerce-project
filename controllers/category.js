const { jwtSecret } = require("../config/keys");
const jwt = require("jsonwebtoken");
const Category = require("../models/Category");

//create new category

exports.create = async (req, res) => {
  const token = req.token;

  const { category } = req.body;

  const categoryExist = await Category.findOne({ category });
  if (categoryExist) {
    return res.status(500).json({
      errorMessage: `${category} Already Exist!`,
    });
  }
  try {
    jwt.verify(token, jwtSecret, (err, authData) => {
      if (err) {
        return res.status(401).json({
          errorMessage: "Invalid Token!",
        });
      } else {
        let newCategory = new Category();
        newCategory.category = category;
        newCategory = newCategory.save();
        if (newCategory) {
          setTimeout(() => {
            return res.status(200).json({
              successMessage: `${category} was created successfully!`,
              userData: authData,
            });
          }, 1000);
        }
      }
    });
  } catch (err) {
    res.status(401).json({
      errorMessage: "Something went to wrong! try again Later!",
    });
  }
};

//get all category

exports.readAll = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).json({
      categories,
    });
  } catch (err) {
    console.log("category read error", err);
    return res.status(500).json({
      errorMessage: "Please try again Later!",
    });
  }
};
