const User = require("../models/User");
const bcrypt = require("bcrypt");

// register user
const regUser = async (name, email, password) => {
  try {
    //generate new password and bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create new user
    const newUser = new User({
      username: name,
      email: email,
      password: hashedPassword,
    });

    return await newUser.save();
  } catch (err) {
    throw Error(err);
  }
};

const logUser = async (email, password) => {
  try {
    const user = await User.findOne({ email: email });

    if (user && bcrypt.compare(password, user.password)) {
      return user;
    }
  } catch (err) {
    throw Error(err);
  }
};
module.exports = { regUser, logUser };
