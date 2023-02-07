const path = require('path');

const aboutController = {
    index: (req, res) => {
        res.render('sobrenos');
    }
}

module.exports = aboutController;