const express = require("express");
const router = express.Router();

const AccessoriesController = require('../controllers/AccessoriesControllers');


router.get('/Accessories', AccessoriesController.index);

module.exports = router;