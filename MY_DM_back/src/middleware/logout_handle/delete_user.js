const connection = require("../../mysql/createpool");

//创建语句
const deleteUser = `DELETE FROM users WHERE id=?`;

const delete_user = async function (req, res, next) {
    console.log(req.body);
  const id = req.body.id;

  const result = await connection.execute(deleteUser, [id]);
  console.log("删除成功");
    res.send({ success: true, result });
};

module.exports = delete_user;
