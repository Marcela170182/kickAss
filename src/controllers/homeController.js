const path = require('path');


const productRequest = require('../requests/productRequest');

const homeController = {
    index: (req, res) => {
        productRequest.getProducts().
      then(productsReturned => {
        products = productsReturned.data;
        return res.render('index', { products })
      })
      .catch(error => {
        if (error.code === 'ECONNREFUSED') {
          return res.render('error', { error: 'Falha na comunicação com o servidor, por favor tente mais tarde!' });
        }
        return res.render('error', { error });
      })

    }
}

module.exports = homeController;