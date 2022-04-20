const express = require("express");
const { signupController } = require("../controllers/auth");

const {
  sigupValidator,
  validatorResult,
} = require("../middleware/signupValidator");
const router = express.Router();

router.post("/signup", sigupValidator, validatorResult, signupController);

module.exports = router;
