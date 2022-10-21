const path = require('path');
const gameController = {
    index : (req, res) => {
        res.render('games');
    }
}

module.exports =  gameController;