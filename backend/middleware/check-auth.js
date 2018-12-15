const jwt = require("jsonwebtoken");
const constants = require('../constants');

let jwtHash  = constants.appPasswords.JWT_HASH
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, jwtHash);
    next();
  } catch (error) {
    res.status(401).json({ message: "Auth failed!" });
  }
};
