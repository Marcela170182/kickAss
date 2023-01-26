const express = require("express");
const router = express.Router();
const admListController = require("../controllers/admListController");

router.get('/list', admListController.index);


module.exports = router;