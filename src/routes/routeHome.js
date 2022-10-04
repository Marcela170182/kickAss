const express = require('express');
const router = express.Router();

const HomeController = require('../controllers/HomeControllers');


router.get('/', HomeController.index);








module.exports = router;