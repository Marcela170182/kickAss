const express = require("express");
const router = express.Router();
const PaymentController = require("../controllers/PaymentControllers");

router.get('/Payment', PaymentController.index);


module.exports = router;