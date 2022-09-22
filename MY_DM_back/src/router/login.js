const express = require("express");
const router = express.Router();

const varify = require("../middleware/login_handdle/verify_password");
const getToken = require("../middleware/login_handdle/get_token");


router.use(express.json())
router.post("/", varify, getToken);
module.exports = router;
