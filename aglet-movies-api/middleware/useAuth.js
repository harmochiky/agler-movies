const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.useMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);

    const doc = await User.findOne({ _id });

    req.user = {
      _id: doc._id,
      email: doc.email,
      username: doc.username,
    };
    console.log(req.user);
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request is not authorized" });
  }
};
