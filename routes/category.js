const categoryController = require("../controllers/category");

const express = require("express");
const { authenticatateJWT } = require("../middleware/authenticator");
const router = express.Router();

router.post("/", authenticatateJWT, categoryController.create);
router.get("/", categoryController.readAll);

module.exports = router;
