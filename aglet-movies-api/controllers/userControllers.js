const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id, username) => {
  return jwt.sign({ _id, username }, process.env.SECRET, { expiresIn: "3d" });
};

// login a user
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // create token for front end and auth
    const token = createToken(user._id, user.username);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup a user
exports.signupUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.signup(username, email, password);

    // create a token for the signed up user
    const token = createToken(user._id, user.username);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
