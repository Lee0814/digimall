const db = require("../../mysql/db");
const connection = require("../../mysql/createpool");
const SELECT_ERROR = "SELECT ERROR";

const { md5password } = require("../common/password_handdle");
exports.get_test = (req, res) => {
  const sql = "SELECT * FROM home_multi_data;";
  // const data = req.body
  // const sql = 'update bookinfo set price = 138.00 where id =?'
  // console.log(sql);
  // console.log(data);
  db.query(sql, (err, results) => {
    if (err) {
      next(new Error(SELECT_ERROR));
      //   return res.cc(err);
    }

    if (results.length > 0) {
      return res.send(results);
    }
  });
};

exports.get_test_two = (req, res) => {
  const sql = "SELECT * FROM goods_list where page=?&&type=?";
  const data = req.query;
  // const sql = 'update bookinfo set price = 138.00 where id =?'
  // console.log(sql);
  // console.log(data);
  db.query(sql, [data.page, data.type], (err, results) => {
    // console.log(sql);
    if (err) {
      next(new Error(SELECT_ERROR));
      //   return res.cc(err);
    }
    if (results.length > 0) {
      return res.send(results);
    }
  });
};

exports.get_test_three = (req, res) => {
  const sql = "SELECT * FROM home_recommond_data;";
  // console.log(sql);
  // console.log(data);

  db.query(sql, (err, results) => {
    if (err) {
      //   return res.cc(err);
      next(new Error(SELECT_ERROR));
    }

    if (results.length > 0) {
      return res.send(results);
    }
  });
};

exports.get_test_four = (req, res) => {
  const data = req.query;
  console.log(data);
  const sql = "SELECT * FROM goods_detail where iid=?";
  // console.log(sql);
  // console.log(data);

  db.query(sql, data.iid, (err, results) => {
    if (err) {
      //   return res.cc(err);
      next(new Error(SELECT_ERROR));
    }
    if (results.length > 0) {
      return res.send(results);
    }
  });
};

exports.add_cart_list = (req, res) => {
  const data = req.query;
  console.log("添加");
  console.log(data);
  // if (!user_info.username || !user_info.password) {
  //     return res.send({ status: 1 ,message: '不合法'})
  // }
  const sql = "insert into cart_list set?";
  db.query(
    sql,
    {
      image_url: data.image_url,
      title: data.title,
      desc: data.desc,
      price: data.price,
      count: data.count,
      user_id: data.user_id,
      good_id: data.good_id,
    },
    (err, results) => {
      if (err) {
        // return res.cc(err);
        next(new Error(SELECT_ERROR));
      }
      if (results.affectedRows !== 1) {
        // return res.cc("失败，请重试");
        next(new Error(SELECT_ERROR));
      }
      // res.send({statu:0,message:'注册成功！'})
      res.cc("成功", 0);
    }
  );
};

exports.get_cart_list = (req, res) => {
  const data = req.query;
  const sql = "SELECT * FROM cart_list where user_id=?;";
  // console.log(sql);
  // console.log(data);

  db.query(sql, data.user_id, (err, results) => {
    // console.log(1);
    if (err) {
      //   return res.cc(err);
      next(new Error(SELECT_ERROR));
    }
    if (results.length > 0) {
      return res.send(results);
    }
  });
};

exports.get_sreach_goods_list = (req, res) => {
  const user_info = req.body;
  console.log(user_info);
  console.log("进入");
  const sql = "select * from goods_list where title like ?";
  db.query(sql, "%" + user_info.sreach_data + "%", (err, result) => {
    if (err) {
      //   return res.cc(err);
      next(new Error(SELECT_ERROR));
    }
    if (result.length > 0) {
      return res.send(result);
    }
  });
};

exports.delete_cart_list = (req, res) => {
  const data = req.query;
  // console.log(data);
  const sql = "SELECT * FROM cart_list where id=?;";

  db.query(sql, data.id, (err, results) => {
    if (err) {
      //   return res.cc(err);
      next(new Error(SELECT_ERROR));
    }
    // if (results.length > 0) {
    //     return res.send(results)
    // }
    const sql = "DELETE FROM cart_list where id =?";
    db.query(sql, data.id, () => {
      // console.log(1);
      return res.send({
        status: 1,
        message: "删除成功",
      });
    });
  });
};
exports.get_address = (req, res) => {
  const data = req.query;
  const sql = "SELECT * FROM address where user_id=?;";
  // console.log(sql);
  // console.log(data);

  db.query(sql, data.user_id, (err, results) => {
    // console.log(1);
    if (err) {
      return res.cc(err);
    }
    if (results.length > 0) {
      return res.send(results);
    }
  });
};

