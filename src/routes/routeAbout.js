const { Router } = require("express");
const express = require("express");
const router = express.Router();

const aboutController = require('../controllers/aboutController');

router.get('/About',aboutController.index);








module.exports = router;