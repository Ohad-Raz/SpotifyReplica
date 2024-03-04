const { verifyToken } = require("../utils/jwt");

const auth = (req, res, next) => {
  try {
    const userToken = req.headers["authorization"];
    console.log(userToken);
    if (!userToken) return res.status(401).send("unAuthorization");
    console.log({ userToken });
    const token = userToken.split(" ")[1];
    console.log(token);
    const payload = verifyToken(token);
    if (!payload) return res.status(401).send("unAuthorization");
    req.user = payload;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).send("unAuthorization");
  }
};

const authorize = (roles) => {
  console.log({ roles });
  return (req, res, next) => {
    const user = req.user;

    if (roles.includes(user.role)) next();
    else res.status(401);
  };
};

module.exports = { auth, authorize };
