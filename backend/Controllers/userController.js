const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const UserModel = require("../Models/userModel");
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    return next(
      new Error("Please provide a name, email, and password to register")
    );
  }
  const userExists = await UserModel.findOne({
    email: email,
  });
  if (userExists) {
    res.status(400);
    return next(new Error("User already exists"));
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await UserModel.create({
    name: name,
    email: email,
    password: hashedPassword,
  });
  if (user) {
    res.status(201);
    return res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  }
  res.status(400);
  return next(new Error("Invalid user data"));
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    return res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  }
  res.status(401);
  throw new Error("Invalid email or password");
});
const getMe = asyncHandler(async (req, res, next) => {
  res.json({
    _id: req.user._id,
    name: req.user.name,
  });
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
