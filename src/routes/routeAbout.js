const { Router } = require("express");
const express = require("express");
const router = express.Router();

const AboutController = require('../controllers/aboutController');

router.get('/About',AboutController.index);








module.exports = router;