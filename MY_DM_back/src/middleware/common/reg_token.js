const jwt = require("jsonwebtoken");

const key = "blasslee";
const UNAUTHORIZATION = "UNAUTHORIZATION";

function hasToken(req, res, next) {
  const token = req.headers.authorization;
  console.log(req.headers);
  jwt.verify(token, key, (err, decoded) => {
    if (err) {
      console.log("token验证失败");
      next(new Error(UNAUTHORIZATION));
    } else {
      console.log("token验证成功");

      next();
    }
  });
}
module.exports = hasToken;
