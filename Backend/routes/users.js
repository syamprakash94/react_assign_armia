const router = require("express").Router();

const { registerUser, loginUser } = require("../Controller/userController");

// register user
router.route("/register").post(registerUser);
// login user
router.route("/login").post(loginUser);

module.exports = router;
