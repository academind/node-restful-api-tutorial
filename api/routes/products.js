/* eslint-disable no-unused-vars */
const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling Get request to /products',
  });
});

router.post('/', (req, res, next) => {
  const product = {
    name: req.body.name,
    price: req.body.price,

  };
  const temp = req.body;
  // const temp = req.headers;
  // const temp = req.protocol;  //http

  res.status(200).json({
    message: 'Handling POSTtt request to /products',
    createdProduct: product,
    reqTemp: temp,
  });
});

router.post('/:productId', (req, res, next) => {
  const id = req.params.productId;
  if (id === '2') {
    res.status(200).json({

      message: 'discovered special ID',
      ID: id,
    });
  } else {
    res.status(200).json({

      // message: "discovered special ID",
      ID: id,
    });
  }
});

router.patch('/', (req, res, next) => {
  res.status(200).json({
    message: 'Patch Api',
  });
});

router.delete('/', (req, res, next) => {
  res.status(200).json({
    message: 'Delete Api',
  });
});

module.exports = router;
