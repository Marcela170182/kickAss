const path = require('path');
const cartController = {
    index : (req, res) => {
        res.render('carrinho')
    }
}

module.exports = cartController;