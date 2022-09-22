// 导入 mysql 模块
const mysql = require("mysql");

// 创建数据库连接对象
const db = mysql.createPool({
  // host: '127.0.0.1',
  // user: 'root',
  // password: 'admin123',
  // database: 'my_dm_01',
  // host: '127.27.2.122',
  // user: 'digital_mall',
  // password: 'hB6nHPk7XNtZxz3z',
  // database: 'test'
  host: "121.40.29.63",
  user: "root",
  password: "159357Cyj",
  database: "digital_mall",
});

// 向外共享 db 数据库连接对象
module.exports = db;
