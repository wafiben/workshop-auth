const jwt = require("jsonwebtoken");
const isAuth = async (req, res, next) => {
  try {
    const token = req.header("token");
    const verifyToken = await jwt.verify(token, "shhhhh");
    console.log(verifyToken)
    if (!verifyToken) {
      res.status(401).json({ msg: "you are not authorized" });
    } else {
      next();
    }
  } catch (error) {
    res.status(400).json({ msg: "sssssssssssssssss" });
  }
};
module.exports = isAuth;
