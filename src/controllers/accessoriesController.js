const path = require('path');
const fs = require('fs');

const accessorieRequest = require('../requests/accessorieRequest');

//const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const accessoriesController = {
    index : (req, res) => {
        accessorieRequest.getProducts().
      then(productsReturned =>{
        products = productsReturned.data;
        return  res.render('acessorios', {products})
      })
      .catch(err => {
        console.log('error');
      })
      
       
    }
    
}


module.exports = accessoriesController;


