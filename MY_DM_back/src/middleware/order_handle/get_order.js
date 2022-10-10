const connection = require("../../mysql/createpool");

const GET_SQL = "SELECT * FROM orders where user_id=?;";

async function get_order(req, res, next) {
  const data = req.query;
  // console.log(sql);
  // console.log(data);

  const result = await connection.query(GET_SQL, data.user_id);
  console.log(result[0]);
  res.send(result[0].reverse());
}
module.exports = get_order;
