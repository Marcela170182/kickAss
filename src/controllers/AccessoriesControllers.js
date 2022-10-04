const path = require("path");
const AccessoriesController = {
    index : (req, res) => {
        res.sendFile(path.join(__dirname, "../../public/html/acessorios.html"));
    }
}


module.exports = AccessoriesController;