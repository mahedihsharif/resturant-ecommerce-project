const { check, validationResult } = require("express-validator");

//signup validation bakcend
exports.sigupValidator = [
  check("username").not().isEmpty().trim().withMessage("All fields required"),
  check("email").isEmail().normalizeEmail().withMessage("Invalid email"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be 6 characters length"),
];

//signin validation bakcend
exports.signinValidator = [
  check("email").isEmail().normalizeEmail().withMessage("Invalid email"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be 6 characters length"),
];

//validation result..
exports.validatorResult = (req, res, next) => {
  const result = validationResult(req);
  const hasErrors = !result.isEmpty();
  if (hasErrors) {
    const firstError = result.array()[0].msg;

    return res.status(400).json({
      errorMessage: firstError,
    });
  }
  next();
};
