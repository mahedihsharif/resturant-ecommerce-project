const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwtSecret, jwtExpire } = require("../config/keys.js");

//signup controller
exports.signupController = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      res.status(400).json({
        errorMessage: "Email already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await new User({
      username: username,
      email: email,
      password: hashedPassword,
    }).save();
    res.status(200).json({
      successMessage: "Registration Successfull, Please Login.",
    });
  } catch (err) {
    res.status(500).json({
      errorMessage: "Server Failed, Please try again.",
    });
  }
};

//signin controller
exports.signinController = async (req, res) => {
  const { email } = req.body;

  try {
    const currentUser = await User.findOne({ email });
    if (!currentUser) {
      return res.status(400).json({
        errorMessage: "Incorrect Email.",
      });
    }

    const currentPassword = await bcrypt.compare(
      req.body.password,
      currentUser.password
    );
    if (!currentPassword) {
      return res.status(400).json({
        errorMessage: "Incorrect password.",
      });
    }

    const payload = {
      user: {
        _id: currentUser._id,
      },
    };

    jwt.sign(payload, jwtSecret, { expiresIn: jwtExpire }, (err, token) => {
      if (err) {
        console.log("jwt token error", err);
      }
      const { password, ...others } = currentUser._doc;
      res.status(200).json({
        token,
        user: { ...others },
      });
    });
  } catch (err) {
    res.status(500).json({
      errorMessage: "Server Error.",
    });
  }
};
