const express = require('express');
const router = express.Router();

const HomeController = require('../controllers/homeControllers');


router.get('/', HomeController.index);








module.exports = router;