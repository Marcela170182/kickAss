const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const product = products.filter(function(product){
   return product.stock == "yes"
})



const gameController = {
    index : (req, res) => {
       


       
       
        res.render('games' , {product, toThousand});
    }
}

module.exports =  gameController;