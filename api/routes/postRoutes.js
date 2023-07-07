const express = require("express");

const router = express.Router();
const postController = require("../controllers/postController");
const checkAuth = require("../middleware/check-auth");
// ....... multer start

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (request, file, callback) {
    callback(null, "./uploads/");
  },
  filename: function (request, file, callback) {
    // callback(null, file.filename);
    callback(null, new Date().toISOString() + file.originalname);
  },
});

const myfilefilter = (req, file, callback) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    callback(null, true);
  } else {
    callback(new Error("File Type not Supported"), false);
  }
};

const multeroptions = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: myfilefilter,
});

// const multeroptions = multer({ dest: "./uploads" });
// ....... multer ends

router.route("/").get(postController.getAll).post(postController.getAll);

router.route("/createNew").post(checkAuth, postController.createNew);

router
  .route("/addimg")
  .post(
    checkAuth,
    multeroptions.single("productImgg"),
    postController.addImgfun
  );
// router.route("/addimgg").post(multer().none(), postController.addImg);

router
  .route("/id/:id")
  .get(postController.getById)
  .post(postController.getById);

router.route("/:id").get(postController.getById).post(postController.getById);

module.exports = router;
