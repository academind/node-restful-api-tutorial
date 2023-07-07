const UserModel = require("../models/userModel");

const bcrypt = require("bcrypt");

exports.createNewUser = async (req, res, next) => {
  try {
    bcrypt.hash(req.body.password, 7, async (err, hash) => {
      if (err) {
        return res.status(500).json({
          message: "Error Occured while hashing",
        });
      } else {
        console.log("enc - ", hash);
        let userModelObj = new UserModel();
        userModelObj = await userModelObj.createNewUser(
          req.body.firstname,
          req.body.lastname,
          req.body.email,
          req.body.imgurl,
          hash
        );
        console.log("userModelObj", userModelObj);
        return res.status(200).json({
          message: "User Controller - createNewUser",
          data: userModelObj,
        });
      }
    });
  } catch (error) {
    // console.log(error);
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    // return 0;
    let userModelObj = new UserModel();
    userModelObj = await userModelObj.login(req.body.email, req.body.password);

    return res.status(200).json({
      message: "User Controller - createNewUser",
      data: userModelObj,
    });
  } catch (error) {
    // console.log(error);
    next(error);
  }
};
