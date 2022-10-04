const path = require('path');
const CartController = {
    index : (req, res) => {
        res.sendFile(path.join(__dirname, "../../public/html/carrinho.html"))
    }
}

module.exports = CartController;