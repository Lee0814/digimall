const connection = require("../../mysql/createpool");

const query_name = ` 
SELECT username  FROM users WHERE id=?
`;

async function getProfile(req, res, next) {
  const data = req.query;

  const result = await connection.query(query_name, data.user_id);
  res.send(result[0]);
}

module.exports = getProfile;
