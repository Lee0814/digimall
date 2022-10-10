const connection = require("../../mysql/createpool");

const query_id = ` 
SELECT id  FROM users WHERE username=?
`;
async function get_userinfo(req, res, next) {
  const username = req.body.username;
  const resultid = await connection.execute(query_id, [username]);

  res.send({
    success: true,
    token: req.body.token,
    userInfo: { id: resultid[0][0].id, username: req.body.username },
  });
}

//获取id
module.exports = get_userinfo;
