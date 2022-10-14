const express = require('express');
const router = express.Router();

const GameController = require('../controllers/gamesControllers');

router.get('/Games', GameController.index);




module.exports = router;