const path = require('path');

const homeController = {
    index: (req, res) => {
        try {
            res.render('index')
        }

        catch (error) {
            if (error.code === 'ECONNREFUSED') {
                return res.render('error', { error: 'Site em manutenção!, por favor tente mais tarde!' });
            }
        }

    }
}

module.exports = homeController;