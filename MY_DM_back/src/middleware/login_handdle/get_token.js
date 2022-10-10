const connection = require("../../mysql/createpool");
const jwt = require("jsonwebtoken");

const key = "blasslee";

const sql = "SELECT id FROM users WHERE username=?";
//颁发token
async function getToken(req, res, next) {
  console.log("----------------");

  const result = await connection.query(sql, [req.body.username]);

  const user = {
    username: req.body.username,
    id: result[0][0].id,
  };
  console.log(user);

  const token = jwt.sign(user, key, {
    expiresIn: 10 * 1000 * 60,
  });
  res.cookie("token", token, {
    maxAge: 1000 * 1000,
  });
  req.body.token = token;
  next();
}
module.exports = getToken;
