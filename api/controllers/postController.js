// const { response } = require('express');
const PostModel = require("../models/postsModel");

// const multer = require("multer");
// const upload = multer({ dest: "./uploads/" });

exports.getAll = async (req, res, next) => {
  try {
    let PostModelObj = new PostModel();
    PostModelObj = await PostModelObj.getall();

    res.status(200).json({
      message: "Handling Get request to  Get all - Posts Controller",
      item: PostModelObj,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.createNew = async (req, res, next) => {
  try {
    const reqdata = {
      title: req.body.title,
      body: req.body.body,
    };

    // console.log("body-", req.body);

    let PostModelObj = new PostModel();
    PostModelObj = await PostModelObj.save(reqdata.title, reqdata.body);
    console.log("PostModelObj", PostModelObj);

    res.status(200).json({
      message: "Handling Get request to  Create new - Posts Controller",
      insertId: PostModelObj.insertId,
      obj: PostModelObj,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getById = async (req, res, next) => {
  try {
    let PostModelObj = new PostModel();
    PostModelObj = await PostModelObj.getById(req.params.id);

    res.status(200).json({
      message: "Handling Get request to  Get by ID - Posts Controller",
      id: req.params.id,
      data: PostModelObj,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.addImgfun = async (req, res, next) => {
  try {
    console.log(req.file);

    let PostModelObj = new PostModel();
    PostModelObj = await PostModelObj.createNewWithImg(
      req.body.title,
      req.body.body,
      req.file.path
    );

    res.status(200).json({
      message: "Handling addImg ",
      name: req.body,
      file: req.file,
      url: "localhost:3000/" + req.file.path,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
