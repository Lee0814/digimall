const express = require("express");
const router = express.Router();

const varify = require("../middleware/login_handdle/verify_password");
const get_token = require("../middleware/login_handdle/get_token");
const get_userinfo = require("../middleware/login_handdle/get_userinfo");

router.use(express.json());
router.post("/", varify, get_token, get_userinfo);
module.exports = router;
