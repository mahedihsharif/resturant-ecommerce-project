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
        errorMsg: "Email already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await new User({
      username: username,
      email: email,
      password: hashedPassword,
    }).save();
    res.status(200).json({
      successMsg: "Registration Successfull, Please Login.",
    });
  } catch (err) {
    res.status(500).json({
      errorMsg: "Server Failed, Please try again.",
    });
  }
};

//signin controller
exports.signinController = async (req, res) => {
  const { email } = req.body;

  try {
    const currentUser = await User.findOne({ email });

    !currentUser &&
      res.status(400).json({
        errorMsg: "Invalid Email.",
      });
    const currentPassword = await bcrypt.compare(
      req.body.password,
      currentUser.password
    );
    !currentPassword &&
      res.status(400).json({
        errorMsg: "Incorrect password.",
      });

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
      errorMsg: "Server Error.",
    });
  }
};
