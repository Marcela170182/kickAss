const express = require('express');
const router = express.Router();
const path = require('path');

const gameController = require('../controllers/gamesController');

router.get('/Games', gameController.index);




module.exports = router;