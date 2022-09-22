const connection = require("../../mysql/createpool");
//常量
const USENAME_ALREADY_EXISTS = "USENAME_ALREADY_EXISTS";
const NAME_OR_PASSWORD_IS_REQUIRED = "NAME_OR_PASSWORD_IS_REQUIRED";

// 查询语句
const query = `SELECT username FROM users WHERE username=?`;

async function verify(req, res, next) {
  const { username, password } = req.body;
  //   const name = 1234;
  console.log(req.body);
  const result = await connection.execute(query, [username]);

  //1.判断是否为空
  if (!username || !password || username === "" || password === "") {
    next(new Error(NAME_OR_PASSWORD_IS_REQUIRED));
  }
  //有长度则被注册了
  if (result[0].length) {
    next(new Error(USENAME_ALREADY_EXISTS));
  } else {
    //进入注册中间件
    console.log("进入注册中间件");
    await next();
  }
}

module.exports = verify;
