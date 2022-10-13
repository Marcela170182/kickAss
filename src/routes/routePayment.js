const express = require("express");
const router = express.Router();
const PaymentController = require("../controllers/paymentControllers");

router.get('/Payment', PaymentController.index);


module.exports = router;