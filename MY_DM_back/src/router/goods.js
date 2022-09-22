const express = require("express");

const goods_handler = require("../middleware/goods_handle/goods");

const router = express.Router();
router.use(express.json());
router.get("/multi_data", goods_handler.get_test);

router.get("/goods_list", goods_handler.get_test_two);
router.get("/recommoned_data", goods_handler.get_test_three);

router.get("/detail", goods_handler.get_test_four);
router.get("/add_cart_list", goods_handler.add_cart_list);

router.get("/get_cart_list", goods_handler.get_cart_list);

router.post("/get_sreach_goods_list", goods_handler.get_sreach_goods_list);
router.get("/del_cart_list", goods_handler.delete_cart_list);

module.exports = router;
