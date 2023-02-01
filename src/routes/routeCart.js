const express = require("express");
const cartController = require('../controllers/cartController');
const router = express.Router();

router.get('/Cart', cartController.index);
router.post('/Cart', cartController.index);
router.delete('/Cart/:id', cartController.delete);

router.post('/Cart/increment', cartController.increment);
router.post('/Cart/decrement', cartController.decrement);

module.exports = router;