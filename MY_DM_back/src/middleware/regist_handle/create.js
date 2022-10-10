const connection = require("../../mysql/createpool");

const { md5password } = require("../common/password_handdle");

//创建语句
const createUser = `Insert users (username,password) value(?,?)`;

const create = function (req, res, next) {
  const { username, password } = req.body;
  const newPassword = md5password(password);

  const result = connection.execute(createUser, [username, newPassword]);
  console.log("创建成功");
  res.send({ success: true, result,message:'注册成功' });
};

module.exports = create;
