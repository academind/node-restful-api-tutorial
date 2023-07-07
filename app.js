const express = require("express");

const app = express();

// declaring variables with packages
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");

// declaring variables with path of routes
const productRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/orders");
const postRoutes = require("./api/routes/postRoutes");
const userRoutes = require("./api/routes/userRoutes");
// adding Helmet to enhance your Rest API's security
app.use(helmet());

// morgan for logging in console
// app.use(morgan('dev'));
app.use(morgan("combined"));

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// making the uploads folder accessable - only by /upload route
app.use("/uploads", express.static("uploads"));

// defining Routes
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/posts", postRoutes);
app.use("/users", userRoutes);

// default path - if no path found
app.use((req, res, next) => {
  const error = new Error("not Found");
  // error.status(404);

  error.status = 404;
  next(error);
  // res.status(200).json({
  //     message: 'It works!'
  // });
});

// error handling - if api crashes
// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  // console.log("err stack", error.stack);
  // console.log("err name:", error.name);
  // console.log("err code", error.code);
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
