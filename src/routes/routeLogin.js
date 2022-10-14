const express = require('express');
const router = express.Router();

const loginController = require('../controllers/loginController');


router.get('/Login', loginController.index);








module.exports = router;