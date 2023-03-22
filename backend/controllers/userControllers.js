const User = require("../models/userModel");
const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const secretKey = "your-secret-key";
const registerUser = async (req, res) => {
  const { name, email, password, pic } = req.body;
  if (!name || !email || !password) {
    res.status(404);
    throw new Error("plz enter all the feilds");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("user alreadt exist");
  }
  const user = await User.create({
    name: name,
    email: email,
    password: password,
    pic: pic,
  });
  if (user) {
    // alert("User created sucessfully");
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: jwt.sign(user._id, secretKey, { expiresIn: "30d" }),
    });
  } else {
    res.status(400);
    throw new Error("Failed to create the user");
  }
};

module.exports = { registerUser };
