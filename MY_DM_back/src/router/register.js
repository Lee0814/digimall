const express = require("express");
const router = express.Router();



const veritfy = require("../middleware/regist_handle/verify_num");
const create = require("../middleware/regist_handle/create");
router.use(express.json())
router.post("/", veritfy, create);
module.exports = router;
