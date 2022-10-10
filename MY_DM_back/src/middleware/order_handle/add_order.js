const connection = require("../../mysql/createpool");

const db = require("../../mysql/db");

const DELETE_SQL = "DELETE FROM cart_list WHERE user_id=?";
const ADD_SQL = "insert into orders set ?";
const SELECT_ERROR = "数据库错误";
async function add_order(req, res, next) {
  const data = req.body.cart_list;
  const address = req.body.address;
  data.name = address.name;
  data.phone = address.phone;
  data.detail = address.detail;
  await connection.query(DELETE_SQL, [data[0].user_id]);
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    data[i].name = address.name;
    data[i].phone = address.phone;
    data[i].detail = address.detail;
    console.log(data[i]);
    await connection.query(ADD_SQL, [data[i]]);
  }

  console.log("添加");

  console.log("插入成功");
  res.send("改");
}
module.exports = add_order;
