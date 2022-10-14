const path = require('path');
const AboutController = {
    index: (req, res) => {
        res.render('sobrenos');
    }
}

module.exports = AboutController;