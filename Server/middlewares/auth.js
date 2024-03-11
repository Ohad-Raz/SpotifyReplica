const { verifyToken } = require("../utils/jwt");
const { TokenExpiredError } = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const userToken = req.headers["authorization"];
    if (!userToken)
      return res
        .status(401)
        .json({
          message: "User must be logged in to access this resource.",
          status: "error",
        });

    const token = userToken.split(" ")[1];
    const payload = verifyToken(token);
    req.user = payload;
    next();
  } catch (error) {
    console.error(error);
    if (error instanceof TokenExpiredError) {
      return res
        .status(401)
        .json({
          message: "Token expired. Please log in again.",
          status: "error",
        });
    } else {
      return res.status(401).json({ message: "Unauthorized", status: "error" });
    }
  }
};

const authorize = (roles) => {
  return (req, res, next) => {
    const user = req.user;

    if (roles.includes(user.role)) {
      next();
    } else {
      return res
        .status(403)
        .json({
          message: "You do not have permission to access this resource.",
          status: "error",
        });
    }
  };
};

module.exports = { auth, authorize };
