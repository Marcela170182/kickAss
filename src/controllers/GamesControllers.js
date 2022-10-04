const path = require('path');
const GameController = {
    index : (req, res) => {
        res.sendFile(path.join(__dirname, "../../public/html/games.html"));
    }
}

module.exports =  GameController;