const path = require("path");
const registerController = {
    index : (req, res) => {
        res.render('cadastro');
    }
}


module.exports = registerController;