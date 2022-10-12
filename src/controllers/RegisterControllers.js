const path = require("path");
const RegisterController = {
    index : (req, res) => {
        res.render('cadastro');
    }
}


module.exports = RegisterController;