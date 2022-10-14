const express = require("express");
const CartController = require('../controllers/cartControllers');
const router = express.Router();

router.get('/Cart', CartController.index);


module.exports = router;