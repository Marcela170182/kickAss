const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");



const gameController = {
    index : (req, res) => {

      return  res.render('games', {products});
       
    },
    
    search : (req , res) => {
      let search = req.query.keywords;
      let productsToSearch = products.filter(product => product.title.toLowerCase().includes(search));
      res.render('results' , {products : productsToSearch, search});
    }
}

module.exports =  gameController;



