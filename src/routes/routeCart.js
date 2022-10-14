const express = require("express");
const cartController = require('../controllers/cartController');
const router = express.Router();

router.get('/Cart', cartController.index);


module.exports = router;