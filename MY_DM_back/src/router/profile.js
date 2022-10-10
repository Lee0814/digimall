const express = require("express");
const router = express.Router();

const get_profile = require("../middleware/profile_handle/get_profile");
router.get("/", get_profile);
module.exports = router;
