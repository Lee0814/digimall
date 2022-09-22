const mysql = require("mysql2");

const connection = mysql.createPool({
  host: "121.40.29.63",
  user: "root",
  password: "159357Cyj",
  database: "digital_mall",
});

connection.getConnection((err, cnn) => {
  if (err) {
    console.log("连接失败");
  } else {
    console.log("连接成功");
  }
});
module.exports = connection.promise();
