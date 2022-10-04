const { Router } = require("express");
const express = require("express");
const router = express.Router();

const AboutController = require('../controllers/AboutControllers');

router.get('/About',AboutController.index);








module.exports = router;