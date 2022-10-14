const express = require("express");
const router = express.Router();

const accessoriesController = require('../controllers/accessoriesController');


router.get('/accessories', accessoriesController.index);

module.exports = router;