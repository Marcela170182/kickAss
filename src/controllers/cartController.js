const path = require('path');
const CartController = {
    index : (req, res) => {
        res.render('carrinho')
    }
}

module.exports = CartController;