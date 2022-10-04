const express = require('express');
const router = express.Router();

const GameController = require('../controllers/GamesControllers');

router.get('/Games', GameController.index);




module.exports = router;