exports.add_address = (req, res) => {
  const data = req.query;
  console.log(data);
  // if (!user_info.username || !user_info.password) {
  //     return res.send({ status: 1 ,message: '不合法'})
  // }

  const sql = "insert into address set?";
  db.query(
    sql,
    {
      user_id: data.user_id,
      name: data.name,
      phone: data.phone,
      detail: data.detail,
      default: data.isDefault,
    },
    (err, results) => {
      if (err) {
        return res.cc(err);
      }
      if (results.affectedRows !== 1) {
        return res.cc("失败，请重试");
      }
      // res.send({statu:0,message:'注册成功！'})
      console.log("成功");
      res.cc("成功", 0);
    }
  );
};

exports.get_collection = (req, res) => {
  const data = req.query;
  const sql = "SELECT * FROM collection where user_id=?;";
  // console.log(sql);
  // console.log(data);

  db.query(sql, data.user_id, (err, results) => {
    // console.log(1);
    if (err) {
      return res.cc(err);
    }
    if (results.length > 0) {
      return res.send(results);
    }
  });
};

exports.add_collection_list = (req, res) => {
  const data = req.query;
  console.log(data);
  // if (!user_info.username || !user_info.password) {
  //     return res.send({ status: 1 ,message: '不合法'})
  // }
  const sql = "insert into collection set?";
  db.query(
    sql,
    {
      image_url: data.image_url,
      title: data.title,
      price: data.price,
      user_id: data.user_id,
    },
    (err, results) => {
      if (err) {
        // return res.cc(err);
        next(new Error(SELECT_ERROR));
      }
      if (results.affectedRows !== 1) {
        // return res.cc("失败，请重试");
        next(new Error(SELECT_ERROR));
      }
      // res.send({statu:0,message:'注册成功！'})
      res.cc("成功", 0);
    }
  );
};

exports.delete_the_address = (req, res) => {
  const data = req.query;
  const sql = "DELETE FROM address where id =?";
  db.query(sql, data.id, () => {
    return res.send({
      status: 1,
      message: "删除成功",
    });
  });
};

exports.cancel_the_collection = (req, res) => {
  const data = req.query;
  const sql = "DELETE FROM collection where id =?";
  db.query(sql, data.id, () => {
    return res.send({
      status: 1,
      message: "删除成功",
    });
  });
};

exports.update_default = (req, res) => {
  const data = req.query;
  const sql = "update address set `default`=? where id=?;";
  db.query(sql, [data.new_default, data.id], (err) => {
    if (err) {
      return res.cc(err);
    }
    res.cc("成功", 0);
  });
};

exports.update_name = async (req, res) => {
  console.log(req);
  const data = req.query;

  const selectSql = "SELECT username FROM users WHERE id = ?";
  const result = await connection.query(selectSql, [data.id]);
  //判断密码是否相同
  if (data.new_name == result[0][0].username) {
    res.send({
      success: false,
      status: 1,
      message: "修改用户名与原用户名相同",
    });
  } else {
    const sql = "update users set username=? where id=?;";
    db.query(sql, [data.new_name, data.id], (err) => {
      if (err) {
        return res.cc(err);
      }
      res.cc("成功", 0);
    });
  }
};

exports.update_password = async (req, res) => {
  const data = req.query;
  const password = md5password(data.new_password);

  const selectSql = "SELECT password FROM users WHERE id = ?";
  const result = await connection.query(selectSql, [data.id]);
  if (password == result[0][0].password) {
    res.send({ success: false, status: 1, message: "修改密码与原密码相同" });
  } else {
    const updateSql = "update users set password=? where id=?;";
    db.query(updateSql, [password, data.id], (err) => {
      if (err) {
        return res.cc(err);
      }
      res.cc("成功", 0);
    });
  }
};
