const express = require('express');
const router = express.Router();
const axios = require('axios')
const { body, check, validationResult } = require('express-validator');
const loginController = require('../controllers/loginController');
const loginValidations = require('../middlewares/loginMid2');
const { Router } = require('express');



router.get('/Login', loginController.index);
router.post('/Login', loginValidations, loginController.login);



module.exports = router;