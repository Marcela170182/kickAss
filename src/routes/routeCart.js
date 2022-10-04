const express = require("express");
const CartController = require('../controllers/CartControllers');
const router = express.Router();

router.get('/Cart', CartController.index);


module.exports = router;