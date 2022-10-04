const path = require('path');
const HomeController = {
    index: (req,res) => {
        res.sendFile(path.join(__dirname, "../../public/html/index.html"))
    }
}

module.exports = HomeController;