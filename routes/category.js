const { categoryController } = require("../controllers/category");

const express = require("express");
const router = express.Router();

router.post("/", categoryController);

module.exports = router;
