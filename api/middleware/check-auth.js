const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    // const token = req.headers.authorization.split(" ")[1];
    // token = req.body.token;
    let token = req.headers.authorization.split(" ")[1];
    console.log("token - ", token);
    const decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    req.body.decodedData = decoded;
    console.log("decoded - ", decoded);
    console.log("req - ", req.body);
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Auth failed",
      error: err.message,
    });
  }
};

// jwt.decode();
// jwt token is not encrypted you can read what inside it,
// so decode meathod just decodes the values

// jwt.verify();
// it verifies and returns the decoded value
