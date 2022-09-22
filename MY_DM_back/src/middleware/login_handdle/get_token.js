const jwt = require("jsonwebtoken");

const key = "blasslee";
//颁发token
function getToken(req, res, next) {

  console.log("----------------");
  console.log(req.body.username);
  const user = {
    username: req.body.username,
    id: 1,
  };
  const token = jwt.sign(user, key, {
    expiresIn: 10 * 1000 * 60,
  });
  //   res.header("Access-Control-Allow-Credentials", "true");
  res.cookie("token", token, {
    maxAge: 1000 * 1000,
  });

  res.send({ success: true, token, userInfo: { id: 1, username: req.body } });
}
module.exports = getToken;
