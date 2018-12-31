const jwt = require("jsonwebtoken");
const constants = require('../constants');

let jwtHash  = constants.appPasswords.JWT_HASH

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token,  process.env.JWT_KEY);
    req.userData = { email: decodedToken.email, userId: decodedToken.userId };
    next();
  } catch (error) {
    res.status(401).json({ message: "Not authenticated!" });
  }
};
