const db = require("../../mysql/db");

const SELECT_ERROR = "SELECT ERROR";

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
  console.log('进入');
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
