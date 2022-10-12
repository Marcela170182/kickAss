const path = require('path');
const GameController = {
    index : (req, res) => {
        res.render('games');
    }
}

module.exports =  GameController;