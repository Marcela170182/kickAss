const express = require('express');
const router = express.Router();

const LoginController = require('../controllers/loginControllers');


router.get('/Login', LoginController.index);








module.exports = router;