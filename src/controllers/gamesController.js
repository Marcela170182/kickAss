const path = require('path');
const fs = require('fs');

const productRequest = require('../requests/productRequest');



//const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");



const gameController = {
    index : (req, res) => {
      productRequest.getProducts().
      then(productsReturned =>{
        products = productsReturned.data;
        return  res.render('games', {products})
      })
      .catch(err => {
        console.log('error');
      })
      
       
    },
    
    search : (req , res) => {
      let search = req.query.keywords;
      let productsToSearch = products.filter(product => product.title.toLowerCase().includes(search));
      res.render('results' , {products : productsToSearch, search});
    }
}

module.exports =  gameController;


