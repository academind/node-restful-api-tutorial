const express = require("express");

const router = express.Router();

const userController = require("../controllers/userController");

router.route("/signup").post(userController.createNewUser);

router.route("/login").post(userController.login);

// router.route("/logout").post(userController.logout);

// router.route("/deactivate").post(userController.deactivate);

// router.route("/resetpassword").post(userController.resetPassword);

module.exports = router;
