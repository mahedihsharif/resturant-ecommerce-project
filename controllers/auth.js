const User = require("../models/User");
const bcrypt = require("bcryptjs");

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
    res.status(200).json(newUser);
  } catch (err) {
    res.status(400).json("signupController error", err);
  }
};
