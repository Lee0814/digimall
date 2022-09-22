const connection = require("../../mysql/createpool");

const { md5password } = require("../common/password_handdle");

const USERNAME_DOSE_NOT_EXISTS = "USERNAME_DOSE_NOT_EXISTS";
const PASSWORD_ERROR = "PASSWORD_ERROR";
//查询语句
const query_name = ` 
SELECT username  FROM users WHERE username=?
`;
const query_password = ` 
SELECT username  FROM users WHERE password=?
`;

const varify = async function (req, res, next) {
  console.log(req.body);
  const { username, password } = req.body;
  // 密码加密
  const newPassword = md5password(password);
  // 先检测账号再检测密码
  const resultNum = await connection.execute(query_name, [username]);
  if (resultNum[0].length) {
    const resultPassword = await connection.execute(query_password, [
      newPassword,
    ]);
    // 验证成功 获取token
    if (resultPassword[0].length) {
      console.log("密码验证成功");
      next();
    } else {
      next(new Error(PASSWORD_ERROR));
      console.log("密码错误");
    }
  } else {
    next(new Error(USERNAME_DOSE_NOT_EXISTS));
    console.log("账号不存在");
  }
};

module.exports = varify;
