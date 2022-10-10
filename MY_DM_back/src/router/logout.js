const express = require("express");
const router = express.Router();

const delete_user = require("../middleware/logout_handle/delete_user");

router.use(express.json());
router.post("/", delete_user);
module.exports = router;
