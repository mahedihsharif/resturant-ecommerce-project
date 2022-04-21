const express = require("express");
const { signupController, signinController } = require("../controllers/auth");

const {
  sigupValidator,
  validatorResult,
  signinValidator,
} = require("../middleware/signupValidator");
const router = express.Router();

router.post("/signup", sigupValidator, validatorResult, signupController);

router.post("/signin", signinValidator, validatorResult, signinController);

module.exports = router;
