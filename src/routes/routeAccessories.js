const express = require("express");
const router = express.Router();

const AccessoriesController = require('../controllers/accessoriesControllers');


router.get('/Accessories', AccessoriesController.index);

module.exports = router;