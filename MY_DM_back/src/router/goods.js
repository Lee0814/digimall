const express = require("express");

const goods_handler = require("../middleware/goods_handle/goods");
const get_order = require("../middleware/order_handle/get_order");
const add_order = require("../middleware/order_handle/add_order");

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

router.get("/get_address", goods_handler.get_address);
router.post("/add_address", goods_handler.add_address);
router.post("/add_order", add_order);
router.get("/get_order", get_order);

router.get("/get_collection", goods_handler.get_collection);
router.get("/add_collection_list", goods_handler.add_collection_list);

router.post("/update_default", goods_handler.update_default);
router.post("/cancel_the_collection", goods_handler.cancel_the_collection);
router.post("/delete_the_address", goods_handler.delete_the_address);
router.post("/update_name", goods_handler.update_name);
router.post("/update_password", goods_handler.update_password);
module.exports = router;
