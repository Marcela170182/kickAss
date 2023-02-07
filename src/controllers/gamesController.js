const path = require('path');
const fs = require('fs');

const productRequest = require('../requests/productRequest');




const gameController = {
  index: (req, res) => {
    productRequest.getProducts().
      then(productsReturned => {
        products = productsReturned.data;
        return res.render('games', { products })
      })
      .catch(error => {
        if (error.code === 'ECONNREFUSED') {
          return res.render('error', { error: 'Falha na comunicação com o servidor, por favor tente mais tarde!' });
        }
        return res.render('error', { error });
      })


  },

  search: (req, res) => {
    let search = req.query.keywords;

    productRequest.getProducts().
      then(productsReturned => {
        products = productsReturned.data;
        products = products.filter(product => product.title.toLowerCase().includes(search));
        console.log(products);
        console.log(search);
        return res.render('results', { products: products, search });

      })
      .catch(error => {
        if (error.code === 'ECONNREFUSED') {
          return res.render('error', { error: 'Falha na comunicação com o servidor, por favor tente mais tarde!' });
        }
        return res.render('error', { error });
      })

  }
}

module.exports = gameController;


