const path = require('path');
const AboutController = {
    index: (req, res) => {
        res.sendFile(path.join(__dirname, '../../public/html/sobrenos.html'));
    }
}

module.exports = AboutController;