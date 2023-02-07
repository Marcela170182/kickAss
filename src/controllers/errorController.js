const path = require('path');

const errorController = {
    index : (req, res) => {
        res.render('erro')
    }
}

module.exports = errorController;