const User = require("../models/User");
const bcrypt = require("bcrypt");
const userService = require("../Services/userServices");
const generateToken = require("../utils/generateToken");

// register user
const registerUser = async (req, res) => {
  try {
    const username = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const user = await userService.regUser(username, email, password);

    res.status(200).json(user);
  } catch (error) {
    console.log("error");
    res.status(500).json(error);
    console.log(error);
  }
};

//login user

const loginUser = async (req, res) => {
  console.log("hello");
  try {
    const email = req.body.email;
    const password = req.body.password;

  
    const user = await userService.logUser(email, password);
    const token =generateToken(user._id);
    console.log(token);
    res.status(200).json({user,token});
  } catch (error) {
    console.log("kkk", error);
    res.status(500).json(error);
  }
};

module.exports = { registerUser, loginUser };
